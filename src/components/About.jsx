import { FaUserFriends, FaCheckCircle, FaAward } from 'react-icons/fa';

const highlights = [
  '20+ Years of Experience',
  'Family-Owned & Operated',
  'Transparent Pricing',
  'Community Trusted',
];

export default function About() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-light via-white to-accent/10 overflow-hidden" id="about" data-aos="fade-up">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-12">
        {/* Icon/Illustration Left */}
        <div className="flex flex-col items-center md:items-start w-full md:w-1/3">
          <div className="bg-accent/10 rounded-2xl p-4 sm:p-8 mb-6 shadow-lg border-2 border-accent flex flex-col items-center max-w-xs mx-auto w-full">
            
          <img src="/public/teams.png" alt="Plumber man" className="w-40 h-52 xs:w-48 xs:h-60 sm:w-56 sm:h-72 md:w-64 md:h-96 object-cover rounded-2xl shadow-xl bg-white/30 relative z-10" />
          </div>
        </div>
        {/* Text Right */}
        <div className="w-full md:w-2/3 flex flex-col gap-6 items-center md:items-start text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-extrabold text-secondary mb-2">About Us</h2>
          <p className="text-lg text-gray-700 max-w-2xl mb-2">
            EasyPlumbing has been serving the community for over 20 years with reliable and professional plumbing services. Our team of certified plumbers is committed to providing the highest quality service to our customers.
          </p>
          <p className="text-md text-gray-600 max-w-2xl mb-4">
            We pride ourselves on our attention to detail, timely service, and competitive pricing. Your satisfaction is our top priority.
          </p>
          <div className="bg-white/80 rounded-xl p-4 sm:p-6 shadow flex flex-col gap-3 w-full md:w-auto max-w-xs mx-auto">
            <h3 className="font-bold text-primary mb-2">Why We're Different</h3>
            <ul className="space-y-2">
              {highlights.map((h, i) => (
                <li key={i} className="flex items-center gap-2 text-secondary">
                  <FaCheckCircle className="text-accent" /> {h}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
} 