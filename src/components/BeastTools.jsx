import React, { useState } from 'react';
import { Calculator, Flame, Dumbbell, Zap, Target, ArrowRight, Activity, Sparkles } from 'lucide-react';
import { soundFx } from '../utils/audio';

export default function BeastTools({ brandName = 'PATHE', onBookRecommendedPlan }) {
  const [activeTool, setActiveTool] = useState('oneRepMax'); // 'oneRepMax' or 'calorieFuel'

  // 1-REP MAX STATE
  const [weight, setWeight] = useState(100);
  const [reps, setReps] = useState(5);
  const [exercise, setExercise] = useState('Bench Press');

  // Calculate Epley formula 1RM = Weight * (1 + Reps / 30)
  const oneRepMax = Math.round(weight * (1 + reps / 30));

  // CALORIE / PROTEIN FUEL STATE
  const [bodyWeight, setBodyWeight] = useState(75);
  const [height, setHeight] = useState(178);
  const [age, setAge] = useState(26);
  const [activity, setActivity] = useState(1.55); // moderate exercise
  const [goal, setGoal] = useState('muscle'); // 'muscle', 'shred', 'maintain'

  // Mifflin-St Jeor Formula
  const bmr = 10 * bodyWeight + 6.25 * height - 5 * age + 5;
  const tdee = Math.round(bmr * activity);
  
  let targetCalories = tdee;
  if (goal === 'muscle') targetCalories = Math.round(tdee + 350);
  if (goal === 'shred') targetCalories = Math.round(tdee - 450);

  const targetProtein = Math.round(bodyWeight * 2.2); // ~2.2g per kg

  return (
    <section id="tools" className="relative py-24 sm:py-32 bg-[#050505] border-t border-zinc-900">
      
      {/* Red ambient light */}
      <div className="absolute top-1/2 left-10 w-80 h-80 bg-[#FF2020]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-red-500/30 mb-4 shadow-[0_0_15px_rgba(255,32,32,0.15)]">
            <Calculator className="w-3.5 h-3.5 text-[#FF2020]" />
            <span className="text-xs font-bold tracking-[0.2em] text-red-400 uppercase">
              INTERACTIVE PERFORMANCE TOOLS
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
            SCIENTIFIC <span className="text-gradient-red">BEAST METRICS.</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-3">
            Calculate your estimated 1-Rep Maximum strength capacity or dial in your daily caloric and macronutrient fuel requirements.
          </p>

          {/* Tool Switcher Tabs */}
          <div className="mt-8 inline-flex p-1.5 rounded-2xl bg-zinc-900 border border-zinc-800">
            <button
              onClick={() => {
                soundFx.playClick();
                setActiveTool('oneRepMax');
              }}
              className={`px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 ${
                activeTool === 'oneRepMax'
                  ? 'bg-[#FF2020] text-white shadow-[0_0_15px_rgba(255,32,32,0.4)]'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Dumbbell className="w-4 h-4" />
              <span>1-REP MAX CALCULATOR</span>
            </button>
            <button
              onClick={() => {
                soundFx.playClick();
                setActiveTool('calorieFuel');
              }}
              className={`px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 ${
                activeTool === 'calorieFuel'
                  ? 'bg-[#FF2020] text-white shadow-[0_0_15px_rgba(255,32,32,0.4)]'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Flame className="w-4 h-4" />
              <span>MACRO & CALORIE FUEL</span>
            </button>
          </div>

        </div>

        {/* TOOL 1: 1-REP MAX CALCULATOR */}
        {activeTool === 'oneRepMax' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-zinc-900/40 border border-zinc-800 rounded-3xl p-6 sm:p-10 backdrop-blur-xl">
            
            {/* Input Controls */}
            <div className="lg:col-span-6 space-y-6">
              
              <div>
                <label className="text-xs font-bold text-zinc-300 uppercase tracking-wider mb-2 block">
                  Select Compound Lift
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['Bench Press', 'Back Squat', 'Deadlift'].map((lift) => (
                    <button
                      key={lift}
                      onClick={() => {
                        soundFx.playClick();
                        setExercise(lift);
                      }}
                      className={`py-2.5 px-3 rounded-xl text-xs font-bold uppercase tracking-wider transition border cursor-pointer ${
                        exercise === lift
                          ? 'bg-zinc-800 border-[#FF2020] text-white shadow-[0_0_10px_rgba(255,32,32,0.3)]'
                          : 'bg-zinc-950 border-zinc-800 text-zinc-400 hover:text-white'
                      }`}
                    >
                      {lift}
                    </button>
                  ))}
                </div>
              </div>

              {/* Lifted Weight Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold text-zinc-300 uppercase tracking-wider">
                    Weight Lifted (KG)
                  </span>
                  <span className="text-lg font-black text-white font-mono bg-zinc-950 px-3 py-1 rounded-lg border border-zinc-800">
                    {weight} KG
                  </span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="300"
                  step="2.5"
                  value={weight}
                  onChange={(e) => setWeight(parseFloat(e.target.value))}
                  className="w-full h-2 bg-zinc-950 rounded-lg appearance-none cursor-pointer accent-[#FF2020]"
                />
              </div>

              {/* Reps Performed Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold text-zinc-300 uppercase tracking-wider">
                    Repetitions Completed
                  </span>
                  <span className="text-lg font-black text-white font-mono bg-zinc-950 px-3 py-1 rounded-lg border border-zinc-800">
                    {reps} REPS
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="15"
                  value={reps}
                  onChange={(e) => setReps(parseInt(e.target.value))}
                  className="w-full h-2 bg-zinc-950 rounded-lg appearance-none cursor-pointer accent-[#FF2020]"
                />
              </div>

            </div>

            {/* Calculated 1RM & Percentage Training Chart */}
            <div className="lg:col-span-6 bg-zinc-950/80 border border-zinc-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
              
              <div className="text-center pb-6 border-b border-zinc-800">
                <span className="text-xs font-bold text-red-400 uppercase tracking-widest">
                  ESTIMATED 1-REP MAX ({exercise})
                </span>
                <div className="text-5xl sm:text-6xl font-black text-white font-bebas tracking-wider my-2">
                  {oneRepMax} <span className="text-[#FF2020] text-3xl">KG</span>
                </div>
                <p className="text-xs text-zinc-400">
                  Calculated using Epley scientific powerlifting formula
                </p>
              </div>

              {/* Training Percentages Matrix */}
              <div className="grid grid-cols-4 gap-2 pt-6 text-center">
                <div className="p-3 bg-zinc-900 rounded-xl border border-zinc-800">
                  <div className="text-[10px] text-zinc-400 font-bold uppercase">90% (Power)</div>
                  <div className="text-sm font-bold text-white mt-1">{Math.round(oneRepMax * 0.9)} KG</div>
                </div>
                <div className="p-3 bg-zinc-900 rounded-xl border border-zinc-800">
                  <div className="text-[10px] text-zinc-400 font-bold uppercase">80% (Strength)</div>
                  <div className="text-sm font-bold text-white mt-1">{Math.round(oneRepMax * 0.8)} KG</div>
                </div>
                <div className="p-3 bg-zinc-900 rounded-xl border border-zinc-800">
                  <div className="text-[10px] text-zinc-400 font-bold uppercase">70% (Hypertrophy)</div>
                  <div className="text-sm font-bold text-white mt-1">{Math.round(oneRepMax * 0.7)} KG</div>
                </div>
                <div className="p-3 bg-zinc-900 rounded-xl border border-zinc-800">
                  <div className="text-[10px] text-zinc-400 font-bold uppercase">60% (Speed)</div>
                  <div className="text-sm font-bold text-white mt-1">{Math.round(oneRepMax * 0.6)} KG</div>
                </div>
              </div>

              <button
                onClick={() => {
                  soundFx.playRoar();
                  onBookRecommendedPlan && onBookRecommendedPlan(`Heavy Strength (${exercise} focus)`);
                }}
                className="mt-6 w-full py-3.5 rounded-xl bg-[#FF2020] hover:bg-[#e01a1a] text-white font-bold text-xs uppercase tracking-wider transition shadow-[0_0_20px_rgba(255,32,32,0.4)] flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>APPLY THIS METRIC TO MY FREE TRIAL</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>

          </div>
        )}

        {/* TOOL 2: CALORIC & FUEL CALCULATOR */}
        {activeTool === 'calorieFuel' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-zinc-900/40 border border-zinc-800 rounded-3xl p-6 sm:p-10 backdrop-blur-xl">
            
            {/* Input Controls */}
            <div className="lg:col-span-6 space-y-5">
              
              {/* Goal Selector */}
              <div>
                <label className="text-xs font-bold text-zinc-300 uppercase tracking-wider mb-2 block">
                  Primary Transformation Mission
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'muscle', label: 'Beast Bulk (+Muscle)' },
                    { id: 'shred', label: 'Lean Shred (-Fat)' },
                    { id: 'maintain', label: 'Maintain & Tone' },
                  ].map((g) => (
                    <button
                      key={g.id}
                      onClick={() => {
                        soundFx.playClick();
                        setGoal(g.id);
                      }}
                      className={`py-2.5 px-3 rounded-xl text-xs font-bold uppercase tracking-wider transition border cursor-pointer ${
                        goal === g.id
                          ? 'bg-zinc-800 border-[#FF2020] text-white shadow-[0_0_10px_rgba(255,32,32,0.3)]'
                          : 'bg-zinc-950 border-zinc-800 text-zinc-400 hover:text-white'
                      }`}
                    >
                      {g.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Weight Slider */}
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs font-bold text-zinc-300 uppercase tracking-wider">
                    Body Weight (KG)
                  </span>
                  <span className="text-sm font-bold text-white font-mono bg-zinc-950 px-2.5 py-0.5 rounded border border-zinc-800">
                    {bodyWeight} KG
                  </span>
                </div>
                <input
                  type="range"
                  min="40"
                  max="150"
                  value={bodyWeight}
                  onChange={(e) => setBodyWeight(parseFloat(e.target.value))}
                  className="w-full h-2 bg-zinc-950 rounded-lg appearance-none cursor-pointer accent-[#FF2020]"
                />
              </div>

              {/* Height Slider */}
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs font-bold text-zinc-300 uppercase tracking-wider">
                    Height (CM)
                  </span>
                  <span className="text-sm font-bold text-white font-mono bg-zinc-950 px-2.5 py-0.5 rounded border border-zinc-800">
                    {height} CM
                  </span>
                </div>
                <input
                  type="range"
                  min="140"
                  max="220"
                  value={height}
                  onChange={(e) => setHeight(parseFloat(e.target.value))}
                  className="w-full h-2 bg-zinc-950 rounded-lg appearance-none cursor-pointer accent-[#FF2020]"
                />
              </div>

              {/* Age Slider */}
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs font-bold text-zinc-300 uppercase tracking-wider">
                    Age (Years)
                  </span>
                  <span className="text-sm font-bold text-white font-mono bg-zinc-950 px-2.5 py-0.5 rounded border border-zinc-800">
                    {age} YRS
                  </span>
                </div>
                <input
                  type="range"
                  min="16"
                  max="70"
                  value={age}
                  onChange={(e) => setAge(parseInt(e.target.value))}
                  className="w-full h-2 bg-zinc-950 rounded-lg appearance-none cursor-pointer accent-[#FF2020]"
                />
              </div>

            </div>

            {/* Results Display Card */}
            <div className="lg:col-span-6 bg-zinc-950/80 border border-zinc-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
              
              <div className="text-center pb-6 border-b border-zinc-800">
                <span className="text-xs font-bold text-red-400 uppercase tracking-widest">
                  RECOMMENDED DAILY ENERGY INTAKE
                </span>
                <div className="text-5xl sm:text-6xl font-black text-white font-bebas tracking-wider my-2">
                  {targetCalories} <span className="text-[#FF2020] text-3xl">KCAL</span>
                </div>
                <p className="text-xs text-zinc-400">
                  Maintenance TDEE: {tdee} kcal • Basal Metabolic Rate: {Math.round(bmr)} kcal
                </p>
              </div>

              {/* Macro Target Breakdown */}
              <div className="grid grid-cols-3 gap-3 pt-6 text-center">
                <div className="p-3 bg-zinc-900 rounded-xl border border-zinc-800">
                  <div className="text-[10px] text-red-400 font-bold uppercase">Daily Protein</div>
                  <div className="text-base font-black text-white mt-1">{targetProtein}g</div>
                </div>
                <div className="p-3 bg-zinc-900 rounded-xl border border-zinc-800">
                  <div className="text-[10px] text-zinc-400 font-bold uppercase">Daily Carbs</div>
                  <div className="text-base font-black text-white mt-1">{Math.round((targetCalories * 0.45) / 4)}g</div>
                </div>
                <div className="p-3 bg-zinc-900 rounded-xl border border-zinc-800">
                  <div className="text-[10px] text-zinc-400 font-bold uppercase">Healthy Fats</div>
                  <div className="text-base font-black text-white mt-1">{Math.round((targetCalories * 0.25) / 9)}g</div>
                </div>
              </div>

              <button
                onClick={() => {
                  soundFx.playRoar();
                  onBookRecommendedPlan && onBookRecommendedPlan(`Nutrition & Training Protocol (${goal})`);
                }}
                className="mt-6 w-full py-3.5 rounded-xl bg-[#FF2020] hover:bg-[#e01a1a] text-white font-bold text-xs uppercase tracking-wider transition shadow-[0_0_20px_rgba(255,32,32,0.4)] flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>GET COMPLIMENTARY NUTRITION CONSULT</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>

          </div>
        )}

      </div>
    </section>
  );
}
