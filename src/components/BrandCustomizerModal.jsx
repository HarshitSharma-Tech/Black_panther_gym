import React, { useState } from 'react';
import { X, Sparkles, Check, Flame } from 'lucide-react';
import { soundFx } from '../utils/audio';

export default function BrandCustomizerModal({ isOpen, onClose, currentBrand, onSaveBrand }) {
  const [tempBrand, setTempBrand] = useState(currentBrand);

  if (!isOpen) return null;

  const presets = ['PATHE', 'BAK FITNESS', 'IRON BEAST', 'APEX GYM'];

  const handleSave = (e) => {
    e.preventDefault();
    if (tempBrand.trim()) {
      soundFx.playRoar();
      onSaveBrand(tempBrand.trim());
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4">
      <div className="relative max-w-md w-full bg-zinc-950 border border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(255,32,32,0.3)]">
        
        {/* Close Button */}
        <button
          onClick={() => {
            soundFx.playClick();
            onClose();
          }}
          className="absolute top-5 right-5 p-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-red-500 transition cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-red-500/40 flex items-center justify-center text-[#FF2020]">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white uppercase font-heading">
              BRAND CUSTOMIZER
            </h3>
            <p className="text-xs text-zinc-400">
              Switch or customize the gym brand name in real time.
            </p>
          </div>
        </div>

        {/* Quick Presets */}
        <div className="mb-6">
          <label className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider mb-2 block">
            Quick Select Brand Presets:
          </label>
          <div className="grid grid-cols-2 gap-2">
            {presets.map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => {
                  soundFx.playClick();
                  setTempBrand(p);
                }}
                className={`py-2.5 px-3 rounded-xl text-xs font-bold uppercase tracking-wider transition border cursor-pointer ${
                  tempBrand === p
                    ? 'bg-[#FF2020] border-[#FF2020] text-white shadow-[0_0_12px_rgba(255,32,32,0.4)]'
                    : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white'
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        {/* Custom Input Form */}
        <form onSubmit={handleSave} className="space-y-4">
          <div>
            <label className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider mb-2 block">
              Or Enter Custom Brand Name:
            </label>
            <input
              type="text"
              value={tempBrand}
              onChange={(e) => setTempBrand(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-800 focus:border-[#FF2020] text-sm font-bold uppercase text-white px-4 py-3 rounded-xl focus:outline-none"
              placeholder="e.g. PATHE / BAK FITNESS"
            />
          </div>

          <div className="flex items-center gap-3 pt-2">
            <button
              type="submit"
              className="flex-1 py-3.5 rounded-xl bg-[#FF2020] hover:bg-[#e01a1a] text-white font-bold text-xs uppercase tracking-wider transition shadow-[0_0_20px_rgba(255,32,32,0.4)] flex items-center justify-center gap-2 cursor-pointer"
            >
              <Check className="w-4 h-4" />
              <span>APPLY BRAND NAME</span>
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}
