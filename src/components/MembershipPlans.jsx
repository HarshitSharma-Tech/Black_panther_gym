import React from 'react';
import { Check, Flame, ArrowRight, Info } from 'lucide-react';

export default function MembershipPlans({ onSelectPlan }) {
  const plans = [
    {
      id: 'basic',
      name: 'BASIC',
      price: '$49',
      popular: false,
      tagline: 'Standard gym floor and equipment access for self-guided training.',
      features: [
        'Gym access',
        'Standard equipment',
        'Flexible workout schedule',
        'Monthly membership',
      ],
      ctaText: 'CHOOSE BASIC',
    },
    {
      id: 'pro',
      name: 'PRO',
      price: '$89',
      popular: true,
      tagline: 'Full gym access with additional assessment and consultation perks.',
      features: [
        'Full gym access',
        'Strength and cardio equipment',
        'Fitness consultation',
        'Priority membership support',
      ],
      ctaText: 'CHOOSE PRO',
    },
    {
      id: 'elite',
      name: 'ELITE',
      price: '$149',
      popular: false,
      tagline: 'Comprehensive membership with dedicated personalized guidance.',
      features: [
        'Full gym access',
        'Personal training consultation',
        'Personalized fitness guidance',
        'Premium member benefits',
      ],
      ctaText: 'CHOOSE ELITE',
    },
  ];

  return (
    <section id="membership" className="relative py-24 sm:py-32 bg-[#08080a] border-t border-zinc-900 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF2020]" />
            <span className="text-[10px] font-bold tracking-[0.2em] text-zinc-300 uppercase">
              MEMBERSHIP PLANS
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white font-heading">
            MEMBERSHIP <span className="text-[#FF2020]">PLANS.</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2">
            Flexible membership options built to support your long-term fitness goals.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                plan.popular
                  ? 'bg-zinc-900/90 border-2 border-[#FF2020] shadow-[0_0_35px_rgba(255,32,32,0.2)] lg:-translate-y-2'
                  : 'bg-zinc-900/40 border border-zinc-800 hover:border-zinc-700'
              }`}
            >
              {/* Highlight Badge */}
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-[#FF2020] text-white text-[10px] font-extrabold uppercase tracking-widest flex items-center gap-1.5 shadow-[0_0_15px_#FF2020]">
                  <Flame className="w-3.5 h-3.5" />
                  <span>MOST POPULAR</span>
                </div>
              )}

              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-white uppercase font-heading mb-2">
                  {plan.name}
                </h3>

                <div className="flex items-baseline gap-1.5 mb-4">
                  <span className="text-4xl sm:text-5xl font-black text-white font-bebas tracking-tight">
                    {plan.price}
                  </span>
                  <span className="text-xs text-zinc-400 font-semibold uppercase tracking-wider">
                    / month (est.)
                  </span>
                </div>

                <p className="text-xs text-zinc-400 leading-relaxed mb-8">
                  {plan.tagline}
                </p>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">
                    INCLUDED BENEFITS:
                  </div>
                  {plan.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                      <div className="w-4 h-4 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 text-[#FF2020]" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onSelectPlan && onSelectPlan(plan.name)}
                className={`w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                  plan.popular
                    ? 'bg-[#FF2020] hover:bg-[#e01a1a] text-white shadow-[0_0_20px_rgba(255,32,32,0.4)]'
                    : 'bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700'
                }`}
              >
                <span>CHOOSE PLAN</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

            </div>
          ))}
        </div>

        {/* Small Required Note */}
        <div className="mt-12 text-center flex items-center justify-center gap-2 text-xs text-zinc-400">
          <Info className="w-4 h-4 text-zinc-400 shrink-0" />
          <span>Membership features and pricing are subject to confirmation by the gym.</span>
        </div>

      </div>
    </section>
  );
}
