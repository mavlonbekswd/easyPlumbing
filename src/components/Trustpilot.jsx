import { useState } from 'react';
import { FaStar, FaQuoteLeft, FaUserCircle, FaCheckCircle } from 'react-icons/fa';

const testimonials = [
  {
    name: 'John D.',
    role: 'Homeowner',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    text: 'Fast, professional, and friendly service. Highly recommend!',
    rating: 5,
  },
  {
    name: 'Sarah K.',
    role: 'Business Owner',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    text: 'Solved my plumbing issue in no time. Great team!',
    rating: 5,
  },
  {
    name: 'Mike L.',
    role: 'Landlord',
    avatar: 'https://randomuser.me/api/portraits/men/54.jpg',
    text: 'Very reliable and affordable. Will use again.',
    rating: 4,
  },
  {
    name: 'Emily R.',
    role: 'Restaurant Manager',
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
    text: 'Professional, clean, and on time. The only plumbers I trust for my business.',
    rating: 5,
  },
  {
    name: 'David M.',
    role: 'Property Manager',
    avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
    text: 'Consistent quality service across multiple properties. Excellent communication.',
    rating: 5,
  },
  {
    name: 'Lisa T.',
    role: 'Homeowner',
    avatar: 'https://randomuser.me/api/portraits/women/33.jpg',
    text: 'Quick response to emergency call. Fixed the issue professionally.',
    rating: 5,
  },
];

export default function Trustpilot() {
  const [idx, setIdx] = useState(0);
  const [activeGroup, setActiveGroup] = useState(0);
  const groups = Math.ceil(testimonials.length / 3);

  const next = () => {
    if (activeGroup < groups - 1) {
      setActiveGroup(activeGroup + 1);
    } else {
      setActiveGroup(0);
    }
  };

  const prev = () => {
    if (activeGroup > 0) {
      setActiveGroup(activeGroup - 1);
    } else {
      setActiveGroup(groups - 1);
    }
  };

  const visibleTestimonials = testimonials.slice(activeGroup * 3, (activeGroup * 3) + 3);

  return (
    <section className="relative py-20 bg-white" id="trustpilot" data-aos="fade-up">
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-secondary mb-12 text-center">What Our Customers Say</h2>
        
        {/* Mobile View - Single Card with Navigation */}
        <div className="md:hidden relative w-full max-w-xl mx-auto">
          <div className="bg-light rounded-3xl shadow-xl p-4 flex flex-col items-center text-center animate-fade-in">
            <FaQuoteLeft className="text-accent text-3xl mb-4" />
            <p className="text-lg font-semibold text-gray-800 mb-6">{testimonials[idx].text}</p>
            <div className="flex items-center gap-4 mb-4">
              <img
                src={testimonials[idx].avatar}
                alt={testimonials[idx].name}
                className="w-16 h-16 rounded-full border-4 border-accent object-cover shadow"
                onError={e => (e.target.src = 'https://via.placeholder.com/64')}
              />
              <div className="flex flex-col items-start">
                <span className="font-bold text-primary text-lg flex items-center gap-1">
                  {testimonials[idx].name}
                  <FaCheckCircle className="text-accent ml-1" title="Verified Customer" />
                </span>
                <span className="text-sm text-gray-500">{testimonials[idx].role}</span>
              </div>
            </div>
            <div className="flex gap-1 mb-2 justify-center">
              {[...Array(testimonials[idx].rating)].map((_, j) => <FaStar key={j} className="text-accent text-xl" />)}
              {[...Array(5 - testimonials[idx].rating)].map((_, j) => <FaStar key={j} className="text-gray-300 text-xl" />)}
            </div>
            <span className="inline-block bg-accent/90 text-light px-3 py-1 rounded-full text-xs font-semibold mt-2">Verified Customer</span>
          </div>
          
          {/* Mobile Navigation Controls */}
          <div className="flex justify-center items-center gap-4 mt-6">
            <button
              className="bg-white border border-accent text-accent rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-accent hover:text-light transition-colors duration-200"
              onClick={() => setIdx((idx - 1 + 6) % 6)}
              aria-label="Previous testimonial"
            >
              &#8592;
            </button>
            <div className="flex gap-2">
              {[...Array(6)].map((_, i) => (
                <button
                  key={i}
                  className={`w-3 h-3 rounded-full ${i === idx ? 'bg-accent' : 'bg-gray-300'} transition-colors`}
                  onClick={() => setIdx(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              className="bg-white border border-accent text-accent rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-accent hover:text-light transition-colors duration-200"
              onClick={() => setIdx((idx + 1) % 6)}
              aria-label="Next testimonial"
            >
              &#8594;
            </button>
          </div>
        </div>

        {/* Desktop/Tablet View - Three Cards */}
        <div className="hidden md:block relative w-full max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
            {visibleTestimonials.map((t, i) => (
              <div key={i} className="bg-light rounded-3xl shadow-xl p-6 flex flex-col items-center text-center animate-fade-in">
                <FaQuoteLeft className="text-accent text-3xl mb-4" />
                <p className="text-lg font-semibold text-gray-800 mb-6">{t.text}</p>
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-16 h-16 rounded-full border-4 border-accent object-cover shadow"
                    onError={e => (e.target.src = 'https://via.placeholder.com/64')}
                  />
                  <div className="flex flex-col items-start">
                    <span className="font-bold text-primary text-lg flex items-center gap-1">
                      {t.name}
                      <FaCheckCircle className="text-accent ml-1" title="Verified Customer" />
                    </span>
                    <span className="text-sm text-gray-500">{t.role}</span>
                  </div>
                </div>
                <div className="flex gap-1 mb-2 justify-center">
                  {[...Array(t.rating)].map((_, j) => <FaStar key={j} className="text-accent text-xl" />)}
                  {[...Array(5 - t.rating)].map((_, j) => <FaStar key={j} className="text-gray-300 text-xl" />)}
                </div>
                <span className="inline-block bg-accent/90 text-light px-3 py-1 rounded-full text-xs font-semibold mt-2">Verified Customer</span>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Navigation Controls */}
        <div className="hidden md:flex justify-center items-center gap-4 mt-8">
          <button
            className="bg-white border border-accent text-accent rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-accent hover:text-light transition-colors duration-200"
            onClick={prev}
            aria-label="Previous testimonials"
          >
            &#8592;
          </button>
          <div className="flex gap-2">
            {[...Array(groups)].map((_, i) => (
              <button
                key={i}
                className={`w-3 h-3 rounded-full ${i === activeGroup ? 'bg-accent' : 'bg-gray-300'} transition-colors`}
                onClick={() => setActiveGroup(i)}
                aria-label={`Go to group ${i + 1}`}
              />
            ))}
          </div>
          <button
            className="bg-white border border-accent text-accent rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-accent hover:text-light transition-colors duration-200"
            onClick={next}
            aria-label="Next testimonials"
          >
            &#8594;
          </button>
        </div>
      </div>
    </section>
  );
} 