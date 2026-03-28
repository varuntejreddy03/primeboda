import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Truck, Clock, Users, ShieldCheck, Quote } from 'lucide-react';

// Simple count up component (placeholder for a real hook if needed)
function StatCard({ end, suffix, label }: { end: number, suffix: string, label: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="text-center md:text-left space-y-2 p-[2rem_1.5rem] rounded-lg bg-surface relative overflow-hidden group">
      <div className="absolute top-0 left-0 w-2 h-full bg-accent -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
      <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
        <Truck className="w-24 h-24" />
      </div>
      <motion.h4 
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-[clamp(2.2rem,4vw,3rem)] font-display font-extrabold text-accent leading-none tracking-[-0.02em]"
      >
        {end}{suffix}
      </motion.h4>
      <p className="text-white font-body font-bold uppercase tracking-[0.2em] text-[0.7rem] opacity-70">{label}</p>
    </div>
  );
}

export default function Home() {
  const headlineWords = "Prime Boda Services Limited".split(" ");
  const heroRef = useRef(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-background w-full"
    >
      {/* Hero Section */}
      <section ref={heroRef} className="relative w-full min-h-[85vh] flex flex-col justify-center bg-primary overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=2670&auto=format&fit=crop" 
            alt="Delivery Vans" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent"></div>
          {/* Topographic/Dot overlay */}
          <div className="absolute inset-0 bg-dot-pattern opacity-30"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-32 pb-24">
          <div className="max-w-4xl">
            <motion.h1 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-[clamp(2.8rem,5vw,4.5rem)] font-display font-extrabold text-white leading-[1.1] tracking-[-0.04em] mb-6"
            >
              {headlineWords.map((word, i) => (
                <motion.span key={i} variants={wordVariants} className="inline-block mr-[0.2em]">
                  {word}
                </motion.span>
              ))}
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-[1.1rem] tracking-[0.02em] font-body font-medium text-slate-300 mb-10 pl-4 border-l-4 border-accent"
            >
              Reliable. Dependable. Deliverable.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="/apply" className="px-[2rem] py-[0.85rem] bg-accent text-white font-bold text-[0.95rem] rounded shadow-[4px_4px_0px_#0A2D5E] hover:translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_#0A2D5E] transition-all flex items-center justify-center gap-2">
                Apply to Drive <ArrowRight size={20} />
              </Link>
              <Link to="/contact" className="px-[2rem] py-[0.85rem] border-2 border-white text-white font-bold text-[0.95rem] rounded hover:bg-white hover:text-primary transition-colors flex items-center justify-center">
                Get a Delivery Quote
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Diagonal Cut Bottom */}
        <div className="absolute bottom-0 w-full h-[5vw] bg-background clip-diagonal-top"></div>
      </section>

      {/* Stats Section */}
      <section className="py-[4rem] bg-background relative z-10 -mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard end={500} suffix="+" label="Fleet Vehicles" />
            <StatCard end={13} suffix="+" label="Locations Covered" />
            <StatCard end={50} suffix=",000+" label="Parcels Delivered Daily" />
            <StatCard end={100} suffix="%" label="Customer Satisfaction" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-[4rem] bg-surface text-white relative">
        <div className="absolute top-0 w-full h-[5vw] bg-surface -mt-[4.9vw] clip-diagonal-bottom"></div>
        <div className="absolute inset-0 bg-dot-pattern opacity-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-16 text-center max-w-4xl mx-auto space-y-4">
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-display font-bold text-white uppercase tracking-[0.06em] mb-[1rem]">Our Core Services</h2>
            <p className="text-slate-400 font-body text-base">We provide end-to-end logistics solutions tailored to keep your business moving at the speed of tomorrow.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-[#122336] p-[1.8rem_1.6rem] rounded-lg group hover:-translate-y-2 transition-all duration-300 relative overflow-hidden shadow-xl border border-white/5">
              <div className="absolute left-0 top-0 w-1.5 h-full bg-accent -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              <div className="h-16 w-16 bg-primary rounded shadow-md flex items-center justify-center mb-6">
                <Truck className="text-accent h-8 w-8" />
              </div>
              <h3 className="text-[1.1rem] font-display font-bold mb-4">Last-Mile Delivery</h3>
              <p className="text-slate-400 mb-8 font-body text-[0.9rem] leading-[1.65]">
                The final step is the most critical. We ensure your parcels reach their destination safely, on time, every time across the UK.
              </p>
              <Link to="/services" className="inline-flex items-center gap-2 text-accent font-bold group-hover:gap-3 transition-all text-sm">
                Learn More <ArrowRight size={18} />
              </Link>
            </div>

            {/* Service 2 */}
            <div className="bg-[#122336] p-[1.8rem_1.6rem] rounded-lg group hover:-translate-y-2 transition-all duration-300 relative overflow-hidden shadow-xl border border-white/5">
              <div className="absolute left-0 top-0 w-1.5 h-full bg-accent -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              <div className="h-16 w-16 bg-primary rounded shadow-md flex items-center justify-center mb-6">
                <Clock className="text-accent h-8 w-8" />
              </div>
              <h3 className="text-[1.1rem] font-display font-bold mb-4">Same-Day / Next-Day</h3>
              <p className="text-slate-400 mb-8 font-body text-[0.9rem] leading-[1.65]">
                When time is money, we deliver speed. Urgent commercial consignments managed with maximum efficiency.
              </p>
              <Link to="/services" className="inline-flex items-center gap-2 text-accent font-bold group-hover:gap-3 transition-all text-sm">
                Learn More <ArrowRight size={18} />
              </Link>
            </div>

            {/* Service 3 */}
            <div className="bg-[#122336] p-[1.8rem_1.6rem] rounded-lg group hover:-translate-y-2 transition-all duration-300 relative overflow-hidden shadow-xl border border-white/5">
              <div className="absolute left-0 top-0 w-1.5 h-full bg-accent -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              <div className="h-16 w-16 bg-primary rounded shadow-md flex items-center justify-center mb-6">
                <Users className="text-accent h-8 w-8" />
              </div>
              <h3 className="text-[1.1rem] font-display font-bold mb-4">Van & Driver Supply</h3>
              <p className="text-slate-400 mb-8 font-body text-[0.9rem] leading-[1.65]">
                Need extra capacity? We supply fully-vetted, professional drivers with or without vehicles to meet your peak demands.
              </p>
              <Link to="/services" className="inline-flex items-center gap-2 text-accent font-bold group-hover:gap-3 transition-all text-sm">
                Learn More <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Drive With Us */}
      <section className="py-[4rem] bg-background relative overflow-hidden">
        <div className="absolute w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl -top-40 -right-40 -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2 relative">
              <div className="absolute inset-0 bg-accent translate-x-4 translate-y-4 rounded-xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1616401784845-180882ba9ba8?w=800" 
                alt="Delivery Driver" 
                className="relative z-10 rounded-xl w-full h-[380px] object-cover shadow-2xl transition-all duration-700"
                style={{ width:'100%', height:'380px', objectFit:'cover', borderRadius:'12px' }}
              />
            </div>
            <div className="w-full lg:w-1/2 space-y-6">
              <div className="space-y-4">
                <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-display font-bold text-primary uppercase tracking-tight leading-tight">Drive With Prime Boda</h2>
                <div className="w-20 h-2 bg-accent"></div>
              </div>
              
              <p className="text-lg font-body text-slate-700 leading-relaxed">
                Join a courier network that respects its drivers. Whether you own your van or need one supplied, we provide the consistent volume and support you need to succeed on the road.
              </p>

              <ul className="flex flex-col gap-[0.8rem]">
                {[
                  "Regular work — flexible hours to suit your lifestyle",
                  "Van & insurance provided OR use your own vehicle",
                  "Highly competitive rates of pay paid consistently",
                  "Excellent 24/7 operational support and backing",
                  "Opportunities to work across various UK regions"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <ShieldCheck className="text-accent shrink-0 mt-1" size={20} />
                    <span className="text-[0.95rem] font-body font-medium text-slate-800">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4">
                <Link to="/apply" className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-bold text-lg rounded hover:bg-surface transition-colors">
                  Start Your Application
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recruitment CTA Banner */}
      <section className="bg-accent py-[5rem] relative clip-diagonal">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-display font-black text-white uppercase tracking-[0.04em] mb-8 drop-shadow-lg leading-[1.1]">
            We Have Delivery Job Vacancies<br/>All Over The Country
          </h2>
          <Link to="/apply" className="inline-flex items-center justify-center px-10 py-5 bg-white text-primary font-black text-xl hover:scale-105 hover:shadow-2xl transition-all uppercase tracking-wide">
            Apply Now
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-[4rem] bg-surface relative text-white">
        <div className="absolute inset-0 bg-dot-pattern opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-display font-bold text-center uppercase tracking-[0.15em] mb-12">What They Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { text: "Prime Boda has transformed our final-mile logistics. Their reliability and communication are unmatched in the industry.", author: "Logistics Director, RetailCorp", type: "Client" },
              { text: "Best courier firm I've worked for. They provide the van, ensure the routes are realistic, and pay on time. Highly recommend.", author: "Michael T.", type: "Driver" },
              { text: "When we need emergency same-day cover, Prime Boda is our first call. They've never let us down on urgent consignments.", author: "Warehouse Manager, TechSupply", type: "Client" },
            ].map((quote, i) => (
              <div key={i} className="bg-primary/50 backdrop-blur-sm p-[1.6rem] rounded-lg border border-white/10 relative">
                <Quote className="text-accent/20 w-12 h-12 absolute top-4 right-4" />
                <p className="text-[0.9rem] font-body text-slate-300 italic mb-8 relative z-10 leading-[1.7]">"{quote.text}"</p>
                <div className="flex flex-col">
                  <span className="font-bold text-white uppercase tracking-wide text-sm">{quote.author}</span>
                  <span className="text-accent text-[0.8rem] font-bold uppercase">{quote.type}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business CTA */}
      <section className="py-[4rem] bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-display font-bold text-primary uppercase tracking-[0.06em] mb-6">Need a Reliable Delivery Partner?</h2>
          <p className="text-xl text-slate-600 mb-10 font-body max-w-2xl mx-auto">
            From single pallet runs to full fleet integration, discover how Prime Boda Services Limited can streamline your logistics.
          </p>
          <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-bold text-lg rounded shadow-[4px_4px_0px_#F47B20] hover:translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_#F47B20] transition-all">
            Get in Touch
          </Link>
        </div>
      </section>
    </motion.div>
  );
}
