'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function PharmacistDashboard() {
  const pharmacistName = "Peter Parker";

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar Navigation */}
      <div className="w-[250px] bg-[#1055AE] text-white flex flex-col h-full">
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
              <Link href="#" className="flex items-center gap-3 px-4 py-3 bg-[#0d4690] text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link href="#" className="flex items-center gap-3 px-4 py-3 hover:bg-[#0d4690] text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
                <span>Prescription</span>
              </Link>
            </li>
          </ul>
        </nav>

        <div className="mt-auto p-4 space-y-2">
          <Link href="#" className="flex items-center gap-2 px-4 py-3 hover:bg-[#0d4690] text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
            </svg>
            <span>Settings</span>
          </Link>
          <Link href="/login" className="flex items-center gap-2 px-4 py-3 hover:bg-[#0d4690] text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd" />
            </svg>
            <span>Logout</span>
          </Link>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-semibold text-gray-900">
              Hello <span className="text-[#1055AE]">{pharmacistName}</span>
            </h1>
            <div className="flex items-center gap-4">
              <button className="text-gray-600 hover:text-gray-900">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </button>
              <Link href="/profile" className="text-gray-600 hover:text-gray-900">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </Link>
            </div>
          </div>
        </header>

        {/* Total Prescriptions Counter */}
        <div className="px-4 sm:px-6 lg:px-8 py-4">
          <div className="bg-white p-4 rounded-lg shadow-sm flex items-center gap-3">
            <div className="p-2 bg-blue-100 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#1055AE]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Prescriptions</p>
              <p className="text-xl font-bold text-[#1055AE]">25</p>
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Issue Medication Form */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold text-[#1055AE] mb-6">Issue Medication</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="prescription" className="block text-sm font-medium text-gray-700 mb-1">Select Prescription</label>
                  <input
                    type="text"
                    id="prescription"
                    placeholder="Search by patient ID"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#1055AE] focus:border-[#1055AE] text-black"
                  />
                </div>
                <div>
                  <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">Mark as Issued</label>
                  <input
                    type="text"
                    id="status"
                    placeholder="e.g., Issued/Pending"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#1055AE] focus:border-[#1055AE] text-black"
                  />
                </div>
                <div>
                  <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">Add Notes</label>
                  <textarea
                    id="notes"
                    rows="4"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#1055AE] focus:border-[#1055AE] text-black"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#1055AE] text-white px-4 py-2 rounded-md hover:bg-[#0d4690] transition-colors"
                >
                  Save Record
                </button>
              </form>
            </div>

            {/* Pending Prescription */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold text-[#1055AE] mb-6">Pending Prescription</h2>
              <div className="space-y-4">
                {/* Prescription Card 1 */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <p className="text-sm font-medium">Patient Name</p>
                      <p className="text-sm text-gray-600">Kavindi Premathilaka</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-sm font-medium">Prescription Code</p>
                      <p className="text-sm text-gray-600">RX-12345</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-sm font-medium">Medication Details</p>
                      <p className="text-sm text-gray-600">Paracetamol 500mg, 2/day</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-sm font-medium">Status</p>
                      <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">Pending</span>
                    </div>
                  </div>
                </div>

                {/* Prescription Card 2 */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <p className="text-sm font-medium">Patient Name</p>
                      <p className="text-sm text-gray-600">Dineth Abeykoon</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-sm font-medium">Prescription Code</p>
                      <p className="text-sm text-gray-600">RX-67890</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-sm font-medium">Medication Details</p>
                      <p className="text-sm text-gray-600">Amoxicillin 250mg, 3/day</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-sm font-medium">Status</p>
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Issued</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}