import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function FreeTrialBooking({ initialPlan = 'PRO' }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    plan: initialPlan,
    date: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialPlan) {
      setFormData((prev) => ({ ...prev, plan: initialPlan }));
    }
  }, [initialPlan]);

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Mobile number is required';
    }
    if (!formData.date) errs.date = 'Please select a preferred visit date';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#FF2020', '#FFFFFF', '#333333'],
      });
    } catch (e) {
      console.warn(e);
    }
    setIsSubmitted(true);
  };

  return (
    <section id="freetrial" className="relative py-24 sm:py-32 bg-[#08080a] border-t border-zinc-900 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF2020]" />
            <span className="text-[10px] font-bold tracking-[0.2em] text-zinc-300 uppercase">
              MEMBERSHIP ENQUIRY
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white font-heading">
            READY TO <span className="text-[#FF2020]">LEVEL UP?</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2">
            Take the first step towards your fitness goals. Get in touch with our team and explore your membership options.
          </p>
        </div>

        {/* Form Container */}
        <div className="max-w-3xl mx-auto bg-zinc-900/40 border border-zinc-800 rounded-3xl p-6 sm:p-10 backdrop-blur-xl">
          
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs font-bold text-zinc-300 uppercase tracking-wider mb-2 block">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. John Doe"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className={`w-full bg-zinc-950 border ${
                      errors.fullName ? 'border-red-500' : 'border-zinc-800'
                    } focus:border-[#FF2020] text-sm text-white px-4 py-3 rounded-xl focus:outline-none transition`}
                  />
                  {errors.fullName && (
                    <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.fullName}
                    </p>
                  )}
                </div>

                <div>
                  <label className="text-xs font-bold text-zinc-300 uppercase tracking-wider mb-2 block">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full bg-zinc-950 border ${
                      errors.email ? 'border-red-500' : 'border-zinc-800'
                    } focus:border-[#FF2020] text-sm text-white px-4 py-3 rounded-xl focus:outline-none transition`}
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label className="text-xs font-bold text-zinc-300 uppercase tracking-wider mb-2 block">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    placeholder="e.g. +1 555 0192"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={`w-full bg-zinc-950 border ${
                      errors.phone ? 'border-red-500' : 'border-zinc-800'
                    } focus:border-[#FF2020] text-sm text-white px-4 py-3 rounded-xl focus:outline-none transition`}
                  />
                  {errors.phone && (
                    <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.phone}
                    </p>
                  )}
                </div>

                <div>
                  <label className="text-xs font-bold text-zinc-300 uppercase tracking-wider mb-2 block">
                    Preferred Membership Plan
                  </label>
                  <select
                    value={formData.plan}
                    onChange={(e) => setFormData({ ...formData, plan: e.target.value })}
                    className="w-full bg-zinc-950 border border-zinc-800 focus:border-[#FF2020] text-sm text-white px-4 py-3 rounded-xl focus:outline-none transition cursor-pointer"
                  >
                    <option value="BASIC">BASIC Plan</option>
                    <option value="PRO">PRO Plan (Most Popular)</option>
                    <option value="ELITE">ELITE Plan</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label className="text-xs font-bold text-zinc-300 uppercase tracking-wider mb-2 block">
                    Preferred Visit Date *
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className={`w-full bg-zinc-950 border ${
                      errors.date ? 'border-red-500' : 'border-zinc-800'
                    } focus:border-[#FF2020] text-sm text-white px-4 py-3 rounded-xl focus:outline-none transition cursor-pointer`}
                  />
                  {errors.date && (
                    <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.date}
                    </p>
                  )}
                </div>

              </div>

              <div>
                <label className="text-xs font-bold text-zinc-300 uppercase tracking-wider mb-2 block">
                  Message
                </label>
                <textarea
                  rows="3"
                  placeholder="Any questions or specific training requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-zinc-950 border border-zinc-800 focus:border-[#FF2020] text-sm text-white p-4 rounded-xl focus:outline-none transition"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-[#FF2020] hover:bg-[#e01a1a] text-white font-bold text-xs tracking-widest uppercase transition-all duration-300 shadow-[0_0_20px_rgba(255,32,32,0.4)] flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>BOOK YOUR FREE TRIAL</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </form>
          ) : (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center text-green-400 mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white uppercase font-heading">
                ENQUIRY RECEIVED
              </h3>
              <p className="text-sm text-zinc-300 max-w-md mx-auto leading-relaxed">
                Thank you, {formData.fullName}. Your free trial enquiry has been registered for {formData.date}. Our gym team will contact you shortly to confirm your visit.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-4 px-6 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-xs font-bold text-zinc-200 uppercase tracking-wider transition cursor-pointer"
              >
                SUBMIT ANOTHER ENQUIRY
              </button>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
