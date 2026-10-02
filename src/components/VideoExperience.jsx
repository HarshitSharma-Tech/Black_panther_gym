import React, { useState } from 'react';
import { Play, X, Film, ExternalLink } from 'lucide-react';

export default function VideoExperience() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoUrl = '/videos/panther-hero-video.mp4';

  return (
    <section id="video" className="relative py-24 sm:py-32 bg-[#08080a] border-t border-zinc-900 overflow-hidden">
      
      {/* Ambient Red Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#FF2020]/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF2020]" />
            <span className="text-[10px] font-bold tracking-[0.2em] text-zinc-300 uppercase">
              VIDEO EXPERIENCE
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white font-heading">
            FEEL THE <span className="text-[#FF2020]">ENERGY.</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2">
            Every rep. Every set. Every breakthrough.
          </p>
        </div>

        {/* Video Preview Hero Card */}
        <div className="relative rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl group max-w-5xl mx-auto">
          <div className="relative h-[380px] sm:h-[480px] w-full overflow-hidden bg-zinc-950 flex items-center justify-center">
            
            {/* Background Looping Video Stream in Preview */}
            <video
              src={videoUrl}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover object-center filter brightness-85 scale-[1.04] group-hover:scale-108 transition-transform duration-700 ease-out"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/20" />
            <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#08080a] to-transparent pointer-events-none" />

            {/* Central Play Button */}
            <button
              onClick={() => setIsPlaying(true)}
              aria-label="Play Fullscreen Video Experience"
              className="relative z-20 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#FF2020] flex items-center justify-center text-white shadow-[0_0_35px_rgba(255,32,32,0.5)] hover:shadow-[0_0_50px_rgba(255,32,32,0.8)] hover:scale-110 transition-all duration-300 cursor-pointer"
            >
              <Play className="w-8 h-8 ml-1 fill-white" />
            </button>

            {/* Bottom Info Bar */}
            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 z-20">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-red-400">
                  CINEMATIC WORKOUT REEL
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white uppercase font-heading mt-0.5">
                  BLACK PANTHER GYM SANCTUARY
                </h3>
              </div>
              <a
                href="https://www.instagram.com/_blackpantherfitness/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-black/70 backdrop-blur-md border border-zinc-700 text-xs font-semibold text-zinc-300 hover:text-white hover:border-[#FF2020] flex items-center gap-1.5 transition"
              >
                <span>@_blackpantherfitness</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

          </div>
        </div>

      </div>

      {/* Fullscreen Video Modal */}
      {isPlaying && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-8">
          <button
            onClick={() => setIsPlaying(false)}
            aria-label="Close Video Player"
            className="absolute top-6 right-6 p-3 rounded-full bg-zinc-900 border border-zinc-700 text-zinc-300 hover:text-white hover:border-red-500 transition z-50 cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="max-w-5xl w-full flex flex-col items-center">
            <div className="relative w-full aspect-video rounded-3xl overflow-hidden border border-zinc-800 bg-black shadow-[0_0_50px_rgba(255,32,32,0.3)]">
              <video
                src={videoUrl}
                autoPlay
                loop
                playsInline
                className="w-full h-full object-cover"
                controls
              />
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
