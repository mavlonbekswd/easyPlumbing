import { useState } from 'react';
import { FaTools, FaWater, FaPhoneAlt,  FaBars, FaTimes, FaStar } from 'react-icons/fa';

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
  { href: '#safety', label: 'Safety & Proof' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#awards', label: 'Awards' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
];

const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);



  return (
    <header className="relative bg-primary text-light pb-20 overflow-hidden" id="home">
      {/* Decorative SVG Wave */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <svg viewBox="0 0 1440 320" className="w-full h-full absolute bottom-0 left-0">
        </svg>
      </div>
      {/* Modern Full-Width Navbar */}
      <nav className="fixed top-0 left-0 w-full z-40 bg-[#283618]/80 backdrop-blur-xl shadow-lg flex items-center justify-between px-4 md:px-12 py-3">
        <div className="flex items-center gap-2 text-2xl font-bold">
          <FaTools className="text-accent animate-spin-slow" /> EasyPlumbing
        </div>
        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 text-lg">
          {navLinks.map(link => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-accent transition-colors focus:outline-none focus:text-accent px-2 py-1 rounded-lg">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        {/* Desktop Call Us Button */}
        <a href="tel:08002088822" className="hidden md:flex items-center gap-2 bg-accent text-light px-5 py-2 rounded-lg font-semibold hover:bg-dark transition-colors shadow-lg animate-bounce">
          <FaPhoneAlt /> Call Us
        </a>
        {/* Hamburger Icon - Mobile Only */}
        <button
          className="md:hidden text-3xl p-2 rounded focus:outline-none focus:ring-2 focus:ring-accent z-50"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
        {/* Mobile Menu - Only on Mobile */}
        <div className={`md:hidden fixed inset-0 bg-black/60 z-50 transition-opacity duration-300 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
          onClick={() => setMenuOpen(false)}
          aria-hidden={!menuOpen}
        />
        <div className={`md:hidden fixed top-0 right-0 h-full w-3/4 max-w-xs bg-light backdrop-blur-sm text-secondary shadow-lg z-50 transform transition-transform duration-300 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          role="menu"
          aria-label="Mobile navigation"
        >
          <div className="flex justify-between items-center p-4 border-b border-gray-200">
            <span className="font-bold text-xl flex items-center gap-2"><FaTools className="text-accent" /> EasyPlumbing</span>
            <button className="text-2xl p-2 hover:text-accent transition-colors" onClick={() => setMenuOpen(false)} aria-label="Close menu"><FaTimes /></button>
          </div>
  <ul className="flex flex-col h-auto max-h-[80vh] overflow-y-auto bg-light gap-2 p-9">
            {navLinks.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block py-3 px-4 rounded-lg hover:bg-accent/10 hover:text-accent focus:bg-accent/10 focus:text-accent focus:outline-none transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>

              </li>

            ))}
          {/* Call Us Button in Mobile Menu */}
    <div className="p-4 border-t border-gray-200">
            <a href="tel:08002088822" className="flex items-center justify-center gap-2 bg-accent text-light px-5 py-3 rounded-lg font-semibold hover:bg-dark transition-colors shadow-lg">
              <FaPhoneAlt /> Call Us
            </a>
          </div>
          </ul>

        </div>
      </nav>
      {/* Hero Content */}
  <div className="container mx-auto pt-28 md:pt-40 relative z-20 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-40">
        {/* Plumber Image Left with Gradient Blob */}
        <div className="relative w-full flex justify-center md:justify-start md:w-auto mb-6 md:mb-0" data-aos="fade-right">
          {/* Glassmorphism Card */}
  <div className="absolute -top-4 lg:left-[20px] left-[100px] w-40 h-52 xs:w-48 xs:h-60 sm:w-56 sm:h-72 md:w-64 md:h-96 rounded-3xl bg-white/20 border border-white/40 backdrop-blur-xl shadow-2xl z-0"></div>
          {/* Animated Glow */}
          <div className="absolute -bottom-4 -right-4 w-24 h-24 xs:w-32 xs:h-32 md:w-48 md:h-48 rounded-full bg-accent/30 blur-2xl opacity-70 animate-pulse z-0"></div>
          {/* Plumber Image */}
          <img
            src="/header-img.png"
            alt="Plumber man"
            className="w-40 h-52 xs:w-48 xs:h-60 sm:w-56 sm:h-72 md:w-64 md:h-96 object-cover rounded-2xl shadow-xl bg-white/30 relative z-10"
          />
          {/* Floating Badge */}
          <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-accent text-light px-4 py-2 rounded-full font-bold shadow-lg text-sm flex items-center gap-2 z-20 animate-float whitespace-nowrap">
            <FaStar className="text-yellow-300" /> 5.0 Rated
          </span>
        </div>
        {/* Text Right */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left gap-4 relative z-10" data-aos="fade-left">
          {/* Badge above headline */}
          <span className="inline-flex items-center gap-2 bg-accent/90 text-light px-4 py-2 rounded-full font-semibold shadow animate-fade-in mb-2">
            <FaTools className="text-lg" /> Award-Winning Service
          </span>
          {/* Modern Headline with Gradient */}
          <h1 className="text-4xl md:text-6xl font-extrabold mb-2 drop-shadow-lg flex flex-wrap items-center gap-2 justify-center md:justify-start">
            <span className="bg-gradient-to-r from-accent to-primary text-transparent bg-clip-text">Professional</span>
            <span>Plumbing Services</span>
          </h1>
          <p className="text-xl md:text-2xl mb-4 max-w-2xl opacity-90">Your trusted partner for all plumbing needs. Fast, reliable, and always there when you need us.</p>
          {/* Buttons Row */}
          <div className="flex flex-col sm:flex-row gap-4 sm:w-auto justify-center md:justify-start">
            <a href="tel:08002088822" className="flex items-center justify-center gap-2 bg-white/90 hover:bg-accent/20 text-accent font-bold py-3 px-6 sm:py-4 sm:px-10 rounded-xl text-xl shadow-xl border-2 border-accent transition-transform transform hover:scale-105 focus:scale-105 w-full sm:w-auto">
              <FaPhoneAlt /> Call Us
            </a>
            <a href="#contact" className="flex items-center justify-center gap-2 bg-accent hover:bg-dark text-light font-bold py-3 px-6 sm:py-4 sm:px-10 rounded-xl text-xl shadow-xl transition-transform transform hover:scale-105 focus:scale-105 animate-pulse w-full sm:w-auto">
              Get a Free Quote
            </a>
          </div>
          {/* Star Ratings and Trust Badge */}
          <div className="flex flex-col sm:flex-row items-center gap-2 mt-4">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-accent text-xl" />
              ))}
            </div>
            <span className="inline-block bg-accent/90 text-light px-3 py-1 rounded-full text-xs font-semibold animate-fade-in ml-0 sm:ml-2 mt-2 sm:mt-0">Trusted by 1000+ customers</span>
          </div>
        </div>
      </div>
      {/* Floating Plumbing Icon */}
      <FaWater className="hidden md:block absolute right-10 top-1/2 text-accent text-[120px] opacity-20 z-10 animate-float" style={{ filter: 'blur(1px)' }} />
    </header>
  );
}
export default Header;