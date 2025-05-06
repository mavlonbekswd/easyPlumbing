import { useState } from 'react';
import { FaWrench, FaShower, FaToilet, FaWater, FaFireExtinguisher, FaBolt, FaTimes, FaCheckCircle, FaStar } from 'react-icons/fa';

const services = [
  {
    icon: <FaWrench />, 
    title: 'Emergency Repairs', 
    desc: '24/7 urgent plumbing fixes.',
    details: 'Our emergency repair team is available around the clock to handle burst pipes, leaks, and any urgent plumbing issues. We respond quickly and efficiently to minimize damage and restore your peace of mind.',
    features: ['24/7 Availability', 'Fast Response', 'Certified Technicians'],
    badge: '24/7'
  },
  {
    icon: <FaShower />, 
    title: 'Bathroom Plumbing', 
    desc: 'Showers, bathtubs, and sinks.',
    details: 'We install, repair, and maintain all bathroom plumbing fixtures, including showers, bathtubs, sinks, and faucets. Enjoy a worry-free bathroom experience with our expert service.',
    features: ['Install & Repair', 'Modern Fixtures', 'Leak-Free Guarantee'],
    badge: 'Popular'
  },
  {
    icon: <FaToilet />, 
    title: 'Toilet Services', 
    desc: 'Installations and repairs.',
    details: 'From new toilet installations to fixing clogs and leaks, our team ensures your toilet is always in top working condition. We use quality parts and guarantee our work.',
    features: ['Clog Removal', 'New Installations', 'Water Saving'],
  },
  {
    icon: <FaWater />, 
    title: 'Leak Detection', 
    desc: 'Find and fix leaks fast.',
    details: 'Our advanced leak detection technology allows us to quickly locate and repair hidden leaks, saving you money and preventing water damage.',
    features: ['Non-Invasive', 'Accurate', 'Prevent Damage'],
  },
  {
    icon: <FaFireExtinguisher />, 
    title: 'Water Heaters', 
    desc: 'Install and maintain heaters.',
    details: 'We install, repair, and maintain all types of water heaters. Enjoy hot water on demand with our reliable and energy-efficient solutions.',
    features: ['Tank & Tankless', 'Energy Efficient', 'Long Warranty'],
  },
  {
    icon: <FaBolt />, 
    title: 'Pipe Replacement', 
    desc: 'Modern, durable piping.',
    details: 'Upgrade your plumbing system with our pipe replacement service. We use modern, durable materials to ensure long-lasting performance and safety.',
    features: ['Copper & PEX', 'Minimal Disruption', 'Lasts Decades'],
  },
];

export default function Services() {
  const [selected, setSelected] = useState(null);

  return (
<section className="py-20 bg-[#606C38]" id="services" data-aos="fade-up">
      <div className="container mx-auto relative z-10">
        <h2 className="text-3xl font-bold text-center text-light mb-12">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <button
              key={i}
              className={`relative bg-light p-4 sm:p-6 md:p-6 rounded-2xl shadow-lg flex flex-col items-center w-full sm:max-w-full sm:mx-0 max-w-xs mx-auto focus:outline-none hover:shadow-2xl transition-all group border-2 border-transparent hover:border-accent hover:scale-105 duration-200`}
              data-aos="zoom-in"
              data-aos-delay={i*100}
              onClick={() => setSelected(i)}
              tabIndex={0}
              aria-label={`More about ${s.title}`}
            >
              
              {/* Badge */}
              {s.badge && (
                <span className="absolute top-4 right-4 bg-accent text-light text-xs font-bold px-3 py-1 rounded-full shadow animate-fade-in flex items-center gap-1">
                  {s.badge === 'Popular' && <FaStar className="text-yellow-300" />} {s.badge}
                </span>
              )}
              {/* Icon with animation */}
              <div className="text-4xl text-accent mb-4 group-hover:animate-bounce transition-transform duration-200">
                {s.icon}
              </div>
              <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">{s.title}</h3>
              <p className="text-gray-600 text-center">{s.desc}</p>
              
              {/* Decorative background icon */}
              <div className="absolute left-2 bottom-2 opacity-10 text-6xl text-accent pointer-events-none select-none hidden md:block">
                {s.icon}
              </div>
            </button>
          ))}
        </div>
        {/* Modal */}
        {selected !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4" onClick={() => setSelected(null)}>
            <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-0 overflow-hidden relative animate-fade-in" onClick={e => e.stopPropagation()}>
              {/* Modal Header */}
              <div className="bg-gradient-to-r from-primary to-accent p-6 flex flex-col items-center">
                <div className="text-6xl text-light mb-2 animate-float">{services[selected].icon}</div>
                <h3 className="text-2xl font-bold text-light mb-1">{services[selected].title}</h3>
                {services[selected].badge && (
                  <span className="bg-light text-accent text-xs font-bold px-3 py-1 rounded-full shadow flex items-center gap-1">
                    {services[selected].badge === 'Popular' && <FaStar className="text-yellow-400" />} {services[selected].badge}
                  </span>
                )}
                <button className="absolute top-4 right-4 text-2xl text-light hover:text-dark focus:outline-none" onClick={() => setSelected(null)} aria-label="Close modal">
                  <FaTimes />
                </button>
              </div>
              <div className="p-6">
                <p className="text-gray-700 text-center mb-4">{services[selected].details}</p>
                <ul className="mb-6 space-y-2">
                  {services[selected].features && services[selected].features.map((f, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-primary">
                      <FaCheckCircle className="text-accent" /> <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col items-center justify-center bg-accent/10 border-2 border-accent rounded-2xl p-6 sm:p-8 mt-8 shadow animate-fade-in w-full text-center">
                  <a href="#contact" className="block w-full bg-accent hover:bg-dark text-light font-bold py-3 px-8 rounded-lg text-center text-lg transition-colors shadow-lg animate-pulse">
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
} 