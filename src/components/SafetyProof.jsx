import { FaShieldAlt, FaUserCheck, FaCheckDouble, FaCertificate } from 'react-icons/fa';

const pillars = [
  {
    icon: <FaShieldAlt />,
    title: 'Fully Insured',
    desc: 'We are fully licensed and insured for your peace of mind.'
  },
  {
    icon: <FaUserCheck />,
    title: 'Background Checked',
    desc: 'All staff are background checked and trained for safety.'
  },
  {
    icon: <FaCheckDouble />,
    title: 'Strict Protocols',
    desc: 'We follow the latest safety protocols and best practices.'
  },
  {
    icon: <FaCertificate />,
    title: 'Certified Experts',
    desc: 'Our plumbers are certified by leading industry organizations.'
  },
];

export default function SafetyProof() {
  return (
    <section className="relative py-20 bg-[#606C38]" id="safety" data-aos="fade-up">
      <div className="container mx-auto flex flex-col items-center">
        {/* Big Circular Badge */}
        <div className="absolute left-1/2 -top-12 -translate-x-1/2 z-10">
          <div className="rounded-full bg-primary text-light border-4 border-accent shadow-lg w-32 h-32 flex flex-col items-center justify-center text-center text-xl font-bold uppercase tracking-wider animate-float">
            <span className="text-3xl mb-1">✔</span>
            Certified & Safe
          </div>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-16 mt-20 text-center" style={{color: '#FEFAE0'}}>Safety & Proof</h2>
        <p className="text-lg mb-8 text-center" style={{color: '#FEFAE0'}}>Your safety is our top priority. We follow strict protocols and only send certified, background-checked professionals to your home or business.</p>
        <div className="w-full flex flex-col md:flex-row justify-center items-stretch gap-8 mb-12">
          {pillars.map((p, i) => (
            <div key={i} className="flex-1 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col items-center p-4 sm:p-8 text-center transition-transform hover:scale-105 hover:shadow-lg duration-200 max-w-xs mx-auto w-full">
              <div className="text-4xl text-accent mb-4">{p.icon}</div>
              <h3 className="font-bold text-lg text-primary mb-2">{p.title}</h3>
              <p className="text-gray-600 text-sm">{p.desc}</p>
            </div>
          ))}
        </div>
        {/* Testimonial/Quote */}
        <div className="max-w-xs mx-auto text-center mt-8">
          <blockquote className="italic text-light text-lg">“We trust EasyPlumbing because they always put safety and quality first. Highly recommended!”</blockquote>
          <div className="mt-2 text-accent font-bold">— A Satisfied Customer</div>
        </div>
      </div>
    </section>
  );
} 