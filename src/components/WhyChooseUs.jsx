import { useEffect, useRef } from 'react';
import { FaStar, FaUserShield, FaClock, FaThumbsUp } from 'react-icons/fa';

function useCountUp(end, duration = 1200) {
  const ref = useRef();
  useEffect(() => {
    let start = 0;
    const step = Math.ceil(end / (duration / 16));
    let current = start;
    const el = ref.current;
    if (!el) return;
    el.textContent = start;
    const interval = setInterval(() => {
      current += step;
      if (current >= end) {
        el.textContent = end;
        clearInterval(interval);
      } else {
        el.textContent = current;
      }
    }, 16);
    return () => clearInterval(interval);
  }, [end, duration]);
  return ref;
}

const WhyChooseUs = () => {
  const ratingRef = useCountUp(4.9, 1000);
  const certifiedRef = useCountUp(100, 1000);
  const serviceRef = useCountUp(24, 1000);

  return (
    <section className="relative py-20 bg-gradient-to-br from-accent/10 via-light to-primary/10 overflow-hidden" id="why-choose-us" data-aos="fade-up">
      {/* Floating badge */}
      
      <div className="container mx-auto text-center relative z-10">
        {/* Mobile: Badge above title, static */}
        <div className="block md:hidden mb-4">
          <span className="inline-flex items-center gap-2 bg-accent text-light px-4 py-2 rounded-full font-bold shadow-lg text-base animate-float">
            <FaThumbsUp className="text-xl" /> Most Trusted Choice
          </span>
        </div>
        {/* Desktop: Floating badge */}
        <div className="hidden md:block absolute left-1/2 -top-20 -translate-x-1/2 z-20">
          <span className="inline-flex items-center gap-2 bg-accent text-light px-6 py-3 rounded-full font-bold shadow-lg text-lg animate-float">
            <FaThumbsUp className="text-xl" /> Most Trusted Choice
          </span>
        </div>
        <h2 className="text-2xl md:text-4xl font-extrabold text-secondary mb-2 mt-8 md:mt-16">Why Choose Us?</h2>
        <p className="text-base md:text-lg text-gray-700 mb-8 md:mb-12">Experience the EasyPlumbing difference—trusted, certified, and always here for you.</p>
        <div className="grid md:grid-cols-3 gap-6 md:gap-10">
          <div className="flex flex-col items-center bg-white/60 backdrop-blur-md rounded-2xl shadow-xl p-4 md:p-10 hover:scale-105 transition-transform max-w-xs mx-auto w-full">
            <FaStar className="text-accent text-4xl md:text-5xl mb-2 animate-float" />
            <span ref={ratingRef} className="text-3xl md:text-4xl font-bold">4.9</span><span className="text-xl font-bold">/5</span>
            <p className="text-gray-600 font-semibold">Average Rating</p>
            <p className="text-gray-500 text-sm mt-2 text-center">
              Based on thousands of verified customer reviews across all major platforms.
            </p>
          </div>
          <div className="flex flex-col items-center bg-white/60 backdrop-blur-md rounded-2xl shadow-xl p-4 md:p-10 hover:scale-105 transition-transform max-w-xs mx-auto w-full">
            <FaUserShield className="text-accent text-4xl md:text-5xl mb-2 animate-float" style={{animationDelay: '0.2s'}} />
            <span ref={certifiedRef} className="text-3xl md:text-4xl font-bold">100</span><span className="text-xl font-bold">%</span>
            <p className="text-gray-600 font-semibold">Certified Plumbers</p>
            <p className="text-gray-500 text-sm mt-2 text-center">
              All our plumbers are fully licensed, background-checked, and undergo regular training.
            </p>
          </div>
          <div className="flex flex-col items-center bg-white/60 backdrop-blur-md rounded-2xl shadow-xl p-4 md:p-10 hover:scale-105 transition-transform max-w-xs mx-auto w-full">
            <FaClock className="text-accent text-4xl md:text-5xl mb-2 animate-float" style={{animationDelay: '0.4s'}} />
            <span ref={serviceRef} className="text-3xl md:text-4xl font-bold">24</span><span className="text-xl font-bold">/7</span>
            <p className="text-gray-600 font-semibold">Emergency Service</p>
            <p className="text-gray-500 text-sm mt-2 text-center">
              Fast response, 24/7 availability—call us anytime for urgent plumbing needs, day or night.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 
export default WhyChooseUs;