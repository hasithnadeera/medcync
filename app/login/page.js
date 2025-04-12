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
      <div className="flex-1 flex justify-center items-start sm:items-center p-4 pt-0 sm:pt-4">
        <div className="w-full max-w-6xl flex flex-col md:flex-row">
          {/* Left side - Sign In Form */}
          <div className="w-full md:w-2/5 bg-white p-6 md:p-8 rounded-2xl shadow-lg">
            {/* Sign In Form */}
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-gray-800 mb-1">Sign in</h1>
              <p className="text-gray-600 text-sm">Stay updated with your health</p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <input
                  type="tel"
                  placeholder="Phone number"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  value={phoneNumber}
                  onChange={handlePhoneChange}
                  required
                />
              </div>

              <div className="mb-6 relative">
                <input
                  type="text"
                  placeholder="OTP number"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  value={otpNumber}
                  onChange={handleOtpChange}
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

          {/* Right side - Illustration */}
          <div className="hidden md:block md:w-3/5 p-8">
            <div className="h-full w-full flex items-center justify-center">
              <Image
                src="/signin-image.png"
                alt="Doctor with health app illustration"
                width={600}
                height={500}
                className="max-h-full object-contain mix-blend-normal"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}