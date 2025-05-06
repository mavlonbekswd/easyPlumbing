import { useState } from 'react';
import { FaUser, FaHistory, FaCreditCard, FaCalendarAlt, FaCog, FaSignOutAlt, FaBell, FaFileInvoice } from 'react-icons/fa';

const CustomerPortal = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [notifications, ] = useState([
    { id: 1, message: 'Your appointment is confirmed for tomorrow', time: '2 hours ago', read: false },
    { id: 2, message: 'Payment received for service #1234', time: '1 day ago', read: true },
    { id: 3, message: 'New service available in your area', time: '3 days ago', read: false },
  ]);

  const upcomingAppointments = [
    { id: 1, service: 'Water Heater Installation', date: '2024-03-15', time: '10:00 AM', status: 'Confirmed' },
    { id: 2, service: 'Annual Maintenance Check', date: '2024-04-01', time: '2:00 PM', status: 'Pending' },
  ];

  const recentServices = [
    { id: 1, service: 'Leak Repair', date: '2024-02-20', amount: '$150', status: 'Completed' },
    { id: 2, service: 'Drain Cleaning', date: '2024-02-15', amount: '$200', status: 'Completed' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex h-screen">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-lg">
          <div className="p-6">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                <FaUser className="text-white text-xl" />
              </div>
              <div>
                <h3 className="font-bold text-secondary">John Doe</h3>
                <p className="text-sm text-gray-500">Premium Member</p>
              </div>
            </div>
            <nav className="space-y-2">
              <button
                onClick={() => setActiveTab('dashboard')}
                className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors ${
                  activeTab === 'dashboard' ? 'bg-accent text-white' : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <FaUser className="text-xl" />
                Dashboard
              </button>
              <button
                onClick={() => setActiveTab('appointments')}
                className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors ${
                  activeTab === 'appointments' ? 'bg-accent text-white' : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <FaCalendarAlt className="text-xl" />
                Appointments
              </button>
              <button
                onClick={() => setActiveTab('history')}
                className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors ${
                  activeTab === 'history' ? 'bg-accent text-white' : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <FaHistory className="text-xl" />
                Service History
              </button>
              <button
                onClick={() => setActiveTab('payments')}
                className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors ${
                  activeTab === 'payments' ? 'bg-accent text-white' : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <FaCreditCard className="text-xl" />
                Payments
              </button>
              <button
                onClick={() => setActiveTab('settings')}
                className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors ${
                  activeTab === 'settings' ? 'bg-accent text-white' : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <FaCog className="text-xl" />
                Settings
              </button>
            </nav>
          </div>
          <div className="p-6 border-t">
            <button className="w-full flex items-center gap-3 p-3 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
              <FaSignOutAlt className="text-xl" />
              Sign Out
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-auto">
          <div className="p-8">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-2xl font-bold text-secondary">
                {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
              </h1>
              <div className="relative">
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <FaBell className="text-xl text-gray-600" />
                  {notifications.some(n => !n.read) && (
                    <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full" />
                  )}
                </button>
              </div>
            </div>

            {/* Dashboard Content */}
            {activeTab === 'dashboard' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Upcoming Appointments */}
                <div className="bg-white rounded-xl shadow p-6">
                  <h2 className="text-lg font-semibold mb-4">Upcoming Appointments</h2>
                  <div className="space-y-4">
                    {upcomingAppointments.map(appointment => (
                      <div key={appointment.id} className="border rounded-lg p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-medium">{appointment.service}</h3>
                            <p className="text-sm text-gray-500">
                              {appointment.date} at {appointment.time}
                            </p>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-sm ${
                            appointment.status === 'Confirmed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {appointment.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent Services */}
                <div className="bg-white rounded-xl shadow p-6">
                  <h2 className="text-lg font-semibold mb-4">Recent Services</h2>
                  <div className="space-y-4">
                    {recentServices.map(service => (
                      <div key={service.id} className="border rounded-lg p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-medium">{service.service}</h3>
                            <p className="text-sm text-gray-500">{service.date}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium">{service.amount}</p>
                            <span className="text-sm text-green-600">{service.status}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Appointments Content */}
            {activeTab === 'appointments' && (
              <div className="bg-white rounded-xl shadow p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-lg font-semibold">Schedule New Appointment</h2>
                  <button className="bg-accent text-white px-4 py-2 rounded-lg hover:bg-dark transition-colors">
                    Book Now
                  </button>
                </div>
                {/* Calendar and booking form will go here */}
              </div>
            )}

            {/* Service History Content */}
            {activeTab === 'history' && (
              <div className="bg-white rounded-xl shadow p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-lg font-semibold">Service History</h2>
                  <button className="flex items-center gap-2 text-accent hover:text-dark">
                    <FaFileInvoice className="text-xl" />
                    Download History
                  </button>
                </div>
                {/* Service history table will go here */}
              </div>
            )}

            {/* Payments Content */}
            {activeTab === 'payments' && (
              <div className="bg-white rounded-xl shadow p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-lg font-semibold">Payment Methods</h2>
                  <button className="bg-accent text-white px-4 py-2 rounded-lg hover:bg-dark transition-colors">
                    Add Payment Method
                  </button>
                </div>
                {/* Payment methods and history will go here */}
              </div>
            )}

            {/* Settings Content */}
            {activeTab === 'settings' && (
              <div className="bg-white rounded-xl shadow p-6">
                <h2 className="text-lg font-semibold mb-6">Account Settings</h2>
                {/* Settings form will go here */}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 

export default CustomerPortal;