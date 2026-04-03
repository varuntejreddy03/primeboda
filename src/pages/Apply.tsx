import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ChevronRight } from 'lucide-react';

const formSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Valid phone number is required"),
  ageConfirmation: z.literal(true, {
    message: "You must be 18 or older to apply",
  }),
  address: z.object({
    street: z.string().min(5, "Street address is required"),
    city: z.string().min(2, "City is required"),
    postcode: z.string().min(5, "Valid postcode is required"),
  }),
  drivingLicence: z.enum(['yes', 'no'], { message: "Please select an option" }),
  licenceType: z.enum(['Cat B', 'Cat C', 'Other'], { message: "Please select your licence type" }),
  ownVan: z.enum(['yes', 'no'], { message: "Please specify if you own a van" }),
  preferredArea: z.string().min(2, "Preferred area is required"),
  source: z.enum(['Google', 'Social Media', 'Friend', 'Other'], { message: "Please select how you heard about us" }),
  notes: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function Apply() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { register, handleSubmit, formState: { errors, isValid }, watch } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    mode: 'onTouched',
    defaultValues: {
      ageConfirmation: false as any,
    }
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const message = `*Prime Boda Driver Application*%0A%0A` +
      `*Name:* ${data.fullName}%0A` +
      `*Email:* ${data.email}%0A` +
      `*Phone:* ${data.phone}%0A` +
      `*Address:* ${data.address.street}, ${data.address.city}, ${data.address.postcode}%0A%0A` +
      `*Driving Details:* %0A` +
      `- Licence: ${data.drivingLicence}%0A` +
      `- Type: ${data.licenceType}%0A` +
      `- Own Van: ${data.ownVan}%0A` +
      `- Area: ${data.preferredArea}%0A%0A` +
      `*Source:* ${data.source}%0A` +
      `*Notes:* ${data.notes || 'None'}`;
    
    window.open(`https://wa.me/447884767823?text=${message}`, '_blank');
    setIsSubmitted(true);
  };

  const hasLicence = watch('drivingLicence');

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-background min-h-screen py-32"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-primary uppercase tracking-tight">
            Apply to Drive
          </h1>
          <p className="text-xl font-body text-slate-600 max-w-2xl mx-auto">
            Join the Prime Boda fleet. We offer competitive rates, flexible options, and reliable support for all our drivers.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-slate-100">
          <div className="h-2 w-full bg-accent"></div>
          
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.div
                key="form"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="p-8 md:p-12"
              >
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                  
                  {/* Personal Info */}
                  <div>
                    <h3 className="text-2xl font-display font-bold text-primary mb-6 flex items-center gap-2">
                      <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span>
                      Personal Details
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="block text-sm font-bold text-primary uppercase tracking-wide">Full Name *</label>
                        <input 
                          {...register('fullName')} 
                          className="w-full bg-slate-50 border border-slate-200 rounded px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                          placeholder="John Doe"
                        />
                        {errors.fullName && <p className="text-red-500 text-xs font-bold">{errors.fullName.message}</p>}
                      </div>
                      
                      <div className="space-y-2">
                        <label className="block text-sm font-bold text-primary uppercase tracking-wide">Email Address *</label>
                        <input 
                          type="email"
                          {...register('email')} 
                          className="w-full bg-slate-50 border border-slate-200 rounded px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                          placeholder="you@example.com"
                        />
                        {errors.email && <p className="text-red-500 text-xs font-bold">{errors.email.message}</p>}
                      </div>
                      
                      <div className="space-y-2">
                        <label className="block text-sm font-bold text-primary uppercase tracking-wide">Phone Number *</label>
                        <input 
                          {...register('phone')} 
                          className="w-full bg-slate-50 border border-slate-200 rounded px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                          placeholder="07..."
                        />
                        {errors.phone && <p className="text-red-500 text-xs font-bold">{errors.phone.message}</p>}
                      </div>

                      <div className="space-y-2 flex items-center pt-8">
                        <label className="flex items-center gap-3 cursor-pointer group">
                          <div className="relative flex items-center justify-center">
                            <input 
                              type="checkbox" 
                              {...register('ageConfirmation')} 
                              className="w-5 h-5 rounded border-slate-300 text-accent focus:ring-accent cursor-pointer peer"
                            />
                          </div>
                          <span className="text-sm font-bold text-primary group-hover:text-accent transition-colors">I confirm I am 18 years of age or older *</span>
                        </label>
                      </div>
                      <div className="col-span-1 md:col-span-2">
                        {errors.ageConfirmation && <p className="text-red-500 text-xs font-bold mt-1">{errors.ageConfirmation.message}</p>}
                      </div>
                    </div>
                  </div>

                  <hr className="border-slate-100" />

                  {/* Address */}
                  <div>
                    <h3 className="text-2xl font-display font-bold text-primary mb-6 flex items-center gap-2">
                      <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">2</span>
                      Home Address
                    </h3>
                    
                    <div className="grid grid-cols-1 gap-6">
                      <div className="space-y-2">
                        <label className="block text-sm font-bold text-primary uppercase tracking-wide">Street Address *</label>
                        <input 
                          {...register('address.street')} 
                          className="w-full bg-slate-50 border border-slate-200 rounded px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                          placeholder="123 Typical St"
                        />
                        {errors.address?.street && <p className="text-red-500 text-xs font-bold">{errors.address.street.message}</p>}
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="block text-sm font-bold text-primary uppercase tracking-wide">City/Town *</label>
                          <input 
                            {...register('address.city')} 
                            className="w-full bg-slate-50 border border-slate-200 rounded px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                            placeholder="London"
                          />
                          {errors.address?.city && <p className="text-red-500 text-xs font-bold">{errors.address.city.message}</p>}
                        </div>
                        <div className="space-y-2">
                          <label className="block text-sm font-bold text-primary uppercase tracking-wide">Postcode *</label>
                          <input 
                            {...register('address.postcode')} 
                            className="w-full bg-slate-50 border border-slate-200 rounded px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                            placeholder="SW1A 1AA"
                          />
                          {errors.address?.postcode && <p className="text-red-500 text-xs font-bold">{errors.address.postcode.message}</p>}
                        </div>
                      </div>
                    </div>
                  </div>

                  <hr className="border-slate-100" />

                  {/* Driving details */}
                  <div>
                    <h3 className="text-2xl font-display font-bold text-primary mb-6 flex items-center gap-2">
                      <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">3</span>
                      Driving Details
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Driver Licence */}
                      <div className="space-y-4">
                        <label className="block text-sm font-bold text-primary uppercase tracking-wide">Do you hold a valid UK driving licence? *</label>
                        <div className="flex gap-4">
                          <label className="flex items-center gap-2 cursor-pointer p-4 border border-slate-200 rounded flex-1 hover:border-accent hover:bg-orange-50 transition-all focus-within:ring-2 focus-within:ring-accent">
                            <input type="radio" value="yes" {...register('drivingLicence')} className="text-accent focus:ring-accent" />
                            <span className="font-bold text-primary">Yes</span>
                          </label>
                          <label className="flex items-center gap-2 cursor-pointer p-4 border border-slate-200 rounded flex-1 hover:border-accent hover:bg-orange-50 transition-all focus-within:ring-2 focus-within:ring-accent">
                            <input type="radio" value="no" {...register('drivingLicence')} className="text-accent focus:ring-accent" />
                            <span className="font-bold text-primary">No</span>
                          </label>
                        </div>
                        {errors.drivingLicence && <p className="text-red-500 text-xs font-bold">{errors.drivingLicence.message}</p>}
                      </div>

                      {/* Licence Type */}
                      <div className="space-y-4">
                        <label className="block text-sm font-bold text-primary uppercase tracking-wide">Licence Type *</label>
                        <select 
                          {...register('licenceType')} 
                          className="w-full bg-slate-50 border border-slate-200 rounded px-4 py-3 h-[58px] text-slate-800 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all appearance-none"
                          disabled={hasLicence === 'no'}
                        >
                          <option value="">Select Category...</option>
                          <option value="Cat B">Category B (Car/Van)</option>
                          <option value="Cat C">Category C (HGV)</option>
                          <option value="Other">Other</option>
                        </select>
                        {errors.licenceType && <p className="text-red-500 text-xs font-bold">{errors.licenceType.message}</p>}
                      </div>

                      {/* Own Van */}
                      <div className="space-y-4">
                        <label className="block text-sm font-bold text-primary uppercase tracking-wide">Do you own your own van? *</label>
                        <div className="flex gap-4">
                          <label className="flex items-center gap-2 cursor-pointer p-4 border border-slate-200 rounded flex-1 hover:border-accent hover:bg-orange-50 transition-all focus-within:ring-2 focus-within:ring-accent">
                            <input type="radio" value="yes" {...register('ownVan')} className="text-accent focus:ring-accent" />
                            <span className="font-bold text-primary">Yes</span>
                          </label>
                          <label className="flex items-center gap-2 cursor-pointer p-4 border border-slate-200 rounded flex-1 hover:border-accent hover:bg-orange-50 transition-all focus-within:ring-2 focus-within:ring-accent">
                            <input type="radio" value="no" {...register('ownVan')} className="text-accent focus:ring-accent" />
                            <span className="font-bold text-primary">No</span>
                          </label>
                        </div>
                        {errors.ownVan && <p className="text-red-500 text-xs font-bold">{errors.ownVan.message}</p>}
                      </div>

                      {/* Preferred Area */}
                      <div className="space-y-2">
                        <label className="block text-sm font-bold text-primary uppercase tracking-wide">Preferred Working Area *</label>
                        <input 
                          {...register('preferredArea')} 
                          className="w-full bg-slate-50 border border-slate-200 rounded px-4 py-3 h-[58px] text-slate-800 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                          placeholder="e.g. Greater London"
                        />
                        {errors.preferredArea && <p className="text-red-500 text-xs font-bold">{errors.preferredArea.message}</p>}
                      </div>
                    </div>
                  </div>

                  <hr className="border-slate-100" />

                  {/* Final Details */}
                  <div>
                    <h3 className="text-2xl font-display font-bold text-primary mb-6 flex items-center gap-2">
                      <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">4</span>
                      Final Details
                    </h3>
                    
                    <div className="grid grid-cols-1 gap-6">
                      <div className="space-y-2">
                        <label className="block text-sm font-bold text-primary uppercase tracking-wide">How did you hear about us? *</label>
                        <select 
                          {...register('source')} 
                          className="w-full bg-slate-50 border border-slate-200 rounded px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all appearance-none"
                        >
                          <option value="">Select option...</option>
                          <option value="Google">Google Search</option>
                          <option value="Social Media">Social Media</option>
                          <option value="Friend">Friend / Word of Mouth</option>
                          <option value="Other">Other</option>
                        </select>
                        {errors.source && <p className="text-red-500 text-xs font-bold">{errors.source.message}</p>}
                      </div>
                      
                      <div className="space-y-2">
                        <label className="block text-sm font-bold text-primary uppercase tracking-wide">Additional Notes (Optional)</label>
                        <textarea 
                          {...register('notes')} 
                          rows={4}
                          className="w-full bg-slate-50 border border-slate-200 rounded px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
                          placeholder="Tell us anything else we should know..."
                        />
                      </div>
                    </div>
                  </div>

                  <div className="pt-8">
                    <button 
                      type="submit"
                      disabled={!isValid}
                      className="w-full md:w-auto px-12 py-5 bg-accent text-white font-black text-xl uppercase tracking-wide rounded hover:bg-orange-600 transition-colors flex justify-center items-center gap-3 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed group"
                    >
                      Submit Application
                      <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                    </button>
                    <p className="text-sm text-slate-500 mt-4 text-center md:text-left">
                      By submitting, you agree to our Terms of Service & Privacy Policy.
                    </p>
                  </div>

                </form>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-12 md:p-24 flex flex-col items-center justify-center text-center space-y-6"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", bounce: 0.5, delay: 0.2 }}
                >
                  <CheckCircle2 className="w-24 h-24 text-secondary drop-shadow-md" />
                </motion.div>
                <h2 className="text-4xl font-display font-black text-primary uppercase">Application Received</h2>
                <p className="text-lg font-body text-slate-600 max-w-lg mx-auto">
                  Thank you for applying to drive with Prime Boda Services Limited. Our recruitment team will review your application and be in touch shortly.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 px-8 py-3 bg-slate-100 text-primary font-bold rounded hover:bg-slate-200 transition-colors"
                >
                  Submit Another
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
