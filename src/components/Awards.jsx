import { FaTrophy, FaMedal, FaAward, FaStar } from 'react-icons/fa';

const awards = [
  {
    icon: <FaTrophy />, title: 'Best Plumbing Service', year: '2023', desc: 'Awarded for outstanding service and customer satisfaction.'
  },
  {
    icon: <FaMedal />, title: 'Top Rated Local', year: '2022', desc: 'Recognized as a top-rated local business by our community.'
  },
  {
    icon: <FaAward />, title: 'Customer Choice', year: '2021', desc: 'Voted #1 by customers for reliability and trust.'
  },
  {
    icon: <FaStar />, title: 'Excellence in Safety', year: '2023', desc: 'Honored for maintaining the highest safety standards.'
  },
];



export default function Awards() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-light via-white to-accent/10 overflow-hidden" id="awards" data-aos="fade-up">
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-secondary mb-2 text-center">Awards & Nominations</h2>
        <p className="text-lg text-gray-700 mb-12 text-center max-w-2xl">We're proud to be recognized for our commitment to quality, safety, and customer satisfaction.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-8">
          {awards.map((a, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-lg p-3 sm:p-6 md:p-8 flex flex-col items-center border-t-4 border-accent hover:scale-105 transition-transform duration-200 animate-fade-in max-w-xs mx-auto w-full" style={{animationDelay: `${i * 100}ms`}}>
              <div className="text-4xl sm:text-5xl text-accent mb-3 sm:mb-4 animate-float">{a.icon}</div>
              <h3 className="font-bold text-base sm:text-lg text-primary mb-1 text-center">{a.title}</h3>
              <span className="text-xs bg-accent/20 text-accent px-3 py-1 rounded-full mb-2 font-semibold">{a.year}</span>
              <p className="text-gray-600 text-center text-xs sm:text-sm">{a.desc}</p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
} 
