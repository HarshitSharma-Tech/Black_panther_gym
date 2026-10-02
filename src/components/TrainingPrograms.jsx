import React, { useState } from 'react';
import { ArrowRight, X, Check, Activity } from 'lucide-react';

export default function TrainingPrograms({ onEnquireProgram }) {
  const [selectedProgram, setSelectedProgram] = useState(null);

  const programs = [
    {
      id: 'strength',
      title: 'Strength Training',
      tagline: 'Build raw strength and develop muscle with structured compound workouts.',
      description: 'Focused resistance training incorporating barbell lifts, dumbbells, and heavy machine isolation to build bone density, power, and muscle hypertrophy.',
      image: '/images/gym-dumbbell-free-weights.jpg',
      points: ['Progressive overload principles', 'Barbell & dumbbell compound lifting', 'Hypertrophy & strength periodization'],
    },
    {
      id: 'personal',
      title: 'Personal Training',
      tagline: 'Individual guidance and customized fitness programs with master trainers.',
      description: 'One-on-one coaching designed around your specific biomechanics, goals, and schedule to ensure rapid progress with proper form and safety.',
      image: '/images/gym-squat-strength-rack.jpg',
      points: ['Tailored workout programming', 'Real-time biomechanics feedback', 'Goal tracking and accountability'],
    },
    {
      id: 'weight',
      title: 'Weight Management',
      tagline: 'Fitness routines designed to support individual body composition goals.',
      description: 'High-efficiency training combining resistance supersets and conditioning to accelerate fat loss, improve metabolic rate, and build lean definition.',
      image: '/images/gym-cardio-zone.jpg',
      points: ['Metabolic resistance training', 'Calorie-burning circuit workouts', 'Body composition optimization'],
    },
    {
      id: 'functional',
      title: 'Functional Fitness',
      tagline: 'Improve mobility, endurance, agility and everyday athletic strength.',
      description: 'Dynamic movement training focusing on multi-planar exercises, core stability, joint health, and explosive functional power.',
      image: '/images/gym-interior-lighting.jpg',
      points: ['Athletic mobility and flexibility', 'Core stabilization drills', 'Injury prevention protocols'],
    },
    {
      id: 'cardio',
      title: 'Cardio Training',
      tagline: 'Improve cardiovascular endurance and overall conditioning on modern spin bikes.',
      description: 'Targeted aerobic and anaerobic stamina conditioning utilizing magnetic resistance spin bikes, sprint intervals, and tempo cardio.',
      image: '/images/gym-cable-bench-area.jpg',
      points: ['Magnetic spin bike intervals', 'Aerobic capacity and VO2 max', 'Heart health and active recovery'],
    },
  ];

  return (
    <section id="training" className="relative py-24 sm:py-32 bg-[#050505] border-t border-zinc-900">
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF2020]" />
            <span className="text-[10px] font-bold tracking-[0.2em] text-zinc-300 uppercase">
              TRAINING PROGRAMS
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white font-heading">
            TRAIN WITH <span className="text-[#FF2020]">PURPOSE.</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2">
            Explore our core training programs designed to support every phase of your fitness journey.
          </p>
        </div>

        {/* Editorial Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((prog) => (
            <div
              key={prog.id}
              className="group relative rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:bg-zinc-900/80 transition-all duration-300 flex flex-col justify-between p-6 sm:p-7"
            >
              {/* Image Thumbnail Header */}
              <div className="relative h-44 rounded-2xl overflow-hidden mb-6 border border-zinc-800">
                <img
                  src={prog.image}
                  alt={prog.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-white uppercase font-heading mb-2 group-hover:text-red-400 transition-colors">
                  {prog.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                  {prog.tagline}
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between">
                <button
                  onClick={() => setSelectedProgram(prog)}
                  className="text-xs font-bold text-white group-hover:text-[#FF2020] flex items-center gap-1.5 uppercase tracking-wider transition-colors cursor-pointer"
                >
                  <span>LEARN MORE</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}

          {/* 6th Callout Panel */}
          <div className="relative rounded-3xl overflow-hidden border border-red-500/20 bg-gradient-to-br from-zinc-950 via-zinc-900 to-[#FF2020]/10 p-7 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-bold text-red-400 uppercase tracking-widest block mb-2">
                PERSONALIZED APPROACH
              </span>
              <h3 className="text-2xl font-black text-white uppercase font-heading mb-3">
                CUSTOM FITNESS ROADMAP
              </h3>
              <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-6">
                Consult with our coaching staff to build a customized routine tailored specifically to your goals and current fitness level.
              </p>
            </div>

            <button
              onClick={() => onEnquireProgram && onEnquireProgram('Custom Consultation')}
              className="w-full py-3.5 rounded-xl bg-[#FF2020] hover:bg-[#e01a1a] text-white font-bold text-xs uppercase tracking-wider transition shadow-[0_0_20px_rgba(255,32,32,0.3)] flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>ENQUIRE ABOUT TRAINING</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>

      {/* Program Detail Modal */}
      {selectedProgram && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6">
          <div className="relative max-w-xl w-full bg-zinc-950 border border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-2xl">
            
            <button
              onClick={() => setSelectedProgram(null)}
              aria-label="Close details"
              className="absolute top-5 right-5 p-2 rounded-full bg-zinc-900 border border-zinc-700 text-zinc-400 hover:text-white transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-[10px] font-bold text-red-400 uppercase tracking-widest block mb-1">
              PROGRAM OVERVIEW
            </span>
            <h3 className="text-2xl font-bold text-white uppercase font-heading mb-3">
              {selectedProgram.title}
            </h3>

            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-6">
              {selectedProgram.description}
            </p>

            <div className="space-y-2.5 mb-8">
              <div className="text-xs font-bold text-white uppercase tracking-wider mb-2">
                CORE HIGHLIGHTS:
              </div>
              {selectedProgram.points.map((p, i) => (
                <div key={i} className="flex items-center gap-2.5 text-xs text-zinc-300">
                  <Check className="w-4 h-4 text-[#FF2020] shrink-0" />
                  <span>{p}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  setSelectedProgram(null);
                  onEnquireProgram && onEnquireProgram(selectedProgram.title);
                }}
                className="flex-1 py-3.5 rounded-xl bg-[#FF2020] hover:bg-[#e01a1a] text-white font-bold text-xs uppercase tracking-wider transition shadow-[0_0_20px_rgba(255,32,32,0.4)] cursor-pointer"
              >
                ENQUIRE ABOUT THIS PROGRAM
              </button>
              <button
                onClick={() => setSelectedProgram(null)}
                className="px-5 py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-xs font-bold text-zinc-300 uppercase tracking-wider transition cursor-pointer"
              >
                CLOSE
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
