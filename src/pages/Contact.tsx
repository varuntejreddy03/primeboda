import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';
import { Facebook, Instagram, Linkedin } from '../components/ui/Icons';

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Valid phone number is required"),
  message: z.string().min(10, "Message must be at least 10 characters long"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { register, handleSubmit, formState: { errors, isValid } } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    mode: 'onTouched',
  });

  const onSubmit: SubmitHandler<ContactFormValues> = (data) => {
    const message = `*New Contact Inquiry*%0A%0A` +
      `*Name:* ${data.name}%0A` +
      `*Email:* ${data.email}%0A` +
      `*Phone:* ${data.phone}%0A` +
      `*Message:* ${data.message}`;
    
    window.open(`https://wa.me/447884767823?text=${message}`, '_blank');
    setIsSubmitted(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-background min-h-screen pt-32 pb-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-5xl md:text-6xl font-display font-black text-primary uppercase tracking-tight">
            Get in Touch
          </h1>
          <p className="text-xl font-body text-slate-600 max-w-2xl mx-auto">
            Ready to discuss your delivery needs or have a question about driving with us? We're here to help.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-24">
          
          {/* Left - Contact Details */}
          <div className="space-y-12 bg-white p-10 rounded-xl shadow-xl border-t-8 border-accent relative overflow-hidden">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="space-y-4">
              <h2 className="text-3xl font-display font-bold text-primary uppercase">Contact Information</h2>
              <div className="w-16 h-1 bg-accent"></div>
            </div>

            <ul className="space-y-8">
              <li className="flex items-start gap-6 group">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0 group-hover:bg-accent transition-colors">
                  <MapPin className="text-primary group-hover:text-white transition-colors" size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wide mb-1">Office Location</h4>
                  <p className="text-lg font-body text-primary font-bold">
                    6 Park house<br />
                    Staines road<br />
                    Feltham, TW148PA
                  </p>
                </div>
              </li>
              
              <li className="flex items-start gap-6 group">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0 group-hover:bg-accent transition-colors">
                  <Phone className="text-primary group-hover:text-white transition-colors" size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wide mb-1">Phone Number</h4>
                  <a href="tel:+447884767823" className="text-lg font-body text-primary font-bold hover:text-accent transition-colors">
                    +44 7884 767823
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-6 group">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0 group-hover:bg-accent transition-colors">
                  <Mail className="text-primary group-hover:text-white transition-colors" size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wide mb-1">Email Address</h4>
                  <a href="mailto:venkateshj@primeboda.co.uk" className="text-lg font-body text-primary font-bold hover:text-accent transition-colors">
                    venkateshj@primeboda.co.uk
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-6 group">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0 group-hover:bg-accent transition-colors">
                  <Clock className="text-primary group-hover:text-white transition-colors" size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wide mb-1">Operating Hours</h4>
                  <p className="text-lg font-body text-primary font-bold">
                    Monday – Sunday<br />
                    6:00am – 11:00pm
                  </p>
                </div>
              </li>
            </ul>

            <div className="pt-8 border-t border-slate-200">
              <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wide mb-4">Connect With Us</h4>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 bg-primary flex flex-col items-center justify-center text-white rounded hover:bg-accent transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="w-12 h-12 bg-primary flex flex-col items-center justify-center text-white rounded hover:bg-accent transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-12 h-12 bg-primary flex flex-col items-center justify-center text-white rounded hover:bg-accent transition-colors">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="bg-surface rounded-xl p-8 shadow-2xl relative overflow-hidden text-white border-l-4 border-accent">
            <div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none"></div>
            
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="relative z-10 space-y-8"
                >
                  <div>
                    <h2 className="text-3xl font-display font-bold uppercase mb-2">Send a Message</h2>
                    <p className="text-slate-400 font-body">Fill out the form below and our team will get back to you immediately.</p>
                  </div>

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="space-y-2">
                      <label className="block text-sm font-bold text-slate-300 uppercase tracking-wide">Full Name</label>
                      <input 
                        {...register('name')} 
                        className="w-full bg-[#1A2D4E] border border-white/10 rounded px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                        placeholder="John Doe"
                      />
                      {errors.name && <p className="text-accent text-xs font-bold">{errors.name.message}</p>}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="block text-sm font-bold text-slate-300 uppercase tracking-wide">Email</label>
                        <input 
                          type="email"
                          {...register('email')} 
                          className="w-full bg-[#1A2D4E] border border-white/10 rounded px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                          placeholder="you@company.com"
                        />
                        {errors.email && <p className="text-accent text-xs font-bold">{errors.email.message}</p>}
                      </div>
                      
                      <div className="space-y-2">
                        <label className="block text-sm font-bold text-slate-300 uppercase tracking-wide">Phone</label>
                        <input 
                          {...register('phone')} 
                          className="w-full bg-[#1A2D4E] border border-white/10 rounded px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                          placeholder="07..."
                        />
                        {errors.phone && <p className="text-accent text-xs font-bold">{errors.phone.message}</p>}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-bold text-slate-300 uppercase tracking-wide">Message</label>
                      <textarea 
                        {...register('message')} 
                        rows={5}
                        className="w-full bg-[#1A2D4E] border border-white/10 rounded px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
                        placeholder="How can we help you today?"
                      />
                      {errors.message && <p className="text-accent text-xs font-bold">{errors.message.message}</p>}
                    </div>

                    <div className="pt-4">
                      <button 
                        type="submit"
                        disabled={!isValid}
                        className="w-full md:w-auto px-10 py-4 bg-accent text-white font-black text-lg uppercase tracking-wide rounded hover:bg-orange-600 transition-colors flex justify-center items-center gap-3 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed group"
                      >
                        Send Message
                        <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </button>
                    </div>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="relative z-10 h-full flex flex-col items-center justify-center text-center py-20"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", bounce: 0.5, delay: 0.2 }}
                  >
                    <CheckCircle2 className="w-20 h-20 text-accent drop-shadow-md mb-6" />
                  </motion.div>
                  <h2 className="text-3xl font-display font-black text-white uppercase mb-4">Message Sent</h2>
                  <p className="text-lg font-body text-slate-300 max-w-sm">
                    Thank you for reaching out. We will respond to your inquiry as soon as possible.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="mt-8 px-6 py-2 border border-white/20 text-white font-bold rounded hover:bg-white/10 transition-colors"
                  >
                    Send Another
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

        {/* Map */}
        <div className="w-full h-96 bg-slate-200 rounded-xl overflow-hidden shadow-lg border-2 border-primary">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m2!1s0x4876735e58988a03%3A0xe6719543e110d9f!2sPark%20House%2C%2019-23%20Staines%20Rd%2C%20Feltham%20TW14%208PA%2C%20UK!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Prime Boda Headquarters Map"
          ></iframe>
        </div>

      </div>
    </motion.div>
  );
}
