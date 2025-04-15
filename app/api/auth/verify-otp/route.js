import { supabase } from '@/app/supabaseClient';
import twilio from 'twilio';

const accountSid = process.env.NEXT_PUBLIC_TWILIO_ACCOUNT_SID;
const authToken = process.env.NEXT_PUBLIC_TWILIO_AUTH_TOKEN;
const serviceSid = process.env.NEXT_PUBLIC_TWILIO_SERVICE_SID;

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
    const { phone, code } = await request.json();
    console.log('Verifying OTP for phone:', phone, 'with code:', code);

    // Verify the OTP code
    const verification_check = await client.verify.v2
      .services(serviceSid)
      .verificationChecks
      .create({ to: `+94${phone.substring(1)}`, code });

    console.log('Verification check result:', verification_check.status);

    if (verification_check.status === 'approved') {
      // Get user data for the verified phone number
      console.log('OTP approved, fetching user data for phone:', phone);
      const { data: users, error } = await supabase
        .from('users')
        .select('*')
        .eq('phone', phone);

      console.log('User data fetch result:', { users, error });

      if (error) {
        console.error('Error fetching user data:', error);
        throw error;
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
          return new Response(
            JSON.stringify({ 
              status: 'success',
              user: allUsers[0]
            }),
            { status: 200 }
          );
        }
      }

      return new Response(
        JSON.stringify({ 
          status: 'success',
          user: user
        }),
        { status: 200 }
      );
    } else {
      return new Response(
        JSON.stringify({ error: 'Invalid verification code' }),
        { status: 400 }
      );
    }

  } catch (error) {
    return new Response(
      JSON.stringify({ error: 'Failed to verify code' }),
      { status: 500 }
    );
  }
}