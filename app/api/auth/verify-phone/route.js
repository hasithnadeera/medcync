import { supabase } from '@/app/supabaseClient';
import twilio from 'twilio';

const accountSid = process.env.NEXT_PUBLIC_TWILIO_ACCOUNT_SID;
const authToken = process.env.NEXT_PUBLIC_TWILIO_AUTH_TOKEN;
const serviceSid = process.env.NEXT_PUBLIC_TWILIO_SERVICE_SID;

console.log('Twilio credentials check:', { 
  accountSid: accountSid ? 'Present' : 'Missing', 
  authToken: authToken ? 'Present' : 'Missing', 
  serviceSid: serviceSid ? 'Present' : 'Missing' 
});

let client;
try {
  if (!accountSid || !authToken || !serviceSid) {
    throw new Error('Missing Twilio credentials');
  }
  client = twilio(accountSid, authToken);
} catch (error) {
  console.error('Error initializing Twilio client:', error.message);
  // We'll handle this in the route handler
}

export async function POST(request) {
  try {
    const { phone } = await request.json();
    console.log('Received phone number:', phone);

    // Ensure phone number is in correct format (07XXXXXXXX)
    if (!phone.match(/^07[0-9]{8}$/)) {
      return new Response(
        JSON.stringify({ error: 'Invalid phone number format' }),
        { status: 400 }
      );
    }

    // Check if phone number exists in database with more detailed logging
    console.log('Querying database for phone number:', phone);
    const { data: users, error } = await supabase
      .from('users')
      .select('*')
      .eq('phone', phone);

    console.log('Database query result:', { users, error });

    if (error) {
      console.error('Database error:', error);
      return new Response(
        JSON.stringify({ error: 'Database error: ' + error.message }),
        { status: 500 }
      );
    }

    if (users && users.length > 1) {
      console.error('Multiple users found with the same phone number');
      return new Response(
        JSON.stringify({ error: 'Multiple accounts found with this phone number. Please contact support.' }),
        { status: 409 }
      );
    }

    const user = users?.[0];
    
    if (!user) {
      // Check if the phone number exists in any format
      const { data: allUsers, error: searchError } = await supabase
        .from('users')
        .select('*')
        .or(`phone.eq.${phone},phone.eq.${phone.trim()}`);

      if (searchError) {
        console.error('Error searching for user:', searchError);
        return new Response(
          JSON.stringify({ error: 'Error verifying phone number' }),
          { status: 500 }
        );
      }

      if (!allUsers || allUsers.length === 0) {
        console.log('No user found with phone number:', phone);
        return new Response(
          JSON.stringify({ error: 'Phone number not registered. Please sign up first.' }),
          { status: 404 }
        );
      }

      if (allUsers.length === 1) {
        console.log('Found user with alternative phone format');
        // Send verification code via Twilio
        const verification = await client.verify.v2
          .services(serviceSid)
          .verifications
          .create({ to: `+94${allUsers[0].phone.substring(1)}`, channel: 'sms' });

        return new Response(
          JSON.stringify({ status: verification.status }),
          { status: 200 }
        );
      }
    }

    // Send verification code via Twilio
    try {
      const verification = await client.verify.v2
        .services(serviceSid)
        .verifications
        .create({ to: `+94${phone.substring(1)}`, channel: 'sms' });
      
      console.log('Verification sent successfully:', verification.status);
      
      return new Response(
        JSON.stringify({ status: verification.status }),
        { status: 200 }
      );
    } catch (twilioError) {
      console.error('Twilio API error:', twilioError.message, twilioError.code);
      return new Response(
        JSON.stringify({ error: `Twilio error: ${twilioError.message}` }),
        { status: 500 }
      );
    }

    return new Response(
      JSON.stringify({ status: verification.status }),
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending verification code:', error.message, error.stack);
    return new Response(
      JSON.stringify({ error: `Failed to send verification code: ${error.message}` }),
      { status: 500 }
    );
  }
}