import React from 'react';
import { ArrowRight, ShieldCheck, Dumbbell, Flame } from 'lucide-react';

export default function AboutSection({ onDiscoverClick }) {
  const highlights = [
    {
      icon: Dumbbell,
      title: 'Precision Equipment',
      description: 'Selectorized weight stacks, heavy-duty Olympic barbells, and durable free-weight stations.',
    },
    {
      icon: Flame,
      title: 'Focused Atmosphere',
      description: 'Low-light industrial interior illuminated by crimson LEDs, creating an uninterrupted training environment.',
    },
    {
      icon: ShieldCheck,
      title: 'Disciplined Culture',
      description: 'A community of athletes and dedicated lifters who respect the iron and push each other toward daily progress.',
    },
  ];

  return (
    <section id="about" className="relative py-24 sm:py-32 bg-[#08080a] border-t border-zinc-900 overflow-hidden">
      
      {/* Subtle Red Ambient Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#FF2020]/8 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Real Gym Photo Presentation */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl group">
              <img
                src="/images/gym-interior-lighting.jpg"
                alt="Black Panther Gym Floor & Equipment"
                className="w-full h-[500px] object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

              {/* Minimal Overlay Tag */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-zinc-950/80 backdrop-blur-xl border border-zinc-800">
                <span className="text-[10px] font-bold text-red-400 uppercase tracking-widest block mb-1">
                  DISCIPLINE • STRENGTH • FOCUS
                </span>
                <span className="text-sm font-semibold text-white">
                  Real Equipment. Real Environment.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Values */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF2020]" />
              <span className="text-[10px] font-bold tracking-[0.2em] text-zinc-300 uppercase">
                ABOUT BLACK PANTHER
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight mb-6 font-heading">
              MORE THAN A GYM. <br />
              <span className="text-[#FF2020]">A WAY OF LIFE.</span>
            </h2>

            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-8">
              Step into an environment designed to challenge your limits, build confidence, and help you become stronger every day. Experience modern equipment, an energetic atmosphere, and a community driven by genuine fitness.
            </p>

            {/* 3 Visual Highlights */}
            <div className="space-y-4 w-full mb-8">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center shrink-0 text-[#FF2020]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white uppercase tracking-wide mb-1 font-heading">
                        {item.title}
                      </h3>
                      <p className="text-xs text-zinc-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Discover CTA */}
            <button
              onClick={onDiscoverClick}
              className="px-7 py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-bold text-xs tracking-widest uppercase border border-zinc-800 hover:border-red-500/50 transition-all flex items-center gap-2.5 cursor-pointer"
            >
              <span>DISCOVER OUR GYM</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#FF2020]" />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}
