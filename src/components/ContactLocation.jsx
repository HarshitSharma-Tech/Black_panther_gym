import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare, Navigation, ExternalLink } from 'lucide-react';

export default function ContactLocation() {
  const contactInfo = {
    address: 'Gym Address Placeholder (Edit in settings)',
    phone: '+1 (555) 019-2834',
    email: 'contact@blackpantherfitness.com',
    hours: '6:00 AM – 10:00 PM (Monday – Sunday)',
    instagram: 'https://www.instagram.com/_blackpantherfitness/',
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-[#050505] border-t border-zinc-900 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF2020]" />
            <span className="text-[10px] font-bold tracking-[0.2em] text-zinc-300 uppercase">
              CONTACT & LOCATION
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white font-heading">
            GET IN <span className="text-[#FF2020]">TOUCH.</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2">
            Visit the facility or reach out directly to our front desk team.
          </p>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Contact Details */}
          <div className="lg:col-span-6 space-y-5">
            
            <div className="p-6 rounded-3xl bg-zinc-900/40 border border-zinc-800 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center shrink-0 text-[#FF2020]">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider block mb-1">
                  Address
                </span>
                <span className="text-sm font-semibold text-white">
                  {contactInfo.address}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-3xl bg-zinc-900/40 border border-zinc-800 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center shrink-0 text-[#FF2020]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider block mb-1">
                    Phone
                  </span>
                  <span className="text-sm font-semibold text-white">
                    {contactInfo.phone}
                  </span>
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-zinc-900/40 border border-zinc-800 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center shrink-0 text-[#FF2020]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider block mb-1">
                    Email
                  </span>
                  <span className="text-sm font-semibold text-white truncate max-w-[140px] block">
                    {contactInfo.email}
                  </span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-zinc-900/40 border border-zinc-800 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center shrink-0 text-[#FF2020]">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider block mb-1">
                  Opening Hours
                </span>
                <span className="text-sm font-semibold text-white">
                  {contactInfo.hours}
                </span>
              </div>
            </div>

            {/* WhatsApp Contact Action */}
            <a
              href="https://wa.me/?text=Hi%20Black%20Panther%20Fitness,%20I%20would%20like%20to%20enquire%20about%20memberships."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 rounded-2xl bg-[#25D366] hover:bg-[#1ebd5a] text-black font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2.5 transition-all shadow-[0_0_20px_rgba(37,211,102,0.2)]"
            >
              <MessageSquare className="w-4 h-4 fill-black" />
              <span>CHAT ON WHATSAPP</span>
            </a>

          </div>

          {/* Right Column: Location Map Card */}
          <div className="lg:col-span-6 space-y-4">
            
            <div className="relative rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-950 h-72 sm:h-80 shadow-xl group">
              <img
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1000&q=80"
                alt="Gym Location Map Preview"
                className="w-full h-full object-cover filter brightness-50"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-[#FF2020] flex items-center justify-center text-white shadow-[0_0_20px_#FF2020]">
                  <MapPin className="w-5 h-5 fill-white" />
                </div>
                <div className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-zinc-700 text-[10px] font-bold text-white uppercase tracking-wider mt-2">
                  BLACK PANTHER GYM
                </div>
              </div>

              <div className="absolute bottom-4 right-4">
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent('Black Panther Fitness')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-zinc-900/90 hover:bg-[#FF2020] text-white border border-zinc-700 hover:border-transparent text-xs font-bold uppercase tracking-wider flex items-center gap-2 backdrop-blur-md transition-all"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>GET DIRECTIONS</span>
                </a>
              </div>
            </div>

            {/* Official Instagram Card */}
            <a
              href="https://www.instagram.com/_blackpantherfitness/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-red-500/40 flex items-center justify-between transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-[#FF2020]">
                  <ExternalLink className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white group-hover:text-red-400 transition-colors">
                    Follow @_blackpantherfitness on Instagram
                  </div>
                  <div className="text-[11px] text-zinc-400">
                    Latest training clips, gym updates & member highlights
                  </div>
                </div>
              </div>
              <span className="text-xs text-red-400 font-semibold uppercase tracking-wider">Follow →</span>
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}
