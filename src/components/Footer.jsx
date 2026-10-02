import React from 'react';
import { Flame, ArrowUp, Send, Share2, Globe, MessageCircle } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#050505] text-zinc-400 border-t border-zinc-900 pt-16 pb-12 overflow-hidden">
      
      {/* Subtle Top Red Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#FF2020]/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-zinc-900">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[#FF2020]">
                <Flame className="w-4 h-4 fill-[#FF2020]" />
              </div>
              <span className="text-2xl font-black tracking-tight text-white font-bebas uppercase">
                BLACK PANTHER
              </span>
            </div>
            
            <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
              A premium fitness sanctuary combining modern equipment, red ambient lighting, and an uncompromising atmosphere built for dedicated lifters.
            </p>

            {/* Official Instagram Link */}
            <div className="pt-2">
              <a
                href="https://www.instagram.com/_blackpantherfitness/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-red-500/40 text-xs font-semibold text-zinc-300 hover:text-white transition"
              >
                <Share2 className="w-3.5 h-3.5 text-[#FF2020]" />
                <span>Follow @_blackpantherfitness</span>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest font-heading mb-4">
              NAVIGATION
            </h4>
            {[
              { name: 'Home', href: '#home' },
              { name: 'About', href: '#about' },
              { name: 'Facilities', href: '#facilities' },
              { name: 'Training Programs', href: '#training' },
              { name: 'Membership Plans', href: '#membership' },
              { name: 'Contact & Location', href: '#contact' },
            ].map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="text-xs text-zinc-400 hover:text-white transition-colors block"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Contact Summary Column */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest font-heading mb-4">
              BLACK PANTHER FITNESS
            </h4>
            <p className="text-xs text-zinc-400">
              Operating Hours: 6:00 AM – 10:00 PM Daily
            </p>
            <p className="text-xs text-zinc-400">
              Email: contact@blackpantherfitness.com
            </p>
            <div className="pt-2">
              <a
                href="#freetrial"
                className="inline-block px-4 py-2.5 rounded-xl bg-[#FF2020] hover:bg-[#e01a1a] text-white font-bold text-[11px] uppercase tracking-wider transition"
              >
                BOOK FREE TRIAL
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <div>
            © {new Date().getFullYear()} BLACK PANTHER FITNESS. ALL RIGHTS RESERVED.
          </div>

          <div className="flex items-center gap-6">
            <a href="#home" className="hover:text-zinc-300 transition">Privacy Policy</a>
            <a href="#home" className="hover:text-zinc-300 transition">Terms of Service</a>
            
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-red-500 flex items-center justify-center text-zinc-300 hover:text-white transition cursor-pointer"
              title="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
