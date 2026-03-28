import { motion } from 'framer-motion';
import { Truck, Clock, Users, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: "last-mile",
    title: "Last-Mile Delivery",
    icon: <Truck className="w-12 h-12 text-accent" />,
    description: "The final step of the logistics process is the most critical for customer satisfaction. We specialize in B2C and B2B last-mile deliveries, ensuring packages arrive perfectly and on schedule.",
    features: [
      "Precision tracking for peace of mind",
      "Flexible delivery windows",
      "Specialized handling for fragile goods",
      "Direct-to-door, secure handoffs"
    ]
  },
  {
    id: "same-next-day",
    title: "Same-Day / Next-Day Courier",
    icon: <Clock className="w-12 h-12 text-accent" />,
    description: "When your consignments cannot wait, our rapid response team is ready. We provide dedicated vehicle logistics for urgent commercial deliveries nationwide.",
    features: [
      "Immediate dispatch within 60 minutes",
      "Dedicated point-to-point transit",
      "Full POD (Proof of Delivery) digital signing",
      "24/7 availability for emergency runs"
    ]
  },
  {
    id: "van-driver",
    title: "Van & Driver Supply",
    icon: <Users className="w-12 h-12 text-accent" />,
    description: "Scale your fleet on demand without the overhead. We provide fully vetted, experienced drivers and maintained vehicles to seamlessly integrate into your existing network.",
    features: [
      "Flexible short-term or long-term contracts",
      "Fully insured and maintained fleet",
      "Rigorous driver vetting and training",
      "Scalable capacity for peak seasons"
    ]
  }
];

export default function Services() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-background min-h-screen"
    >
      {/* Hero */}
      <section className="bg-primary text-white pt-40 pb-32 relative overflow-hidden clip-diagonal">
        <div className="absolute inset-0 bg-dot-pattern opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-[clamp(2.8rem,5vw,4.5rem)] font-display font-black uppercase tracking-tight mb-6 leading-[1.05]">Our Services</h1>
          <p className="text-lg md:text-xl font-body text-slate-300 max-w-2xl mx-auto border-t-2 border-accent pt-6">
            Industrial-grade logistics tailored for speed, scale, and reliability.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
          {services.map((svc, idx) => (
            <div key={svc.id} className={`flex flex-col lg:flex-row gap-16 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Content */}
              <div className="w-full lg:w-1/2 space-y-8">
                <div className="bg-surface p-4 inline-block rounded shadow-md">
                  {svc.icon}
                </div>
                <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-display font-bold text-primary uppercase tracking-tight">{svc.title}</h2>
                <div className="w-24 h-2 bg-accent"></div>
                
                <p className="text-base font-body text-slate-700 leading-relaxed">
                  {svc.description}
                </p>

                <ul className="space-y-4 pt-4">
                  {svc.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <CheckCircle2 className="text-secondary shrink-0 mt-1" size={20} />
                      <span className="text-[0.95rem] font-body font-medium text-slate-800">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Graphic/Process diagram representation */}
              <div className="w-full lg:w-1/2 bg-surface rounded-2xl p-10 lg:p-16 text-white border-b-8 border-accent shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-dot-pattern opacity-10"></div>
                <h3 className="text-2xl font-display font-bold mb-10 relative z-10">How it Works</h3>
                
                <div className="space-y-8 relative z-10">
                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center font-bold text-xl shrink-0">1</div>
                    <div>
                      <h4 className="text-xl font-bold font-display uppercase tracking-wide">Request</h4>
                      <p className="text-slate-400 mt-2 font-body">Submit your logistics needs through our streamlined booking system or directly with our operations team.</p>
                    </div>
                  </div>
                  
                  <div className="w-1 h-8 bg-white/20 ml-6 -mt-4 -mb-4"></div>
                  
                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center font-bold text-xl shrink-0">2</div>
                    <div>
                      <h4 className="text-xl font-bold font-display uppercase tracking-wide">Dispatch</h4>
                      <p className="text-slate-400 mt-2 font-body">We assign the optimal vehicle and driver for your route, providing real-time tracking data instantly.</p>
                    </div>
                  </div>
                  
                  <div className="w-1 h-8 bg-white/20 ml-6 -mt-4 -mb-4"></div>
                  
                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center font-bold text-xl shrink-0">3</div>
                    <div>
                      <h4 className="text-xl font-bold font-display uppercase tracking-wide">Delivery</h4>
                      <p className="text-slate-400 mt-2 font-body">Secure handover with automated proof-of-delivery (POD) notifications sent directly to your dashboard.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-white py-16 text-center clip-diagonal-reverse relative">
        <div className="absolute inset-0 bg-dot-pattern opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 z-10 relative">
          <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-display font-bold uppercase tracking-tight mb-8">Ready to upgrade your logistics?</h2>
          <Link to="/contact" className="inline-flex items-center justify-center px-10 py-5 bg-accent text-white font-black text-xl uppercase tracking-wide rounded hover:bg-orange-600 transition-colors gap-3 group">
            Get a Quote <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </motion.div>
  );
}
