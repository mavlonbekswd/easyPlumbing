import { useState } from 'react';
import Contact from './Contact';
import SmartScheduler from './SmartScheduler';
import { FaEnvelope, FaCalendarCheck } from 'react-icons/fa';

export default function ContactAndBook() {
  const [tab, setTab] = useState('contact');

  return (
<section className="py-16 bg-light min-h-[80vh] w-full" id="contact-book">
      <div className="w-full px-0">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10 text-secondary drop-shadow-sm tracking-tight w-full">
          Get in Touch or Book a Service
        </h2>
        <div className="mb-10 flex justify-center w-full">
      <div className="inline-flex rounded-none md:rounded-2xl bg-white/90 overflow-hidden w-full md:w-auto">
            <button
              className={`flex items-center justify-center gap-2 px-6 py-4 font-semibold text-lg transition-colors w-1/2 md:w-auto ${tab === 'contact' ? 'bg-accent text-white' : 'text-gray-700 hover:bg-accent/10'}`}
              onClick={() => setTab('contact')}
            >
              <FaEnvelope /> Contact Us
            </button>
            <button
              className={`flex items-center justify-center gap-2 px-6 py-4 font-semibold text-lg transition-colors w-1/2 md:w-auto ${tab === 'book' ? 'bg-accent text-white' : 'text-gray-700 hover:bg-accent/10'}`}
              onClick={() => setTab('book')}
            >
              <FaCalendarCheck /> Book a Service
            </button>
          </div>
        </div>
        <div className="bg-light rounded-none md:rounded-3xl p-4 md:p-14 flex flex-col md:flex-row gap-8 md:gap-16 items-stretch animate-fade-in w-full">
          {tab === 'contact' && (
            <div className="w-full flex flex-col justify-center">
              <Contact />
            </div>
          )}
          {tab === 'book' && (
            <div className="w-full flex flex-col justify-center">
              <SmartScheduler />
            </div>
          )}
        </div>
      </div>
    </section>
  );
} 