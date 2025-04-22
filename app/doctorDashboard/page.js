'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function DoctorDashboard() {
  // This would typically come from authentication or context
  const doctorName = "Peter Parker";
  
  // State to control which view is shown
  const [activeView, setActiveView] = useState('dashboard');
  // State to control mobile sidebar visibility
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  
  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileSidebarOpen && !event.target.closest('.sidebar') && !event.target.closest('.hamburger-button')) {
        setIsMobileSidebarOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileSidebarOpen]);
  
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar Navigation - Hidden on mobile, shown on larger screens */}
      <div className={`sidebar w-[250px] bg-[#1055AE] text-white flex flex-col h-full fixed md:relative z-30 transition-transform duration-300 ease-in-out ${isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
        <div className="p-4 mb-6">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="MedSync Logo"
              width={120}
              height={40}
              priority
              className="object-contain invert brightness-0 filter"
            />
          </Link>
        </div>
        
        <nav className="flex-1">
          <ul className="space-y-1">
            <li>
              <button 
                onClick={() => setActiveView('dashboard')} 
                className={`flex items-center gap-3 px-4 py-3 w-full text-left ${activeView === 'dashboard' ? 'bg-[#0d4690]' : 'hover:bg-[#0d4690]'} text-white`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
                <span>Home</span>
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveView('search')} 
                className={`flex items-center gap-3 px-4 py-3 w-full text-left ${activeView === 'search' ? 'bg-[#0d4690]' : 'hover:bg-[#0d4690]'} text-white`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
                <span>Search Patients</span>
              </button>
            </li>
            <li>
              <Link href="#" className="flex items-center gap-3 px-4 py-3 hover:bg-[#0d4690] text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                </svg>
                <span>Patient Analytics</span>
              </Link>
            </li>
          </ul>
        </nav>
        
        <div className="p-4 mt-auto">
          <button className="flex items-center gap-2 w-full px-4 py-2 text-white hover:bg-[#0d4690] transition-colors rounded">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            <span>Logout</span>
          </button>
        </div>
      </div>
      
      {/* Main Content Area */}
      <div className="flex-1 md:ml-[250px] overflow-y-auto h-screen">
        {/* Header with add patient button */}
        <header className="py-4">
          <div className="px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            {/* Hamburger Menu Button - Only visible on mobile */}
            <button 
              className="hamburger-button md:hidden text-gray-800 focus:outline-none" 
              onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <div className="ml-auto">
              <Link href="/signup" className="bg-[#1055AE] text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-[#0d4690] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
                Add a patient
              </Link>
            </div>
          </div>
        </header>

        {/* Greeting section with styled name */}
        <section className="py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-semibold text-gray-900">
            Hello <span className="text-[#1055AE]">{doctorName}</span>
          </h1>
        </section>

        {/* Conditional rendering based on active view */}
        {activeView === 'dashboard' ? (
          /* Dashboard content */
          <div className="px-4 sm:px-6 lg:px-8 pb-12">
            <div className="flex flex-wrap gap-6 mb-8">
              {/* Today's patients card */}
              <div className="bg-white p-6 rounded-lg shadow-sm flex items-center gap-4 flex-1 min-w-[200px]">
                <div className="p-3 bg-blue-100 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#1055AE]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-blue-800">Today Patients</p>
                  <p className="text-2xl font-bold text-black">10</p>
                </div>
              </div>

              {/* Total patients card */}
              <div className="bg-white p-6 rounded-lg shadow-sm flex items-center gap-4 flex-1 min-w-[200px]">
                <div className="p-3 bg-blue-100 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#1055AE]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-blue-800">Total Patients</p>
                  <p className="text-2xl font-bold text-black">120</p>
                </div>
              </div>
            </div>

            {/* New Medical Record Form */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-2">New Medical Record</h2>
              <p className="text-gray-500 text-sm mb-6">Fill out the form to log the patient's visit, including their condition, symptoms, prescribed treatment, and additional notes.</p>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="patientId" className="block text-sm font-medium text-gray-700 mb-1">Patient ID<span className="text-red-500">*</span>:</label>
                    <input 
                      type="text" 
                      id="patientId" 
                      placeholder="Search by patient ID"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#1055AE] focus:border-[#1055AE] text-black"
                    />
                  </div>
                  <div>
                    <label htmlFor="illness" className="block text-sm font-medium text-gray-700 mb-1">Illness<span className="text-red-500">*</span>:</label>
                    <input 
                      type="text" 
                      id="illness" 
                      placeholder="e.g., Flu, Diabetes, Hypertension"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#1055AE] focus:border-[#1055AE] text-black"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="symptoms" className="block text-sm font-medium text-gray-700 mb-1">Symptoms<span className="text-red-500">*</span>:</label>
                    <textarea 
                      id="symptoms" 
                      placeholder="List symptoms (separated by commas) (e.g., fever, cough, fatigue)"
                      rows="4"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#1055AE] focus:border-[#1055AE] text-black"
                    ></textarea>
                  </div>
                  <div>
                    <label htmlFor="prescription" className="block text-sm font-medium text-gray-700 mb-1">Prescription<span className="text-red-500">*</span>:</label>
                    <textarea 
                      id="prescription" 
                      placeholder="Enter medication and dosage (e.g., Paracetamol 500mg, 3x daily)"
                      rows="4"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#1055AE] focus:border-[#1055AE] text-black"
                    ></textarea>
                  </div>
                </div>

                <div>
                  <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">Notes:</label>
                  <textarea 
                    id="notes" 
                    placeholder="Additional observations, special instructions, or follow-up requirements."
                    rows="4"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#1055AE] focus:border-[#1055AE] text-black"
                  ></textarea>
                </div>

                <div>
                  <button type="submit" className="bg-[#1055AE] text-white px-6 py-2 rounded-md hover:bg-[#0d4690] transition-colors">
                    Save Record
                  </button>
                </div>
              </form>
            </div>
          </div>
        ) : activeView === 'search' ? (
          /* Search Patients View */
          <div className="px-4 sm:px-6 lg:px-8 pb-12">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-2">Search Patients</h2>
              <p className="text-gray-500 text-sm mb-6">Enter patient information to search for existing patients in the system.</p>
              
              <div className="flex flex-col space-y-4">
                <div className="flex-1">
                  <input 
                    type="text" 
                    placeholder="Search by name, ID, or phone number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-[#1055AE] focus:border-[#1055AE]"
                  />
                </div>
                
                <div>
                  <button className="bg-[#1055AE] text-white px-6 py-3 rounded-md flex items-center gap-2 hover:bg-[#0d4690] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                    </svg>
                    Search
                  </button>
                </div>
                
                {/* Search results would appear here */}
                <div className="mt-8">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Search Results</h3>
                  <div className="border border-gray-200 rounded-md p-4 text-center text-gray-500">
                    No results yet. Use the search bar above to find patients.
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}