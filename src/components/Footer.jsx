import { FaFacebook, FaTwitter, FaInstagram, FaTools, FaArrowUp } from 'react-icons/fa';

const links = [
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
  { href: '#safety', label: 'Safety' },
  { href: '#trustpilot', label: 'Testimonials' },
  { href: '#awards', label: 'Awards' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="relative bg-secondary text-light pt-16 pb-8 mt-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8 px-4">
        {/* Logo and Socials */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex items-center gap-2 text-2xl font-bold">
            <FaTools className="text-accent animate-spin-slow" /> EasyPlumbing
          </div>
          <div className="flex gap-4 mt-2">
            <a href="#" className="hover:text-accent text-2xl transition-colors animate-float" aria-label="Facebook"><FaFacebook /></a>
            <a href="#" className="hover:text-accent text-2xl transition-colors animate-float" style={{animationDelay: '0.1s'}} aria-label="Twitter"><FaTwitter /></a>
            <a href="#" className="hover:text-accent text-2xl transition-colors animate-float" style={{animationDelay: '0.2s'}} aria-label="Instagram"><FaInstagram /></a>
          </div>
        </div>
        {/* Quick Links */}
        <div className="flex flex-wrap gap-4 justify-center md:justify-end">
          {links.map(link => (
            <a key={link.href} href={link.href} className="hover:text-accent text-lg font-semibold transition-colors">
              {link.label}
            </a>
          ))}
        </div>
      </div>
      {/* Divider */}
      <div className="container mx-auto border-t border-accent/30 my-6"></div>
      {/* Tagline and Copyright */}
      <div className="container mx-auto text-center text-light/90 mb-4">
        <div className="mb-2 text-base font-semibold tracking-wide">Proudly serving Slough, Reading, Guildford, Stevenage, Peterborough, Ipswich & more</div>
        <div className="text-sm">&copy; {new Date().getFullYear()} EasyPlumbing. All rights reserved.</div>
      </div>
      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 bg-accent text-light p-3 rounded-full shadow-lg hover:bg-dark transition-colors z-49 animate-fade-in"
        aria-label="Back to top"
      >
        <FaArrowUp className="text-xl" />
      </button>
    </footer>
  );
} 