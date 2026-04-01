import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import clsx from 'clsx';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navClass = clsx(
    'fixed top-0 inset-x-0 z-50 transition-colors duration-300 border-b shadow-sm',
    {
      'bg-white border-slate-200': isScrolled || !isHome || mobileMenuOpen,
      'bg-white border-transparent': !isScrolled && isHome && !mobileMenuOpen,
    }
  );

  return (
    <header className={navClass}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-[0.75rem] px-[1.5rem]">
          <Link to="/" className="flex items-center gap-3 z-50 group">
            <div className="relative w-[65px] h-[42px] overflow-hidden flex-shrink-0">
              <img 
                src="/logo-removebg-preview (1).png" 
                alt="Prime Boda Logo Icon" 
                className="absolute top-0 left-1/2 w-[75px] max-w-none -translate-x-1/2 transition-transform duration-300 group-hover:scale-105" 
              />
            </div>
            <div className="flex flex-col pt-1">
              <span className="font-display font-black text-2xl md:text-[1.7rem] text-[#0A2D5E] tracking-[0.05em] leading-none transition-colors">
                PRIME BODA
              </span>
              <span className="font-display font-bold text-[0.65rem] md:text-[0.75rem] text-[#0A2D5E] tracking-[0.18em] uppercase mt-1">
                SERVICES LIMITED
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-[#0A2D5E] hover:text-[#F47B20] font-body text-[0.9rem] font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/contact"
              className="text-[#0A2D5E] border-2 border-[#0A2D5E] hover:border-[#F47B20] hover:bg-[#F47B20] hover:text-white px-5 py-2 rounded text-[0.9rem] font-bold transition-all"
            >
              Get a Quote
            </Link>
            <Link
              to="/apply"
              className="bg-[#F47B20] text-white px-5 py-2 rounded text-[0.9rem] font-bold hover:bg-orange-600 transition-colors hover:scale-105 shadow-md transform"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-[#0A2D5E] p-2 z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white overflow-hidden border-t border-slate-200 shadow-xl"
          >
            <div className="px-4 pt-4 pb-8 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block text-[#0A2D5E] text-lg font-display font-medium hover:text-[#F47B20] hover:translate-x-2 transition-transform"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-6 flex flex-col gap-4">
                <Link
                  to="/apply"
                  className="w-full text-center bg-[#F47B20] text-white px-5 py-3 rounded text-base font-bold shadow-md hover:bg-orange-600 transition-colors"
                >
                  Apply Now
                </Link>
                <Link
                  to="/contact"
                  className="w-full text-center text-[#0A2D5E] border-2 border-[#0A2D5E] hover:bg-[#0A2D5E] hover:text-white px-5 py-3 rounded text-base font-bold transition-colors"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
