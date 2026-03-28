import { motion } from 'framer-motion';
import { ShieldCheck, Truck, Clock, Target } from 'lucide-react';

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-background min-h-screen pt-32 pb-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-24 max-w-4xl mx-auto space-y-8">
          <h1 className="text-5xl md:text-7xl font-display font-black text-primary uppercase tracking-tight">
            About Prime Boda
          </h1>
          <p className="text-xl md:text-2xl font-body text-slate-600 leading-relaxed border-t-4 border-accent inline-block pt-8">
            We are redefining the standard of last-mile delivery and dedicated courier services in the UK.
          </p>
        </div>

        {/* Story & Mission Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div className="space-y-6">
            <h2 className="text-3xl font-display font-bold text-primary uppercase">Our Mission</h2>
            <div className="w-16 h-1 bg-accent mb-6"></div>
            <p className="text-lg font-body text-slate-700 leading-relaxed">
              At Prime Boda Services Limited, our mission is simple: To provide unmatched reliability in the courier sector, bridging the gap between business supply chains and end consumers.
            </p>
            <p className="text-lg font-body text-slate-700 leading-relaxed">
              We understand that to a customer, a delayed package is a broken promise. To a business, it's a damaged reputation. That's why we operate with a singular focus on speed, precision, and care. From our state-of-the-art vehicles to our rigorously trained driving teams, every asset is optimized for successful final-mile execution.
            </p>
          </div>

          <div className="bg-surface rounded-2xl p-10 text-white shadow-2xl relative overflow-hidden flex flex-col justify-center">
            <div className="absolute inset-0 bg-dot-pattern opacity-10"></div>
            <div className="relative z-10 space-y-6">
              <h3 className="text-2xl font-display font-bold text-accent uppercase tracking-wide">Operating Hours</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center text-xl font-body pb-2 border-b border-white/20">
                  <span className="text-slate-300">Monday - Friday</span>
                  <span className="font-bold">6:00am – 11:00pm</span>
                </div>
                <div className="flex justify-between items-center text-xl font-body pb-2 border-b border-white/20">
                  <span className="text-slate-300">Saturday</span>
                  <span className="font-bold">6:00am – 11:00pm</span>
                </div>
                <div className="flex justify-between items-center text-xl font-body">
                  <span className="text-slate-300">Sunday</span>
                  <span className="font-bold">6:00am – 11:00pm</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-24">
          <h2 className="text-3xl font-display font-bold text-center text-primary uppercase mb-12">Core Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 border-t-4 border-accent shadow-md group hover:-translate-y-2 transition-all">
              <ShieldCheck className="text-accent w-12 h-12 mb-6" />
              <h3 className="text-2xl font-display font-bold text-primary uppercase mb-4">Reliability</h3>
              <p className="text-slate-600 font-body leading-relaxed">We deliver on our promises. Consistent tracking, vetted drivers, and robust contingency planning.</p>
            </div>
            
            <div className="bg-white p-8 border-t-4 border-accent shadow-md group hover:-translate-y-2 transition-all">
              <Clock className="text-accent w-12 h-12 mb-6" />
              <h3 className="text-2xl font-display font-bold text-primary uppercase mb-4">Speed</h3>
              <p className="text-slate-600 font-body leading-relaxed">Time is the ultimate currency in logistics. Our routes and dispatch algorithms optimize for the fastest secure transit.</p>
            </div>

            <div className="bg-white p-8 border-t-4 border-accent shadow-md group hover:-translate-y-2 transition-all">
              <Target className="text-accent w-12 h-12 mb-6" />
              <h3 className="text-2xl font-display font-bold text-primary uppercase mb-4">Care</h3>
              <p className="text-slate-600 font-body leading-relaxed">Every package represents a customer's expectation. We train our teams to handle consignments as if they were their own.</p>
            </div>
          </div>
        </div>

        {/* Team Grid (Placeholder for actual photos) */}
        <div>
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-display font-bold text-primary uppercase">The Fleet In Action</h2>
            <div className="h-0.5 bg-slate-200 flex-grow ml-8 hidden md:block"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="aspect-square bg-slate-200 rounded overflow-hidden">
              <img src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" alt="Fleet Vehicle 1" />
            </div>
            <div className="aspect-square bg-slate-200 rounded overflow-hidden">
              <img src="https://images.unsplash.com/photo-1621516766336-d44ab534d0b1?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" alt="Fleet Vehicle 2" />
            </div>
            <div className="aspect-square bg-slate-200 rounded overflow-hidden">
              <img src="https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" alt="Warehouse Operations" />
            </div>
            <div className="aspect-square bg-slate-200 rounded overflow-hidden">
              <img src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" alt="Delivery Driver" />
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
}
