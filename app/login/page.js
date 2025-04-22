'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast, Toaster } from 'react-hot-toast';

export default function Login() {
  const router = useRouter();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otpNumber, setOtpNumber] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);

  const handlePhoneChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleOtpChange = (e) => {
    setOtpNumber(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isVerifying) {
      toast.error('Please verify your phone number first');
      return;
    }

    const loadingToast = toast.loading('Verifying OTP...');
    try {
      const response = await fetch('/api/auth/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone: '+94' + phoneNumber, code: otpNumber })
      });

      const data = await response.json();

      if (response.ok) {
        toast.success('Login successful!', { id: loadingToast });
        const { user } = data;
        // Route based on user role
        if (user.role === 'doctor') {
          router.push('/doctorDashboard');
        } else if (user.role === 'pharmacist') {
          router.push('/pharmacistDashboard');
        } else {
          router.push('/patientDashboard');
        }
      } else {
        toast.error(data.error || 'Invalid OTP', { id: loadingToast });
      }
    } catch (error) {
      toast.error('Failed to verify OTP', { id: loadingToast });
    }
  };

  const handleSendOtp = async () => {
    if (!phoneNumber.match(/^7[0-9]{8}$/)) {
      toast.error('Please enter a valid phone number');
      return;
    }

    const loadingToast = toast.loading('Sending OTP...');
    try {
      const response = await fetch('/api/auth/verify-phone', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone: '+94' + phoneNumber })
      });

      const data = await response.json();

      if (response.ok) {
        toast.success('OTP sent successfully!', { id: loadingToast });
        setIsVerifying(true);
      } else if (response.status === 404) {
        toast.error('Phone number not registered. Please sign up first.', { id: loadingToast });
      } else {
        toast.error(data.error || 'Failed to send OTP', { id: loadingToast });
      }
    } catch (error) {
      toast.error('Failed to send OTP', { id: loadingToast });
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Toaster
        position="top-center"
        toastOptions={{
          success: {
            style: {
              background: '#10B981',
              color: 'white',
            },
          },
          error: {
            style: {
              background: '#EF4444',
              color: 'white',
            },
          },
          loading: {
            style: {
              background: '#1055AE',
              color: 'white',
            },
          },
        }}
      />
      {/* Logo Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center h-20">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="MedSync Logo"
            width={165}
            height={55.44}
            priority
            className="object-contain"
          />
        </Link>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex justify-center items-center p-4 pt-0 sm:pt-4">
        <div className="w-full max-w-md">
          {/* Sign In Form */}
          <div className="w-full bg-white p-6 md:p-8 rounded-2xl shadow-lg">
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-gray-800 mb-1">Sign in</h1>
              <p className="text-gray-600 text-sm">Stay updated with your health</p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <div className="mb-6">
                  <div className="flex">
                    <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-gray-300 bg-gray-100 text-gray-600 select-none">+94</span>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="7XXXXXXXX"
                      pattern="7[0-9]{8}"
                      maxLength="9"
                      className="w-full p-4 border border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-black"
                      value={phoneNumber}
                      onChange={(e) => {
                        const value = e.target.value;
                        // Only allow digits and ensure starts with 7
                        const numericValue = value.replace(/\D/g, '');
                        if (
                          numericValue === '' ||
                          (numericValue.startsWith('7') && numericValue.length <= 9)
                        ) {
                          handlePhoneChange({ target: { value: numericValue } });
                        }
                      }}
                      title="Please enter a valid SL mobile number starting with 7 followed by 8 digits"
                      required
                    />
                  </div>
                </div>
                <div className="mb-6 relative">
                  <input
                    type="text"
                    placeholder="OTP number"
                    maxLength="6"
                    pattern="[0-9]{6}"
                    className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-black"
                    value={otpNumber}
                    onChange={(e) => {
                      const value = e.target.value;
                      // Only allow digits and limit to 6 characters
                      const numericValue = value.replace(/\D/g, '').slice(0, 6);
                      setOtpNumber(numericValue);
                    }}
                  />
                  <button
                    type="button"
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-blue-600 font-medium"
                    onClick={handleSendOtp}
                  >
                    Send
                  </button>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-4 rounded-lg font-medium hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
                >
                  Sign in
                </button>
              </div>
            </form>

            <div className="mt-6 text-center">
              <span className="text-gray-600">New to MedSync?</span>{' '}
              <Link href="/signup" className="text-blue-600 font-medium hover:underline">
                Join now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}