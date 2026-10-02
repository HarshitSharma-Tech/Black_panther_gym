import React from 'react';

export default function GymTransition() {
  return (
    <section className="relative w-full py-28 sm:py-36 bg-[#08080a] border-t border-zinc-900 overflow-hidden">
      
      {/* Full-width Background Gym Photo with Cinematic Low-Key Lighting */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/gym-interior-lighting.jpg"
          alt="Black Panther Gym Interior with Red Neon Lighting"
          className="w-full h-full object-cover object-center filter brightness-40 contrast-125"
          loading="lazy"
        />
        {/* Subtle Dark Vignette & Red Light Reflection Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#08080a] via-black/60 to-[#050505]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#08080a]/90 via-transparent to-[#08080a]/90" />
      </div>

      {/* Atmospheric Center Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 border border-red-500/30 backdrop-blur-md mb-6 shadow-[0_0_15px_rgba(255,32,32,0.15)]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF2020]" />
          <span className="text-[10px] font-bold tracking-[0.25em] text-red-400 uppercase">
            THE SANCTUARY EXPERIENCE
          </span>
        </div>

        <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white leading-[1.05] font-heading mb-6">
          WHERE STRENGTH <br />
          <span className="text-gradient-red drop-shadow-[0_0_30px_rgba(255,32,32,0.4)]">
            BECOMES A LIFESTYLE.
          </span>
        </h2>

        <p className="text-zinc-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-normal">
          Designed from the ground up for focused training. Linear crimson lighting, vibration-damped rubber flooring, and biomechanically engineered machinery built for individuals who demand raw excellence.
        </p>

        {/* Minimalist Specs Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-12 mt-12 border-t border-zinc-800/80 max-w-3xl mx-auto">
          <div>
            <div className="text-sm font-bold text-white uppercase font-heading">HEAVY IRON</div>
            <div className="text-xs text-zinc-400 mt-1">Dumbbells & Barbells</div>
          </div>
          <div>
            <div className="text-sm font-bold text-white uppercase font-heading">RED NEON</div>
            <div className="text-xs text-zinc-400 mt-1">Recessed Linear LEDs</div>
          </div>
          <div>
            <div className="text-sm font-bold text-white uppercase font-heading">MIRROR GRID</div>
            <div className="text-xs text-zinc-400 mt-1">Precision Form Check</div>
          </div>
          <div>
            <div className="text-sm font-bold text-white uppercase font-heading">CARDIO RUNWAY</div>
            <div className="text-xs text-zinc-400 mt-1">Spin & Magnetic Bikes</div>
          </div>
        </div>

      </div>

    </section>
  );
}
