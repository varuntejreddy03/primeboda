import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

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
                <span>6 Park house, Staines road, Feltham, TW148PA</span>
              </li>
              <li className="flex items-center gap-3 text-[0.875rem] leading-[1.9]">
                <Phone className="text-accent shrink-0" size={18} />
                <a href="tel:+447884767823" className="hover:text-accent transition-colors">+44 7884 767823</a>
              </li>
              <li className="flex items-center gap-3 text-[0.875rem] leading-[1.9]">
                <Mail className="text-accent shrink-0" size={18} />
                <a href="mailto:venkateshj@primeboda.co.uk" className="hover:text-accent transition-colors">venkateshj@primeboda.co.uk</a>
              </li>
              <li className="flex items-start gap-3 text-[0.875rem] leading-[1.9]">
                <Clock className="text-accent shrink-0 mt-2" size={18} />
                <span>Mon–Sun: 6:00am – 11:00pm</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm font-body text-slate-500">
            © 2026 <span className="text-white font-bold">Prime Boda Services Limited</span>. All Rights Reserved.
          </p>
          
          <div className="flex items-center gap-4">
            <span className="text-[0.65rem] font-black text-slate-500 uppercase tracking-[0.2em] mb-[-2px]">Design & Engineering</span>
            <a 
              href="https://staffarc.in" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 group transition-all"
            >
              <div className="flex items-center gap-2.5 bg-gradient-to-br from-white/10 to-white/5 px-4 py-2 rounded-xl border border-white/10 group-hover:border-accent/50 group-hover:shadow-[0_0_20px_rgba(244,123,32,0.2)] transition-all">
                <img 
                  src="https://www.staffarc.in/images/Staffarc-logo.png" 
                  alt="StaffArc Logo" 
                  className="h-5 w-auto object-contain brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity"
                />
                <div className="h-4 w-[1px] bg-white/20"></div>
                <span className="text-[0.85rem] font-display font-black text-white tracking-widest uppercase group-hover:text-accent transition-colors">StaffArc</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
