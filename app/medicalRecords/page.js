'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
// import { supabase } from '@/app/supabaseClient';

export default function MedicalRecords() {
  const [records, setRecords] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Simulating API call with setTimeout
    setTimeout(() => {
      // Sample data for display
      const sampleRecords = [
        {
          date: '10-Mar-25',
          visit_type: 'Check-up',
          diagnosis: 'Hypertension',
          doctor: 'Dr. Sarah George',
          notes: 'Routine BP check'
        },
        {
          date: '05-Mar-25',
          visit_type: 'Follow-up',
          diagnosis: 'Diabetes',
          doctor: 'Dr. Sarah George',
          notes: 'Adjusted medication'
        },
        {
          date: '28-Feb-25',
          visit_type: 'Emergency',
          diagnosis: 'Acute Bronchitis',
          doctor: 'Dr. John Smith',
          notes: 'Prescribed antibiotics'
        }
      ];
      setRecords(sampleRecords);
      setIsLoading(false);
    }, 1000); // Simulate 1 second loading time
  }, []);

  // Commented out original fetchMedicalRecords function
  /*
  const fetchMedicalRecords = async () => {
    try {
      const { data, error } = await supabase
        .from('medical_records')
        .select('*')
        .order('date', { ascending: false });

      if (error) throw error;

      setRecords(data || []);
    } catch (error) {
      console.error('Error fetching medical records:', error);
    } finally {
      setIsLoading(false);
    }
  };
  */

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
              <Link href="/appointments" className="flex items-center gap-3 px-4 py-3 hover:bg-[#0d4690] text-white">
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
        <div className="p-6 max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-[#1055AE]">Medical Records</h1>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Recent Visits</h2>
              <span className="text-sm text-gray-500">Last 30 days</span>
            </div>

            {isLoading ? (
              <div className="text-center py-4">Loading records...</div>
            ) : (
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
                    {records.length > 0 ? (
                      records.map((record, index) => (
                        <tr key={index} className="text-sm text-gray-900 hover:bg-gray-50">
                          <td className="py-4 px-4">{record.date}</td>
                          <td className="py-4 px-4">{record.visit_type}</td>
                          <td className="py-4 px-4">
                            <span className={`px-2 py-1 ${
                              record.diagnosis === 'Hypertension' 
                                ? 'bg-yellow-100 text-yellow-800' 
                                : 'bg-blue-100 text-blue-800'
                            } rounded-full text-xs`}>
                              {record.diagnosis}
                            </span>
                          </td>
                          <td className="py-4 px-4">{record.doctor}</td>
                          <td className="py-4 px-4">{record.notes}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="5" className="text-center py-4 text-gray-500">
                          No records found
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}