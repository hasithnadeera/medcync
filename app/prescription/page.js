'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function PrescriptionPage() {
  const [oldPrescriptions, setOldPrescriptions] = useState([]);
  const [upcomingPrescriptions, setUpcomingPrescriptions] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // Changed to false since we're using sample data

  // Sample data structure (remove this when connecting to real database)
  const samplePrescriptions = {
    old: [
      {
        patientName: 'Dineth Abeykon',
        prescriptionCode: 'RX-67890',
        medicationDetails: 'Amoxicillin 250mg, 3/day',
        status: 'Completed',
        date: '2024-01-15'
      }
    ],
    upcoming: [
      {
        patientName: 'Kavindi Premathilaka',
        prescriptionCode: 'RX-12345',
        medicationDetails: 'Paracetamol 500mg, 2/day',
        status: 'Pending',
        date: '2024-02-25'
      }
    ]
  };

  // Temporarily comment out the API fetch until endpoints are ready
  /*useEffect(() => {
    const fetchPrescriptions = async () => {
      try {
        // Replace these with your actual API endpoints
        const oldResponse = await fetch('/api/prescriptions/old');
        const upcomingResponse = await fetch('/api/prescriptions/upcoming');
        
        const oldData = await oldResponse.json();
        const upcomingData = await upcomingResponse.json();
        
        setOldPrescriptions(oldData);
        setUpcomingPrescriptions(upcomingData);
      } catch (error) {
        console.error('Error fetching prescriptions:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPrescriptions();
  }, []);*/

  // Use sample data directly
  useEffect(() => {
    setOldPrescriptions(samplePrescriptions.old);
    setUpcomingPrescriptions(samplePrescriptions.upcoming);
  }, []);

  const PrescriptionList = ({ title, prescriptions, type }) => (
    <div className="mb-8">
      <h2 className="text-xl font-bold text-gray-900 mb-4">{title}</h2>
      <div className="prescription-list">
        {prescriptions.map((prescription, index) => (
          <div key={index} className="prescription-card">
            <div className="prescription-header">
              <span className="patient-name">
                Patient Name - {prescription.patientName}
              </span>
              <span className={`status-badge ${prescription.status.toLowerCase()}`}>
                {prescription.status}
              </span>
            </div>
            <div className="prescription-details">
              <p>Prescription Code - {prescription.prescriptionCode}</p>
              <p>Medication Details - {prescription.medicationDetails}</p>
              <p>Date - {prescription.date}</p>
            </div>
          </div>
        ))}
        {prescriptions.length === 0 && (
          <p className="text-gray-500">No {type} prescriptions found.</p>
        )}
      </div>
    </div>
  );

  return (
    <div className="flex min-h-screen">
      {/* Sidebar Navigation */}
      <div className="w-[250px] bg-[#1055AE] text-white flex flex-col h-full fixed">
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
              <Link href="/pharmacistDashboard" className="flex items-center gap-3 px-4 py-3 hover:bg-[#0d4690] text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link href="/prescription" className="flex items-center gap-3 px-4 py-3 bg-[#0d4690] text-white">
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

      {/* Main Content */}
      <div className="ml-[250px] flex-1 bg-gray-50 min-h-screen p-6">
        {isLoading ? (
          <div className="text-center py-8">
            <p>Loading prescriptions...</p>
          </div>
        ) : (
          <>
            <PrescriptionList 
              title="Upcoming Prescriptions" 
              prescriptions={upcomingPrescriptions.length ? upcomingPrescriptions : samplePrescriptions.upcoming}
              type="upcoming"
            />
            <PrescriptionList 
              title="Old Prescriptions" 
              prescriptions={oldPrescriptions.length ? oldPrescriptions : samplePrescriptions.old}
              type="old"
            />
          </>
        )}
      </div>

      <style jsx>{`
        .prescription-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .prescription-card {
          background: white;
          border-radius: 8px;
          padding: 20px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          transition: box-shadow 0.3s ease;
        }

        .prescription-card:hover {
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
        }

        .prescription-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }

        .patient-name {
          font-weight: 600;
        }

        .status-badge {
          padding: 4px 12px;
          border-radius: 12px;
          font-size: 14px;
          font-weight: 500;
        }

        .status-badge.pending {
          background-color: #fff3e0;
          color: #f57c00;
        }

        .status-badge.completed {
          background-color: #e8f5e9;
          color: #2e7d32;
        }

        .prescription-details p {
          margin: 8px 0;
          color: #4a5568;
        }
      `}</style>
    </div>
  );
}