import React, { useState, useEffect } from 'react';
import { Menu, X, Flame, ArrowRight } from 'lucide-react';

export default function Navbar({ onJoinClick }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Training', href: '#training' },
    { name: 'Membership', href: '#membership' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#08080a]/95 backdrop-blur-xl border-b border-zinc-800/80 py-4 shadow-xl'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          
          {/* Brand Wordmark & Minimal Emblem */}
          <a
            href="#home"
            className="flex items-center gap-3 text-decoration-none group"
          >
            <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-700/80 flex items-center justify-center text-[#FF2020] group-hover:border-[#FF2020] transition-colors shadow-[0_0_12px_rgba(255,32,32,0.2)]">
              <Flame className="w-4 h-4 fill-[#FF2020]" />
            </div>

            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black tracking-tight uppercase text-white font-bebas">
                BLACK PANTHER
              </span>
              <span className="text-[8px] font-bold tracking-[0.28em] text-zinc-400 uppercase -mt-1 font-sans">
                FITNESS SANCTUARY
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-semibold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors relative py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#FF2020] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Action: Join Now Button */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={onJoinClick}
              className="px-5 py-2.5 rounded-xl bg-[#FF2020] hover:bg-[#e01a1a] text-white font-bold text-xs tracking-widest uppercase transition-all duration-300 shadow-[0_0_20px_rgba(255,32,32,0.3)] hover:shadow-[0_0_25px_rgba(255,32,32,0.5)] cursor-pointer flex items-center gap-2"
            >
              <span>JOIN NOW</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation"
            className="md:hidden p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden bg-black/95 backdrop-blur-2xl flex flex-col justify-between pt-28 pb-10 px-8">
          <div className="flex flex-col gap-5">
            <span className="text-[10px] font-bold text-red-500 uppercase tracking-widest border-b border-zinc-900 pb-2">
              MENU
            </span>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-bold font-heading text-zinc-300 hover:text-[#FF2020] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onJoinClick();
            }}
            className="w-full py-4 rounded-xl bg-[#FF2020] text-white font-bold text-xs uppercase tracking-widest shadow-[0_0_20px_rgba(255,32,32,0.4)] flex items-center justify-center gap-2"
          >
            <span>JOIN BLACK PANTHER</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </>
  );
}
