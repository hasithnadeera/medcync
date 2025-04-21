'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function PatientDashboard() {
  const router = useRouter();
  const patientName = "Peter Parker";

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
              <Link href="/patientDashboard" className="flex items-center gap-3 px-4 py-3 hover:bg-[#0d4690] text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link href="/profile" className="flex items-center gap-3 px-4 py-3 hover:bg-[#0d4690] text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
                <span>Profile</span>
              </Link>
            </li>
            <li>
              <Link href="/medicalRecords" className="flex items-center gap-3 px-4 py-3 hover:bg-[#0d4690] text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
                <span>Medical Records</span>
              </Link>
            </li>
            <li>
              <Link href="/appoinments" className="flex items-center gap-3 px-4 py-3 hover:bg-[#0d4690] text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                <span>Appointments</span>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Settings and Logout */}
        <div className="mt-auto p-4 space-y-2">
          <Link href="/settings" className="flex items-center gap-3 px-4 py-3 hover:bg-[#0d4690] text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
            </svg>
            <span>Settings</span>
          </Link>
          <button onClick={() => router.push('/login')} className="w-full flex items-center gap-3 px-4 py-3 hover:bg-[#0d4690] text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd" />
            </svg>
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-semibold text-gray-900">
              Hello <span className="text-[#1055AE]">{patientName}</span>
            </h1>
            <div className="flex items-center gap-4">
              {/* Notification Icon */}
              <button className="text-gray-600 hover:text-gray-900">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </button>
              {/* Profile Icon */}
              <Link href="/profile" className="text-gray-600 hover:text-gray-900">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </Link>
              <Link href="#" className="bg-[#1055AE] text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-[#0d4690] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
                Book Appointment
              </Link>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-4 sm:p-6 lg:p-8 space-y-6">
          {/* Statistics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Upcoming Appointments Card */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-100 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#1055AE]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-blue-800">Upcoming Appointments</p>
                  <p className="text-2xl font-bold text-black">3</p>
                </div>
              </div>
            </div>

            {/* Total Appointments Card */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-100 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#1055AE]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-blue-800">Total Appointments</p>
                  <p className="text-2xl font-bold text-black">5</p>
                </div>
              </div>
            </div>

            {/* New Prescriptions Card */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-100 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#1055AE]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-blue-800">New Prescriptions</p>
                  <p className="text-2xl font-bold text-black">2</p>
                </div>
              </div>
            </div>
          </div>

          {/* Medical Records Summary */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-[#1055AE]">Medical Records Summary</h2>
              <Link href="/medicalRecords" className="text-[#1055AE] hover:text-[#0d4690] text-sm font-medium">
                View All Records
              </Link>
            </div>
            <div className="space-y-6">
              <div className="border-b pb-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold text-gray-800">Recent Visits</h3>
                  <span className="text-sm text-gray-500">Last 30 days</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                      <tr className="text-left text-sm font-medium text-gray-500">
                        <th className="py-3 px-4">Date</th>
                        <th className="py-3 px-4">Visit Type</th>
                        <th className="py-3 px-4">Diagnosis</th>
                        <th className="py-3 px-4">Doctor</th>
                        <th className="py-3 px-4">Notes</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      <tr className="text-sm text-gray-900 hover:bg-gray-50">
                        <td className="py-4 px-4">10-Mar-25</td>
                        <td className="py-4 px-4">Check-up</td>
                        <td className="py-4 px-4">
                          <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">Hypertension</span>
                        </td>
                        <td className="py-4 px-4">Dr. Sarah George</td>
                        <td className="py-4 px-4">Routine BP check</td>
                      </tr>
                      <tr className="text-sm text-gray-900 hover:bg-gray-50">
                        <td className="py-4 px-4">05-Mar-25</td>
                        <td className="py-4 px-4">Follow-up</td>
                        <td className="py-4 px-4">
                          <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">Diabetes</span>
                        </td>
                        <td className="py-4 px-4">Dr. Sarah George</td>
                        <td className="py-4 px-4">Adjusted medication</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold text-gray-800">Prescription History</h3>
                  <span className="text-sm text-gray-500">Active Prescriptions</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                      <tr className="text-left text-sm font-medium text-gray-500">
                        <th className="py-3 px-4">Date</th>
                        <th className="py-3 px-4">Prescription</th>
                        <th className="py-3 px-4">Dosage</th>
                        <th className="py-3 px-4">Doctor</th>
                        <th className="py-3 px-4">Status</th>
                        <th className="py-3 px-4">Notes</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      <tr className="text-sm text-gray-900 hover:bg-gray-50">
                        <td className="py-4 px-4">10-Mar-25</td>
                        <td className="py-4 px-4">Paracetamol</td>
                        <td className="py-4 px-4">500mg 2x/day</td>
                        <td className="py-4 px-4">Dr. Sarah George</td>
                        <td className="py-4 px-4">
                          <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Active</span>
                        </td>
                        <td className="py-4 px-4">Pain relief</td>
                      </tr>
                      <tr className="text-sm text-gray-900 hover:bg-gray-50">
                        <td className="py-4 px-4">05-Mar-25</td>
                        <td className="py-4 px-4">Metformin</td>
                        <td className="py-4 px-4">1000mg/day</td>
                        <td className="py-4 px-4">Dr. Sarah George</td>
                        <td className="py-4 px-4">
                          <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Active</span>
                        </td>
                        <td className="py-4 px-4">Diabetes control</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Upcoming Appointments */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-[#1055AE]">Upcoming Appointments</h2>
              <Link href="/appointments" className="text-[#1055AE] hover:text-[#0d4690] text-sm font-medium">
                View All Appointments
              </Link>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr className="text-left text-sm font-medium text-gray-500">
                    <th className="py-3 px-4">Date/Time</th>
                    <th className="py-3 px-4">Doctor</th>
                    <th className="py-3 px-4">Department</th>
                    <th className="py-3 px-4">Status</th>
                    <th className="py-3 px-4">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="text-sm text-gray-900 hover:bg-gray-50">
                    <td className="py-4 px-4">
                      <div className="font-medium">15-April-25</div>
                      <div className="text-gray-500">10:00 AM</div>
                    </td>
                    <td className="py-4 px-4">
                      <div>Dr. Sarah George</div>
                      <div className="text-gray-500 text-xs">General Medicine</div>
                    </td>
                    <td className="py-4 px-4">Internal Medicine</td>
                    <td className="py-4 px-4">
                      <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">Scheduled</span>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex gap-2">
                        <button className="text-[#1055AE] hover:text-[#0d4690] text-sm font-medium">Reschedule</button>
                        <button className="text-red-600 hover:text-red-800 text-sm font-medium">Cancel</button>
                      </div>
                    </td>
                  </tr>
                  <tr className="text-sm text-gray-900 hover:bg-gray-50">
                    <td className="py-4 px-4">
                      <div className="font-medium">25-April-25</div>
                      <div className="text-gray-500">02:00 PM</div>
                    </td>
                    <td className="py-4 px-4">
                      <div>Dr. Sarah George</div>
                      <div className="text-gray-500 text-xs">General Medicine</div>
                    </td>
                    <td className="py-4 px-4">Internal Medicine</td>
                    <td className="py-4 px-4">
                      <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">Scheduled</span>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex gap-2">
                        <button className="text-[#1055AE] hover:text-[#0d4690] text-sm font-medium">Reschedule</button>
                        <button className="text-red-600 hover:text-red-800 text-sm font-medium">Cancel</button>
                      </div>
                    </td>
                  </tr>
                  <tr className="text-sm text-gray-900 hover:bg-gray-50">
                    <td className="py-4 px-4">
                      <div className="font-medium">8-May-25</div>
                      <div className="text-gray-500">09:00 AM</div>
                    </td>
                    <td className="py-4 px-4">
                      <div>Dr. Sarah George</div>
                      <div className="text-gray-500 text-xs">General Medicine</div>
                    </td>
                    <td className="py-4 px-4">Internal Medicine</td>
                    <td className="py-4 px-4">
                      <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">Scheduled</span>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex gap-2">
                        <button className="text-[#1055AE] hover:text-[#0d4690] text-sm font-medium">Reschedule</button>
                        <button className="text-red-600 hover:text-red-800 text-sm font-medium">Cancel</button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}