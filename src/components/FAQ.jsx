import { useState, useEffect } from 'react';
import { FaChevronDown, FaQuestionCircle, FaPhoneAlt, FaTools, FaWater, FaUserCheck, FaBolt, FaToiletPaper, FaShower, FaMapMarkerAlt, FaSearch, FaVideo, FaComment, FaTimes } from 'react-icons/fa';

const faqs = [
  {
    q: 'What are your emergency service hours?',
    a: 'We provide 24/7 emergency plumbing services. Our team is always ready to respond to urgent plumbing issues.',
    video: 'https://example.com/emergency-hours.mp4',
    related: ['How quickly can you respond to emergencies?', 'What constitutes a plumbing emergency?']
  },
  {
    q: 'How do I schedule a service appointment?',
    a: 'You can schedule appointments through our online booking system, by phone, or through our customer portal.',
    video: 'https://example.com/scheduling.mp4',
    related: ['What information do I need to book a service?', 'Can I reschedule my appointment?']
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept all major credit cards, bank transfers, and digital payment methods through our secure payment portal.',
    video: 'https://example.com/payments.mp4',
    related: ['Do you offer payment plans?', 'Is there a deposit required?']
  },
  { q: 'Do you offer emergency services?', a: 'Yes, we are available 24/7 for all plumbing emergencies.', icon: <FaTools /> },
  { q: 'Are your plumbers certified?', a: 'All our plumbers are fully certified and background checked.', icon: <FaUserCheck /> },
  { q: 'What areas do you serve?', a: 'We serve Slough, Reading, Guildford, Stevenage, Peterborough, Ipswich, and nearby areas.', icon: <FaMapMarkerAlt /> },
  { q: 'How do I book a service?', a: 'You can book online, call us, or use the contact form below.', icon: <FaPhoneAlt /> },
  { q: 'Can you fix leaking pipes?', a: 'Absolutely! We specialize in leak detection and pipe repairs.', icon: <FaWater /> },
  { q: 'Do you install new bathrooms?', a: 'Yes, we offer full bathroom plumbing and installation services.', icon: <FaShower /> },
  { q: 'What if my toilet is blocked?', a: 'We provide fast and effective toilet unblocking and repairs.', icon: <FaToiletPaper /> },
  { q: 'Do you replace old pipes?', a: 'Yes, we offer modern, durable pipe replacement for your home or business.', icon: <FaBolt /> },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [showVideo, setShowVideo] = useState(null);
  const [chatOpen, setChatOpen] = useState(false);

  const filteredFaqs = faqs.filter(faq => 
    faq.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.a.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="relative py-20 bg-[#606C38]" id="faq" data-aos="fade-up">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-2xl md:text-4xl font-extrabold mb-8 flex items-center gap-2 justify-center" style={{color: '#FEFAE0'}}>
          <FaQuestionCircle className="text-accent" /> Frequently Asked Questions
        </h2>

        {/* Search Bar */}
        <div className="relative mb-8 max-w-2xl mx-auto">
          <input
            type="text"
            placeholder="Search FAQs..."
            className="w-full p-4 pl-12 rounded-xl bg-white/90 text-secondary focus:outline-none focus:ring-2 focus:ring-accent"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-accent text-xl" />
        </div>

        {/* FAQ Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-12">
          {filteredFaqs.map((f, i) => (
            <div key={i} className="bg-light rounded-2xl shadow flex flex-col max-w-xs mx-auto w-full">
              <button
                className="w-full flex justify-between items-center text-left font-semibold text-primary text-base sm:text-lg px-4 sm:px-6 py-4 sm:py-5 focus:outline-none rounded-2xl transition-colors hover:bg-accent/10"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                aria-controls={`faq-panel-${i}`}
              >
                <span className="flex items-center gap-3 text-lg sm:text-xl">
                  <span className="text-xl sm:text-2xl text-accent">{f.icon}</span> {f.q}
                </span>
                <FaChevronDown className={`ml-2 text-accent text-xl sm:text-2xl transition-transform duration-200 ${open === i ? 'rotate-180' : ''}`} />
              </button>
              <div
                id={`faq-panel-${i}`}
                className={`overflow-hidden transition-all duration-300 px-4 sm:px-6 ${open === i ? 'max-h-96 py-4' : 'max-h-0 py-0'}`}
                aria-hidden={open !== i}
              >
                <div className="text-gray-700 text-base mb-4">{f.a}</div>
                
                {/* Video Button */}
                {f.video && (
                  <button
                    onClick={() => setShowVideo(f.video)}
                    className="flex items-center gap-2 text-accent hover:text-dark transition-colors mb-4"
                  >
                    <FaVideo /> Watch Video Answer
                  </button>
                )}

                {/* Related Questions */}
                <div className="border-t border-gray-200 pt-4">
                  <h4 className="text-sm font-semibold text-primary mb-2">Related Questions:</h4>
                  <ul className="space-y-2">
                    {(f.related || []).map((related, idx) => (
                      <li key={idx}>
                        <button
                          className="text-sm text-accent hover:text-dark transition-colors"
                          onClick={() => {
                            const relatedIndex = faqs.findIndex(faq => faq.q === related);
                            if (relatedIndex !== -1) setOpen(relatedIndex);
                          }}
                        >
                          {related}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Modal */}
        {showVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80" onClick={() => setShowVideo(null)}>
            <div className="bg-white rounded-3xl p-4 max-w-4xl w-full mx-4" onClick={e => e.stopPropagation()}>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-secondary">Video Answer</h3>
                <button onClick={() => setShowVideo(null)} className="text-2xl text-gray-500 hover:text-accent">
                  <FaTimes />
                </button>
              </div>
              <div className="aspect-video bg-black rounded-xl overflow-hidden">
                <video src={showVideo} controls className="w-full h-full" />
              </div>
            </div>
          </div>
        )}

        {/* Live Chat Button */}
       

        {/* Chat Window */}
        {chatOpen && (
          <div className="fixed bottom-6 left-6 w-80 bg-white rounded-xl shadow-xl z-50 overflow-hidden">
            <div className="bg-accent text-light p-4 flex justify-between items-center">
              <h3 className="font-bold">Live Chat Support</h3>
              <button onClick={() => setChatOpen(false)} className="text-light hover:text-dark">
                <FaTimes />
              </button>
            </div>
            <div className="p-4 h-96 overflow-y-auto">
              {/* Chat messages will go here */}
              <div className="text-center text-gray-500">
                Chat support coming soon!
              </div>
            </div>
            <div className="p-4 border-t">
              <input
                type="text"
                placeholder="Type your message..."
                className="w-full p-2 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
} 