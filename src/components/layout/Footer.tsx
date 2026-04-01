import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Facebook, Instagram, Linkedin } from '../ui/Icons';

export default function Footer() {
  return (
    <footer className="bg-surface text-slate-300 pt-[3.5rem] pb-[2.0rem] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Col */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-4 group">
              <div className="relative w-[80px] h-[52px] overflow-hidden flex-shrink-0 bg-white p-1 rounded">
                <img 
                  src="/logo-removebg-preview (1).png" 
                  alt="Prime Boda Logo Icon" 
                  className="absolute top-0 left-1/2 w-[90px] max-w-none -translate-x-1/2 transition-transform duration-300 group-hover:scale-105" 
                />
              </div>
              <div className="flex flex-col pt-1">
                <span className="font-display font-black text-[2rem] text-white tracking-[0.05em] leading-none transition-colors">
                  PRIME BODA
                </span>
                <span className="font-display font-bold text-[0.8rem] text-white tracking-[0.18em] uppercase mt-1">
                  SERVICES LIMITED
                </span>
              </div>
            </Link>
            <p className="text-base font-body text-slate-400 max-w-xs">
              Reliable. Dependable. Deliverable.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <a href="#" className="h-10 w-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-accent text-white transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="h-10 w-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-accent text-white transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="h-10 w-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-accent text-white transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-[0.8rem] font-display font-bold text-white tracking-[0.1em] uppercase">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="hover:text-accent transition-colors text-[0.875rem] leading-[1.9]">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-accent transition-colors text-[0.875rem] leading-[1.9]">About Us</Link>
              </li>
              <li>
                <Link to="/apply" className="hover:text-accent transition-colors text-[0.875rem] leading-[1.9]">Apply to Drive</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-accent transition-colors text-[0.875rem] leading-[1.9]">Get a Quote</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-[0.8rem] font-display font-bold text-white tracking-[0.1em] uppercase">Services</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/services" className="hover:text-accent transition-colors text-[0.875rem] leading-[1.9]">Last-Mile Delivery</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-accent transition-colors text-[0.875rem] leading-[1.9]">Same-Day Courier</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-accent transition-colors text-[0.875rem] leading-[1.9]">Next-Day Delivery</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-accent transition-colors text-[0.875rem] leading-[1.9]">Van & Driver Supply</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="text-[0.8rem] font-display font-bold text-white tracking-[0.1em] uppercase">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-[0.875rem] leading-[1.9]">
                <MapPin className="text-accent shrink-0 mt-2" size={18} />
                <span>Flat 6, Park House, Staines Road, Feltham, TW14 8PA</span>
              </li>
              <li className="flex items-center gap-3 text-[0.875rem] leading-[1.9]">
                <Phone className="text-accent shrink-0" size={18} />
                <a href="tel:+447884767823" className="hover:text-accent transition-colors">+44 7884 767823</a>
              </li>
              <li className="flex items-center gap-3 text-[0.875rem] leading-[1.9]">
                <Mail className="text-accent shrink-0" size={18} />
                <a href="mailto:v25janga@gmail.com" className="hover:text-accent transition-colors">v25janga@gmail.com</a>
              </li>
              <li className="flex items-start gap-3 text-[0.875rem] leading-[1.9]">
                <Clock className="text-accent shrink-0 mt-2" size={18} />
                <span>Mon–Sun: 6:00am – 11:00pm</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm font-body">© 2024 Prime Boda Services Limited. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
