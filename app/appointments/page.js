'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const AppointmentsPage = () => {
  const router = useRouter();
  // TODO: Implement database fetching
  // Example of how the database fetch would work:
  /*
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await fetch('/api/appointments');
        if (!response.ok) {
          throw new Error('Failed to fetch appointments');
        }
        const data = await response.json();
        setAppointments(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  if (loading) return <div>Loading appointments...</div>;
  if (error) return <div>Error: {error}</div>;
  */

  // Temporary static data to mimic database records
  const appointments = [
    {
      id: 1,
      date: '15-April-25',
      time: '10:00 AM',
      doctor: {
        name: 'Dr. Sarah George',
        specialization: 'General Medicine'
      },
      department: 'Internal Medicine',
      status: 'Scheduled',
    },
    {
      id: 2,
      date: '25-April-25',
      time: '02:00 PM',
      doctor: {
        name: 'Dr. Sarah George',
        specialization: 'General Medicine'
      },
      department: 'Internal Medicine',
      status: 'Scheduled',
    },
    {
      id: 3,
      date: '8-May-25',
      time: '09:00 AM',
      doctor: {
        name: 'Dr. Sarah George',
        specialization: 'General Medicine'
      },
      department: 'Internal Medicine',
      status: 'Scheduled',
    },
  ];

  // TODO: Implement database operations for these functions
  const handleReschedule = (appointmentId) => {
    /*
    const rescheduleAppointment = async (id) => {
      try {
        const response = await fetch(`/api/appointments/${id}/reschedule`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ newDate, newTime })
        });
        if (!response.ok) throw new Error('Failed to reschedule');
        // Refresh appointments list
      } catch (error) {
        console.error('Error rescheduling:', error);
      }
    };
    */
    console.log('Rescheduling appointment:', appointmentId);
  };

  const handleCancel = (appointmentId) => {
    /*
    const cancelAppointment = async (id) => {
      try {
        const response = await fetch(`/api/appointments/${id}`, {
          method: 'DELETE'
        });
        if (!response.ok) throw new Error('Failed to cancel');
        // Refresh appointments list
      } catch (error) {
        console.error('Error cancelling:', error);
      }
    };
    */
    console.log('Cancelling appointment:', appointmentId);
  };

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

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto bg-gray-50">
        <div className="container mx-auto p-8">
          <h1 className="text-3xl font-bold mb-8 text-gray-800">My Appointments</h1>
          
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="grid grid-cols-5 bg-gray-50 p-4 border-b border-gray-200">
              <div className="font-semibold text-gray-600">Date/Time</div>
              <div className="font-semibold text-gray-600">Doctor</div>
              <div className="font-semibold text-gray-600">Department</div>
              <div className="font-semibold text-gray-600">Status</div>
              <div className="font-semibold text-gray-600">Actions</div>
            </div>

            {appointments.map((appointment) => (
              <div key={appointment.id} className="grid grid-cols-5 p-4 border-b border-gray-200 hover:bg-gray-50">
                <div>
                  <div className="font-medium text-gray-900">{appointment.date}</div>
                  <div className="text-sm text-gray-500">{appointment.time}</div>
                </div>
                <div>
                  <div className="font-medium text-gray-900">{appointment.doctor.name}</div>
                  <div className="text-sm text-gray-500">{appointment.doctor.specialization}</div>
                </div>
                <div className="text-gray-900 self-center">{appointment.department}</div>
                <div className="self-center">
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
                    {appointment.status}
                  </span>
                </div>
                <div className="space-x-2 self-center">
                  <button 
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-sm"
                    onClick={() => handleReschedule(appointment.id)}
                  >
                    Reschedule
                  </button>
                  <button 
                    className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors text-sm"
                    onClick={() => handleCancel(appointment.id)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentsPage;