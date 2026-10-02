import React, { useRef, useState, useEffect } from 'react';
import { ArrowRight, ChevronDown, Volume2, VolumeX, Play, Pause } from 'lucide-react';

export default function Hero({ onExploreClick, onMembershipClick }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.log("Autoplay waiting for interaction:", err);
      });
    }
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full bg-[#050505] flex items-center justify-center overflow-hidden pt-20 pb-12"
    >
      {/* Background Cinematic Video Layer - Scaled & Masked */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          src="/videos/panther-hero-video.mp4"
          poster="/images/panther-running-sprint.jpg"
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="w-full h-full object-cover object-center filter brightness-90 contrast-110 scale-[1.08] transform transition-transform duration-1000"
        />

        {/* Master Luxury Vignettes & Bottom Gradient Shadows */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/60 to-black/30 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-black/80 z-10" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent z-10" />
        <div className="absolute bottom-0 right-0 w-80 h-40 bg-radial from-transparent to-[#050505] z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-[#FF2020]/10 mix-blend-screen pointer-events-none z-10" />
        
        {/* Ambient Red Glow Halo */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[300px] bg-[#FF2020]/12 rounded-full blur-[160px] pointer-events-none z-10" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center min-h-[75vh]">
          
          {/* Left Column: Headline & Action Buttons */}
          <div className="lg:col-span-8 flex flex-col items-start text-left">
            
            {/* Eyebrow Label */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-zinc-950/80 border border-zinc-800/90 backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(0,0,0,0.8)]">
              <span className="w-2 h-2 rounded-full bg-[#FF2020] animate-pulse" />
              <span className="text-[11px] font-semibold tracking-[0.25em] text-zinc-200 uppercase font-sans">
                THE NEW STANDARD OF STRENGTH
              </span>
            </div>

            {/* Main Balanced Headline */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95] uppercase mb-6 text-white font-heading drop-shadow-[0_4px_30px_rgba(0,0,0,0.9)]">
              UNLEASH <br />
              YOUR INNER <br />
              <span className="text-[#FF2020] drop-shadow-[0_0_35px_rgba(255,32,32,0.6)]">
                BEAST.
              </span>
            </h1>

            {/* Supporting Subtitle */}
            <p className="text-base sm:text-lg text-zinc-300 font-normal max-w-xl mb-9 leading-relaxed drop-shadow-md">
              Train with purpose. Build strength. Discover your potential at <span className="text-white font-semibold">BLACK PANTHER</span>, an uncompromising luxury training sanctuary engineered for peak physical mastery.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-5 w-full sm:w-auto mb-10">
              <button
                onClick={onMembershipClick}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#FF2020] hover:bg-[#e01a1a] text-white font-bold text-xs tracking-widest uppercase flex items-center justify-center gap-2.5 shadow-[0_0_30px_rgba(255,32,32,0.45)] hover:shadow-[0_0_45px_rgba(255,32,32,0.7)] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>EXPLORE MEMBERSHIP</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreClick}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-zinc-950/80 hover:bg-zinc-900 text-zinc-200 hover:text-white font-semibold text-xs tracking-widest uppercase border border-zinc-700/70 hover:border-red-500/50 backdrop-blur-md transition-all duration-300 cursor-pointer"
              >
                DISCOVER THE GYM
              </button>
            </div>

            {/* Quality Pillars Strip */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-zinc-800/80 w-full max-w-lg backdrop-blur-sm">
              <div>
                <div className="text-xs font-bold text-white uppercase tracking-wider">PREMIUM IRON</div>
                <div className="text-[11px] text-zinc-400 mt-0.5">Heavy-Duty Hardware</div>
              </div>
              <div>
                <div className="text-xs font-bold text-[#FF2020] uppercase tracking-wider">RED NEON</div>
                <div className="text-[11px] text-zinc-400 mt-0.5">Ceiling LED Canopy</div>
              </div>
              <div>
                <div className="text-xs font-bold text-white uppercase tracking-wider">DARK SANCTUARY</div>
                <div className="text-[11px] text-zinc-400 mt-0.5">Uninterrupted Focus</div>
              </div>
            </div>

          </div>

          {/* Right Column: Discreet Video Controls Overlay */}
          <div className="lg:col-span-4 flex flex-col items-end justify-end mt-4 lg:mt-0">
            <div className="flex items-center gap-2.5 p-2 rounded-2xl bg-zinc-950/70 backdrop-blur-xl border border-zinc-800/80 shadow-2xl">
              <button
                onClick={togglePlay}
                title={isPlaying ? "Pause Video" : "Play Video"}
                className="p-2.5 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-700/70 text-zinc-300 hover:text-white transition cursor-pointer"
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
              </button>

              <button
                onClick={toggleMute}
                title={isMuted ? "Unmute Video Audio" : "Mute Video Audio"}
                className="p-2.5 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-700/70 text-zinc-300 hover:text-white transition cursor-pointer"
              >
                {isMuted ? <VolumeX className="w-4 h-4 text-zinc-400" /> : <Volume2 className="w-4 h-4 text-[#FF2020]" />}
              </button>

              <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider px-2">
                4K CINEMATIC
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* Discreet Animated Scroll Down Indicator */}
      <button
        onClick={onExploreClick}
        aria-label="Scroll to explore"
        className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 text-zinc-400 hover:text-zinc-200 transition-colors cursor-pointer"
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-zinc-400">
          EXPLORE
        </span>
        <ChevronDown className="w-4 h-4 animate-bounce text-zinc-400" />
      </button>

    </section>
  );
}
