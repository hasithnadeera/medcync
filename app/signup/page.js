'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { supabase } from '@/app/supabaseClient';
import { Toaster, toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation'; // Import useRouter

export default function SignUp() {
  const router = useRouter(); // Initialize useRouter
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    phone: '',
    id: '',
    address: '',
    gender: 'male'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, dob, phone, id, address, gender } = formData;

    // Show loading toast
    const loadingToast = toast.loading('Creating your account...');

    try {
      const { data, error } = await supabase.from('users').insert([
        {
          name,
          dob: dob,
          phone: phone,
          id_number: id,
          address,
          gender,
          role: 'patient'
        }
      ]);

      if (error) throw error;

      // Success message
      toast.success('Account created successfully!', {
        id: loadingToast,
        duration: 4000,
      });

      // Clear form
      setFormData({
        name: '',
        dob: '',
        phone: '',
        id: '',
        address: '',
        gender: 'male'
      });

      // Redirect to login page after a delay
      setTimeout(() => {
        router.push('/login');
      }, 4000); // Delay for 4 seconds to allow the user to see the success message

    } catch (error) {
      // Error message
      toast.error('Something went wrong. Please try again.', {
        id: loadingToast,
        duration: 4000,
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white">
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
      <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col justify-center bg-white">
        <div className="mb-8">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="MedSync Logo"
              width={150}
              height={50}
              priority
              className="object-contain"
            />
          </Link>
        </div>
        
        <div className="max-w-md mx-auto w-full bg-white p-8 shadow-[0_0_15px_rgba(0,0,0,0.05)] rounded-lg">
          <h1 className="text-2xl font-bold text-gray-900 mb-1">Sign up</h1>
          <p className="text-gray-600 mb-6 text-sm">Stay updated with your health</p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#1055AE] focus:border-[#1055AE] text-black"
              />
            </div>
            
            <div>
              <label htmlFor="dob" className="block text-sm font-medium text-gray-700 mb-1">DOB:</label>
              <input
                type="date"
                id="dob"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                required
                placeholder="mm/dd/yyyy"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#1055AE] focus:border-[#1055AE] text-black"
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={(e) => {
                  const value = e.target.value;
                  // Only allow digits and ensure starts with 07
                  const numericValue = value.replace(/\D/g, '');
                  if (numericValue === '' || 
                      (numericValue.startsWith('07') && numericValue.length <= 10) ||
                      (value.length === 1 && value === '0') ||
                      (value.length === 2 && value === '07')) {
                    setFormData(prevState => ({
                      ...prevState,
                      phone: numericValue
                    }));
                  }
                }}
                placeholder="07XXXXXXXX"
                maxLength="10"
                pattern="07[0-9]{8}"
                title="Please enter a valid SL mobile number starting with 07 followed by 8 digits"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#1055AE] focus:border-[#1055AE] text-black"
              />
            </div>
            
            <div>
              <label htmlFor="id" className="block text-sm font-medium text-gray-700 mb-1">ID Number:</label>
              <input
                type="text"
                id="id"
                name="id"
                value={formData.id}
                onChange={(e) => {
                  const value = e.target.value;
                  if (value === '' || 
                      /^\d{0,12}$/.test(value) || 
                      /^\d{0,9}[vV]?$/.test(value)) {
                    handleChange(e);
                  }
                }}
                pattern="^\d{12}$|^\d{9}[vV]$"
                title="Please enter either 12 digits or 9 digits followed by 'v'"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#1055AE] focus:border-[#1055AE] text-black"
              />
            </div>
            
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Address:</label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                rows="3"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#1055AE] focus:border-[#1055AE] text-black"
              ></textarea>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Gender:</label>
              <div className="flex gap-4">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="male"
                    name="gender"
                    value="male"
                    checked={formData.gender === 'male'}
                    onChange={handleChange}
                    className="h-4 w-4 text-[#1055AE] focus:ring-[#1055AE] border-gray-300 accent-[#1055AE]"
                  />
                  <label htmlFor="male" className="ml-2 text-sm text-gray-700">Male</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="female"
                    name="gender"
                    value="female"
                    checked={formData.gender === 'female'}
                    onChange={handleChange}
                    className="h-4 w-4 text-[#1055AE] focus:ring-[#1055AE] border-gray-300 accent-[#1055AE]"
                  />
                  <label htmlFor="female" className="ml-2 text-sm text-gray-700">Female</label>
                </div>
              </div>
            </div>
            
            <button
              type="submit"
              className="w-full bg-[#1055AE] text-white py-2 px-4 rounded-md hover:bg-[#0d4690] transition-colors focus:outline-none focus:ring-2 focus:ring-[#1055AE] focus:ring-offset-2 font-medium mt-4"
            >
              Register
            </button>
          </form>
          
          <div className="mt-6 text-center">
            <span className="text-sm text-gray-600">Member of MedSync?</span>
            <Link href="/login" className="ml-1 text-sm text-[#1055AE] hover:underline">
              log in
            </Link>
          </div>
        </div>
      </div>
      
      <div className="hidden md:block w-1/2 bg-white relative">
        <div className="absolute inset-0">
          <Image
            src="/signup-image.png"
            alt="Healthcare professionals"
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}