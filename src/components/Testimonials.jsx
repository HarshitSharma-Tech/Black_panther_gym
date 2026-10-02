import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Marcus Vance',
      duration: 'Member for 1 Year',
      quote: 'The red lighting and industrial atmosphere create an environment where you can completely lock in. The equipment is well-maintained and the community is dedicated to real progress.',
    },
    {
      id: 2,
      name: 'Elena Rostova',
      duration: 'Member for 8 Months',
      quote: 'Stepping into Black Panther immediately sets the right mindset. Clean facilities, serious lifters, and personal trainers who genuinely understand strength mechanics.',
    },
    {
      id: 3,
      name: 'Damon Cole',
      duration: 'Member for 2 Years',
      quote: 'The best gym facility in the area. Excellent selection of dumbbells, benches, and machines with plenty of space to train without overcrowding.',
    },
  ];

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="relative py-24 sm:py-32 bg-[#050505] border-t border-zinc-900 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF2020]" />
              <span className="text-[10px] font-bold tracking-[0.2em] text-zinc-300 uppercase">
                TESTIMONIALS
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white font-heading">
              REAL PEOPLE. <span className="text-[#FF2020]">REAL PROGRESS.</span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              aria-label="Previous Testimonial"
              className="p-3 rounded-2xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:bg-[#FF2020] transition-all cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next Testimonial"
              className="p-3 rounded-2xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:bg-[#FF2020] transition-all cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Testimonials Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, idx) => (
            <div
              key={item.id}
              className={`rounded-3xl bg-zinc-900/40 border border-zinc-800 p-8 flex flex-col justify-between transition-all duration-300 ${
                currentIndex === idx ? 'border-red-500/40 bg-zinc-900/70' : 'opacity-80 hover:opacity-100'
              }`}
            >
              <Quote className="w-8 h-8 text-zinc-700 mb-6" />
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-8">
                "{item.quote}"
              </p>

              <div className="pt-6 border-t border-zinc-800/80">
                <h4 className="text-base font-bold text-white uppercase font-heading">
                  {item.name}
                </h4>
                <div className="text-xs text-zinc-400 mt-0.5">
                  {item.duration}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
