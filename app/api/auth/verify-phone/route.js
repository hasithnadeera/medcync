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

    // Normalize phone number to +94 format
    let normalizedPhone = phone;
    if (phone.startsWith('+94')) {
      normalizedPhone = phone;
    } else if (phone.startsWith('0')) {
      normalizedPhone = '+94' + phone.substring(1);
    } else {
      return new Response(
        JSON.stringify({ error: 'Invalid phone number format' }),
        { status: 400 }
      );
    }

    // Ensure phone number is in correct format (+94XXXXXXXXX)
    if (!normalizedPhone.match(/^\+94[0-9]{9}$/)) {
      return new Response(
        JSON.stringify({ error: 'Invalid phone number format' }),
        { status: 400 }
      );
    }

    // Check if phone number exists in database using only +94 format
    console.log('Querying database for phone number:', normalizedPhone);
    const { data: users, error } = await supabase
      .from('users')
      .select('*')
      .eq('phone', normalizedPhone);

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
      const alternativePhone = normalizedPhone.replace('+94', '0');
      let { data: allUsers, error: searchError } = await supabase
        .from('users')
        .select('*')
        .or(`phone.eq.${normalizedPhone},phone.eq.${alternativePhone}`);
      
      // If there's an error with the OR syntax, try alternative approach
      if (searchError && searchError.message && searchError.message.includes('syntax')) {
        console.log('Trying alternative query approach for phone search');
        const { data: altUsers, error: altError } = await supabase
          .from('users')
          .select('*')
          .or(`phone.eq.${normalizedPhone},phone.eq.${alternativePhone}`.split(',').join(','));
          
        if (!altError) {
          allUsers = altUsers;
          searchError = null;
        }
      }

      if (searchError) {
        console.error('Error searching for user:', searchError);
        return new Response(
          JSON.stringify({ error: 'Error verifying phone number' }),
          { status: 500 }
        );
      }

      if (!allUsers || allUsers.length === 0) {
        console.log('No user found with phone number:', normalizedPhone);
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
          .create({ to: normalizedPhone, channel: 'sms' });

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
        .create({ to: normalizedPhone, channel: 'sms' });
      
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