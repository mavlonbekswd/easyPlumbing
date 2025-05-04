import { useState } from 'react';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaUser, FaTools, FaCheck } from 'react-icons/fa';

const services = [
  { id: 1, name: 'Emergency Plumbing', duration: 60, price: '$150', icon: <FaTools /> },
  { id: 2, name: 'Water Heater Installation', duration: 120, price: '$300', icon: <FaTools /> },
  { id: 3, name: 'Drain Cleaning', duration: 45, price: '$100', icon: <FaTools /> },
  { id: 4, name: 'Leak Repair', duration: 90, price: '$200', icon: <FaTools /> },
];

const timeSlots = [
  '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
  '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM',
  '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM',
];

const steps = [
  'Service',
  'Date',
  'Time',
  'Details',
  'Confirm',
];

export default function SmartScheduler() {
  const [step, setStep] = useState(0);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });
  const [errors, setErrors] = useState({});
  const [isConfirmed, setIsConfirmed] = useState(false);

  // Validation helpers
  const validateDetails = () => {
    const errs = {};
    if (!customerInfo.name) errs.name = 'Name is required';
    if (!customerInfo.email) errs.email = 'Email is required';
    if (!customerInfo.phone) errs.phone = 'Phone is required';
    if (!customerInfo.address) errs.address = 'Address is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  // Navigation
  const goNext = () => {
    if (step === 3 && !validateDetails()) return;
    setErrors({});
    if (step === 3) {
      setIsConfirmed(true);
      setStep(4);
    } else {
      setStep(step + 1);
    }
  };
  const goBack = () => setStep(Math.max(0, step - 1));

  // Step content
  return (
<div className="max-w-2xl mx-auto p-4 sm:p-8 rounded-3xl shadow-xl bg-white/90">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex  items-center justify-between">
          {steps.map((label, idx) => (
        <div key={label} className="flex justify-center items-center flex-1">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                  idx < step ? 'bg-accent text-white' : idx === step ? 'bg-accent/80 text-white' : 'bg-gray-200 text-gray-600'
                }`}
              >
                {idx < step ? <FaCheck /> : idx + 1}
              </div>
              {idx < steps.length - 1 && (
                <div className={`h-1 flex-1 mx-1 ${idx < step ? 'bg-accent' : 'bg-gray-200'}`} />
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-2 text-xs sm:text-sm text-gray-600">
          {steps.map((label, idx) => (
            <span key={label} className={idx === step ? 'font-bold text-accent' : ''}>{label}</span>
          ))}
        </div>
      </div>

      {/* Step 0: Service Selection */}
      {step === 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => { setSelectedService(service); setStep(1); }}
              className={`bg-white rounded-xl shadow p-6 hover:shadow-lg transition-shadow text-left border-2 ${selectedService?.id === service.id ? 'border-accent' : 'border-transparent'}`}
            >
              <div className="flex-1 items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  {service.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{service.name}</h3>
                  <p className="text-gray-600">{service.price}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <FaClock />
                <span>{service.duration} minutes</span>
              </div>
            </button>
          ))}
        </div>
      )}

      {/* Step 1: Date Selection */}
      {step === 1 && (
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold mb-6">Select a Date</h2>
          <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
            {Array.from({ length: 14 }, (_, i) => {
              const date = new Date();
              date.setDate(date.getDate() + i);
              return (
                <button
                  key={i}
                  onClick={() => { setSelectedDate(date); setStep(2); }}
                  className={`p-4 rounded-lg text-center w-full ${
                    selectedDate?.toDateString() === date.toDateString()
                      ? 'bg-accent text-white'
                      : 'bg-gray-50 hover:bg-gray-100'
                  }`}
                >
                  <div className="text-xs font-medium">
                    {date.toLocaleDateString('en-US', { weekday: 'short' })}
                  </div>
                  <div className="text-lg font-bold">
                    {date.getDate()}
                  </div>
                </button>
              );
            })}
          </div>
          <div className="flex justify-between mt-6">
            <button onClick={goBack} className="text-accent font-semibold">Back</button>
            <button onClick={() => selectedDate && setStep(2)} className="bg-accent text-white px-4 py-2 rounded-lg hover:bg-dark transition-colors" disabled={!selectedDate}>Next</button>
          </div>
        </div>
      )}

      {/* Step 2: Time Selection */}
      {step === 2 && (
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold mb-6">Select a Time</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {timeSlots.map((time) => (
              <button
                key={time}
                onClick={() => { setSelectedTime(time); setStep(3); }}
                className={`p-4 rounded-lg text-center w-full ${
                  selectedTime === time
                    ? 'bg-accent text-white'
                    : 'bg-gray-50 hover:bg-gray-100'
                }`}
              >
                {time}
              </button>
            ))}
          </div>
          <div className="flex justify-between mt-6">
            <button onClick={goBack} className="text-accent font-semibold">Back</button>
            <button onClick={() => selectedTime && setStep(3)} className="bg-accent text-white px-4 py-2 rounded-lg hover:bg-dark transition-colors" disabled={!selectedTime}>Next</button>
          </div>
        </div>
      )}

      {/* Step 3: Customer Information */}
      {step === 3 && (
        <div className="bg-white rounded-xl p-6 max-w-2xl mx-auto w-full">
          <h2 className="text-xl font-semibold mb-6">Your Information</h2>
          <form onSubmit={e => { e.preventDefault(); goNext(); }} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                value={customerInfo.name}
                onChange={e => setCustomerInfo({ ...customerInfo, name: e.target.value })}
                required
                autoFocus
                className={`w-full p-3 rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-accent`}
              />
              {errors.name && <div className="text-red-500 text-xs mt-1">{errors.name}</div>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                value={customerInfo.email}
                onChange={e => setCustomerInfo({ ...customerInfo, email: e.target.value })}
                required
                className={`w-full p-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-accent`}
              />
              {errors.email && <div className="text-red-500 text-xs mt-1">{errors.email}</div>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={customerInfo.phone}
                onChange={e => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
                required
                className={`w-full p-3 rounded-lg border ${errors.phone ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-accent`}
              />
              {errors.phone && <div className="text-red-500 text-xs mt-1">{errors.phone}</div>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Service Address</label>
              <input
                type="text"
                name="address"
                value={customerInfo.address}
                onChange={e => setCustomerInfo({ ...customerInfo, address: e.target.value })}
                required
                className={`w-full p-3 rounded-lg border ${errors.address ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-accent`}
              />
              {errors.address && <div className="text-red-500 text-xs mt-1">{errors.address}</div>}
            </div>
            <div className="flex justify-between mt-6">
              <button type="button" onClick={goBack} className="text-accent font-semibold">Back</button>
              <button type="submit" className="bg-accent text-white px-4 py-2 rounded-lg hover:bg-dark transition-colors">Finish</button>
            </div>
          </form>
        </div>
      )}

      {/* Step 4: Confirmation */}
      {step === 4 && isConfirmed && (
        <div className="bg-white rounded-xl shadow p-6 text-center animate-fade-in">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <FaCheck className="text-green-600 text-2xl" />
          </div>
          <h2 className="text-2xl font-semibold mb-4">Booking Confirmed!</h2>
          <p className="text-gray-600 mb-6">
            Your appointment has been scheduled successfully. We've sent a confirmation email with all the details.
          </p>
          <div className="bg-gray-50 rounded-lg p-4 text-left mb-6">
            <h3 className="font-semibold mb-2">Appointment Details</h3>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <FaTools className="text-accent" />
                {selectedService?.name}
              </p>
              <p className="flex items-center gap-2">
                <FaCalendarAlt className="text-accent" />
                {selectedDate?.toLocaleDateString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
              <p className="flex items-center gap-2">
                <FaClock className="text-accent" />
                {selectedTime}
              </p>
              <p className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-accent" />
                {customerInfo.address}
              </p>
            </div>
          </div>
          <button
            onClick={() => { setStep(0); setIsConfirmed(false); setSelectedService(null); setSelectedDate(null); setSelectedTime(null); setCustomerInfo({ name: '', email: '', phone: '', address: '' }); }}
            className="bg-accent text-white px-6 py-3 rounded-lg hover:bg-dark transition-colors"
          >
            Schedule Another Service
          </button>
        </div>
      )}
    </div>
  );
} 