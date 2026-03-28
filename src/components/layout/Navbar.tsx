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
    'fixed top-0 inset-x-0 z-50 transition-colors duration-300 border-b',
    {
      'bg-primary border-primary': isScrolled || !isHome || mobileMenuOpen,
      'bg-transparent border-transparent': !isScrolled && isHome && !mobileMenuOpen,
    }
  );

  return (
    <header className={navClass}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-[0.75rem] px-[1.5rem]">
          {/* Logo */}
          <Link to="/" className="flex items-center z-50">
            <img src="/assets/logo.png" alt="Prime Boda Services Limited" className="h-[44px] w-auto" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-white hover:text-accent font-body text-[0.9rem] font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/contact"
              className="text-white border-2 border-white hover:border-accent hover:bg-accent hover:text-white px-5 py-2 rounded text-[0.9rem] font-bold transition-all"
            >
              Get a Quote
            </Link>
            <Link
              to="/apply"
              className="bg-accent text-white px-5 py-2 rounded text-[0.9rem] font-bold hover:bg-orange-600 transition-colors hover:scale-105 shadow-md transform"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white p-2 z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-primary overflow-hidden border-t border-white/10"
          >
            <div className="px-4 pt-4 pb-8 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block text-white text-lg font-display hover:text-accent hover:translate-x-2 transition-transform"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-6 flex flex-col gap-4">
                <Link
                  to="/apply"
                  className="w-full text-center bg-accent text-white px-5 py-3 rounded text-base font-bold shadow-md"
                >
                  Apply Now
                </Link>
                <Link
                  to="/contact"
                  className="w-full text-center text-white border-2 border-white/20 hover:border-white px-5 py-3 rounded text-base font-bold transition-colors"
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
