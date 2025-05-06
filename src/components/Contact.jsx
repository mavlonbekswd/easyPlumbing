import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaUser, FaCalendarAlt, FaClock, FaTools, FaStar, FaShieldAlt, FaCertificate } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="relative py-[-20px] bg-light to-accent/10 overflow-hidden" id="contact" data-aos="fade-up">
      <div className="container mx-auto max-w-4xl rounded-3xl shadow-xl bg-white/90 p-8 md:p-16 flex flex-col md:flex-row gap-12 items-center animate-fade-in">
        {/* Contact Info */}
        <div className="w-full md:w-1/2 flex flex-col gap-6 items-center md:items-start text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-extrabold text-secondary mb-2 flex items-center gap-2">
            <FaPhoneAlt className="text-accent" /> Contact Us
          </h2>
          <p className="text-gray-700 mb-4">We're here to help! Reach out and our team will get back to you as soon as possible.</p>
          
          {/* Company Description */}
          <div className="bg-light/50 p-4 rounded-lg mb-4">
            <p className="text-gray-700 italic">"Your trusted local plumbing experts with over 15 years of experience. We provide reliable, professional service with a 100% satisfaction guarantee."</p>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col gap-4 w-full">
            <div className="flex items-center gap-3 text-lg">
              <FaPhoneAlt className="text-accent" /> <span className="font-semibold">08002088822</span>
            </div>
            <div className="flex items-center gap-3 text-lg">
              <FaEnvelope className="text-accent" /> <span className="font-semibold">easyplumbing33@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 text-lg">
              <FaMapMarkerAlt className="text-accent" /> <span className="font-semibold">123 High St, Slough, SL1 1AA</span>
            </div>
          </div>

          {/* Business Hours */}
          <div className="w-full mt-4">
            <h3 className="text-xl font-bold text-secondary mb-3">Business Hours</h3>
            <div className="grid grid-cols-2 gap-2 text-gray-700">
              <div>Monday - Sunday:</div>
              <div className="font-semibold">24/7 Service Available</div>
              <div className="col-span-2 text-sm text-accent mt-2">
                Emergency services available around the clock
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="w-full mt-6 grid grid-cols-3 gap-4">
            <div className="flex flex-col items-center">
              <FaStar className="text-yellow-400 text-2xl mb-2" />
              <span className="text-sm font-semibold">5-Star Rated</span>
            </div>
            <div className="flex flex-col items-center">
              <FaShieldAlt className="text-accent text-2xl mb-2" />
              <span className="text-sm font-semibold">Licensed & Insured</span>
            </div>
            <div className="flex flex-col items-center">
              <FaCertificate className="text-accent text-2xl mb-2" />
              <span className="text-sm font-semibold">24/7 Service</span>
            </div>
          </div>
        </div>
        {/* Contact Form */}
        <form className="w-full md:w-1/2 bg-light rounded-2xl shadow p-8 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-primary font-semibold flex items-center gap-2" htmlFor="name"><FaUser className="text-accent" /> Name</label>
            <input id="name" type="text" className="p-3 rounded-lg border border-gray-200 focus:border-accent focus:outline-none" placeholder="Your Name" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-primary font-semibold flex items-center gap-2" htmlFor="email"><FaEnvelope className="text-accent" /> Email</label>
            <input id="email" type="email" className="p-3 rounded-lg border border-gray-200 focus:border-accent focus:outline-none" placeholder="you@email.com" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-primary font-semibold flex items-center gap-2" htmlFor="service"><FaTools className="text-accent" /> Service Type</label>
            <select id="service" className="p-3 rounded-lg border border-gray-200 focus:border-accent focus:outline-none">
              <option>Emergency</option>
              <option>Installation</option>
              <option>Maintenance</option>
              <option>Other</option>
            </select>
          </div>
          <div className="flex flex-col gap-2 md:flex-row md:gap-6">
            <div className="flex flex-col gap-2 w-full md:w-1/2">
              <label className="text-primary font-semibold flex items-center gap-2" htmlFor="date"><FaCalendarAlt className="text-accent" /> Preferred Date</label>
              <input id="date" type="date" className="p-3 rounded-lg border border-gray-200 focus:border-accent focus:outline-none" />
            </div>
            <div className="flex flex-col gap-2 w-full md:w-1/2">
              <label className="text-primary font-semibold flex items-center gap-2" htmlFor="time"><FaClock className="text-accent" /> Preferred Time</label>
              <input id="time" type="time" className="p-3 rounded-lg border border-gray-200 focus:border-accent focus:outline-none" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-primary font-semibold flex items-center gap-2" htmlFor="message">Message</label>
            <textarea id="message" className="p-3 rounded-lg border border-gray-200 focus:border-accent focus:outline-none h-32" placeholder="How can we help you?"></textarea>
          </div>
          <button className="w-full bg-accent hover:bg-dark text-light font-bold py-3 px-8 rounded-lg text-lg shadow transition-colors">Send Message</button>
        </form>
      </div>
    </section>
  );
} 

export default Contact;