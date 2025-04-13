'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Login() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otpNumber, setOtpNumber] = useState('');

  const handlePhoneChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleOtpChange = (e) => {
    setOtpNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted with:', { phoneNumber, otpNumber });
  };

  const handleSendOtp = () => {
    // Handle OTP sending
    console.log('Sending OTP to:', phoneNumber);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
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
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="07XXXXXXXX"
                  pattern="07[0-9]{8}"
                  maxLength="10"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-black"
                  value={phoneNumber}
                  onChange={(e) => {
                    const value = e.target.value;
                    // Only allow digits and ensure starts with 07
                    const numericValue = value.replace(/\D/g, '');
                    if (numericValue === '' || 
                        (numericValue.startsWith('07') && numericValue.length <= 10) ||
                        (value.length === 1 && value === '0') ||
                        (value.length === 2 && value === '07')) {
                      handlePhoneChange({ target: { value: numericValue } });
                    }
                  }}
                  title="Please enter a valid SL mobile number starting with 07 followed by 8 digits"
                  required
                />
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