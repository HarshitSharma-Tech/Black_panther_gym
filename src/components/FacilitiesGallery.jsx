import React, { useState } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight, Layers } from 'lucide-react';

export default function FacilitiesGallery() {
  const [activeTab, setActiveTab] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const galleryItems = [
    {
      id: 1,
      title: 'Main Workout Floor & Red LED Strips',
      category: 'floor',
      categoryLabel: 'Main Floor',
      image: '/images/gym-interior-lighting.jpg',
      specs: 'Linear Red Ceiling LED Strips • Shock-Absorbing Rubber & Turf Floor',
      description: 'The iconic view of the main training floor bathed in focused crimson luminescence and modern selectorized machinery.',
    },
    {
      id: 2,
      title: 'Cardio & Conditioning Spin Zone',
      category: 'cardio',
      categoryLabel: 'Cardio',
      image: '/images/gym-cardio-zone.jpg',
      specs: 'Power Life Magnetic Spin Bikes • Olympic Plate Hubs',
      description: 'Dedicated cardiovascular runway with magnetic resistance spin bikes, plate loaded squat hubs, and full-length mirrors.',
    },
    {
      id: 3,
      title: 'Dumbbell & Free-Weight Area',
      category: 'weights',
      categoryLabel: 'Free Weights',
      image: '/images/gym-dumbbell-free-weights.jpg',
      specs: 'Precision Dumbbells • Heavy-Duty Incline & Flat Benches',
      description: 'Extensive multi-tier dumbbell racks paired with heavy-duty commercial benches for upper-body isolation and compound pressing.',
    },
    {
      id: 4,
      title: 'Power Rack & Barbell Hub',
      category: 'strength',
      categoryLabel: 'Strength',
      image: '/images/gym-squat-strength-rack.jpg',
      specs: 'Cable Stacks • Preacher Bench • Steel Safety Spotters',
      description: 'Heavy-duty cable stations, isolation arm benches, and barbell lifting stations with red neon accent perimeter.',
    },
    {
      id: 5,
      title: 'Arm Blaster & Cable Crossover Bay',
      category: 'strength',
      categoryLabel: 'Strength',
      image: '/images/gym-cable-bench-area.jpg',
      specs: 'Dual Adjustable Pulleys • EZ-Curl Bars • Ergonomic Seated Benches',
      description: 'Close-up perspective of the specialized bicep and tricep isolation equipment under the gym’s dark aesthetic.',
    },
  ];

  const categories = [
    { id: 'all', label: 'ALL ZONES' },
    { id: 'weights', label: 'FREE WEIGHTS' },
    { id: 'strength', label: 'STRENGTH MACHINES' },
    { id: 'cardio', label: 'CARDIO & FLOOR' },
  ];

  const filteredItems = activeTab === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeTab || (activeTab === 'cardio' && item.category === 'floor'));

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const nextImage = () => setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
  const prevImage = () => setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);

  return (
    <section id="facilities" className="relative py-24 sm:py-32 bg-[#050505] border-t border-zinc-900">
      
      {/* Subtle Ambient Red Glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#FF2020]/6 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF2020]" />
              <span className="text-[10px] font-bold tracking-[0.2em] text-zinc-300 uppercase">
                REAL GYM PHOTOGRAPHY
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight font-heading">
              BUILT FOR <span className="text-[#FF2020]">EVERY REP.</span>
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-xl">
              Explore the space, equipment and atmosphere that power your fitness journey.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-2xl bg-zinc-900/90 border border-zinc-800 backdrop-blur-md">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeTab === cat.id
                    ? 'bg-[#FF2020] text-white shadow-[0_0_15px_rgba(255,32,32,0.3)]'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {filteredItems.map((item, index) => {
            const colSpan = index === 0 ? 'md:col-span-8' : index === 1 ? 'md:col-span-4' : 'md:col-span-4';
            const height = index === 0 ? 'h-[420px]' : index === 1 ? 'h-[420px]' : 'h-[340px]';

            return (
              <div
                key={item.id}
                onClick={() => openLightbox(index)}
                className={`${colSpan} relative rounded-3xl overflow-hidden border border-zinc-800/80 bg-zinc-950 group cursor-pointer shadow-xl transition-all duration-500 hover:border-red-500/40`}
              >
                <div className={`w-full ${height} overflow-hidden relative`}>
                  
                  {/* Real Gym Photo */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Dark Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                  {/* Category Badge & Enlarge Button */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-zinc-800 text-[10px] font-bold uppercase tracking-wider text-red-400">
                      {item.categoryLabel}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-zinc-700 flex items-center justify-center text-zinc-300 group-hover:text-white group-hover:border-red-500 transition-colors">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Bottom Text Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                    <h3 className="text-lg sm:text-xl font-bold text-white uppercase tracking-tight mb-1 font-heading group-hover:text-red-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-zinc-400 line-clamp-1">
                      {item.specs}
                    </p>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-8">
          
          <button
            onClick={closeLightbox}
            aria-label="Close Lightbox"
            className="absolute top-6 right-6 p-3 rounded-full bg-zinc-900 border border-zinc-700 text-zinc-300 hover:text-white hover:border-red-500 transition z-50 cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={prevImage}
            aria-label="Previous Image"
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3.5 rounded-full bg-zinc-900 border border-zinc-700 text-zinc-200 hover:text-white hover:bg-[#FF2020] transition z-50 cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextImage}
            aria-label="Next Image"
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3.5 rounded-full bg-zinc-900 border border-zinc-700 text-zinc-200 hover:text-white hover:bg-[#FF2020] transition z-50 cursor-pointer"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="max-w-4xl w-full flex flex-col items-center">
            <div className="relative rounded-3xl overflow-hidden border border-zinc-800 max-h-[70vh] w-full flex items-center justify-center bg-zinc-950">
              <img
                src={filteredItems[lightboxIndex]?.image}
                alt={filteredItems[lightboxIndex]?.title}
                className="max-h-[70vh] w-auto max-w-full object-contain"
              />
            </div>

            <div className="mt-6 text-center max-w-2xl">
              <div className="text-[10px] font-bold text-red-400 uppercase tracking-widest mb-1">
                {filteredItems[lightboxIndex]?.categoryLabel} • {lightboxIndex + 1} OF {filteredItems.length}
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-white uppercase font-heading">
                {filteredItems[lightboxIndex]?.title}
              </h4>
              <p className="text-xs sm:text-sm text-zinc-300 mt-1.5">
                {filteredItems[lightboxIndex]?.description}
              </p>
            </div>
          </div>

        </div>
      )}

    </section>
  );
}
