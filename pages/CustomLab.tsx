
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Palette, Share2, Send, Download, Cpu } from 'lucide-react';

const CustomLab: React.FC = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-16 items-start">
        <div className="lg:w-1/2">
          <span className="text-[#00d4ff] text-[10px] font-bold tracking-[0.3em] uppercase block mb-4">Experimental</span>
          <h1 className="font-syncopate text-5xl font-bold mb-8 leading-tight">CUSTOM <br /><span className="text-[#ff0055]">DESIGN LAB</span></h1>
          <p className="text-gray-300 text-lg mb-12 font-light leading-relaxed">
            Unleash your team's spirit. Our Custom Lab uses AI-assisted layout generation and high-precision sublimation printing to turn your vision into professional-grade reality.
          </p>

          <div className="space-y-6">
            {[
              { id: 1, title: 'Vision Discovery', icon: <Palette size={20} />, desc: 'Tell us about your team colors, mascots, and general vibe.' },
              { id: 2, title: 'Concept Render', icon: <Cpu size={20} />, desc: 'Our designers generate 3 distinct concepts within 48 hours.' },
              { id: 3, title: 'Refine & Proof', icon: <Share2 size={20} />, desc: 'Collaborate with us in real-time to tweak patterns and sizing.' }
            ].map((s) => (
              <div 
                key={s.id}
                onClick={() => setStep(s.id)}
                className={`p-6 rounded-2xl border transition-all cursor-pointer ${
                  step === s.id ? 'bg-[#00d4ff]/10 border-[#00d4ff]' : 'bg-white/10 border-white/10 hover:border-white/30'
                }`}
              >
                <div className="flex gap-4 items-center">
                  <div className={`p-3 rounded-lg ${step === s.id ? 'bg-[#00d4ff] text-black' : 'bg-white/20 text-gray-200'}`}>
                    {s.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-white">{s.title}</h3>
                    <p className="text-sm text-gray-400">{s.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:w-1/2 w-full">
           <div className="glass-morphism p-8 md:p-12 rounded-[2rem] border border-[#ff0055]/30 relative overflow-hidden bg-white/5">
              <div className="absolute top-0 right-0 p-4">
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#ff0055] animate-pulse"></div>
                  <div className="w-2 h-2 rounded-full bg-[#00d4ff] animate-pulse delay-75"></div>
                </div>
              </div>

              <h2 className="font-syncopate text-2xl font-bold mb-8 text-white">SUBMIT BRIEF</h2>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-2">Team Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/20 rounded-xl px-6 py-4 focus:border-[#ff0055] outline-none transition-all text-white placeholder:text-gray-600" placeholder="The Obsidian Foxes" />
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-2">Primary Color</label>
                    <input type="color" className="w-full h-14 bg-white/5 border border-white/20 rounded-xl px-4 py-2 cursor-pointer" defaultValue="#ff0055" />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-2">Quantity Estimate</label>
                    <input type="number" className="w-full bg-white/5 border border-white/20 rounded-xl px-6 py-4 focus:border-[#ff0055] outline-none transition-all text-white placeholder:text-gray-600" placeholder="15" />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-2">Dream Vision</label>
                  <textarea rows={4} className="w-full bg-white/5 border border-white/20 rounded-xl px-6 py-4 focus:border-[#ff0055] outline-none transition-all resize-none text-white placeholder:text-gray-600" placeholder="Describe the energy of your brand..." />
                </div>

                <button className="w-full py-5 bg-gradient-to-r from-[#00d4ff] to-[#ff0055] rounded-xl font-bold uppercase tracking-widest text-black flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_10px_40px_rgba(255,0,85,0.4)] border border-white/10">
                  Initiate Project <Send size={18} />
                </button>
              </form>
           </div>
        </div>
      </div>
    </div>
  );
};

export default CustomLab;