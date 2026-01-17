import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, Share2, Send, Cpu, Layers, Ruler, CheckCircle2, Zap, Shield, Target, Activity } from 'lucide-react';

const CustomLab: React.FC = () => {
  const [baseGarment, setBaseGarment] = useState('Jersey');
  const [fabric, setFabric] = useState('Aero-Mesh');
  const [pattern, setPattern] = useState('Solid');
  const [sizes, setSizes] = useState({ S: 0, M: 0, L: 0, XL: 0, XXL: 0 });

  const totalUnits = Object.values(sizes).reduce((a: number, b: number) => a + b, 0);

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen w-full max-w-screen-2xl mx-auto bg-[#050505]">
      <div className="mb-20">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-[2px] bg-[#FF4500]"></div>
          <span className="text-[#FF4500] font-syncopate text-xs font-black tracking-[0.4em] uppercase italic">EXPERIMENTAL_LAB_v3.0</span>
        </div>
        <h1 className="font-syncopate text-4xl lg:text-7xl font-bold mb-8 uppercase italic tracking-tighter leading-none text-white">
          CUSTOMIZE YOUR <br /> <span className="text-white/20">BATTLE READY</span> GEAR
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-8 space-y-12">
          <section className="glass-morphism p-10 rounded-[2.5rem] border-white/5">
             <div className="flex items-center gap-4 mb-10">
                <Layers className="text-[#FF4500]" size={24} />
                <h3 className="font-syncopate text-lg font-black uppercase tracking-widest italic">01. BASE GARMENT</h3>
             </div>
             <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {['Jersey', 'Shorts', 'Jacket'].map(item => (
                  <button key={item} onClick={() => setBaseGarment(item)} className={`p-8 rounded-2xl border transition-all text-left ${baseGarment === item ? 'border-[#FF4500] bg-[#FF4500]/5' : 'border-white/5 bg-white/5'}`}>
                    <span className="font-syncopate font-bold text-lg uppercase italic text-white">{item}</span>
                  </button>
                ))}
             </div>
          </section>

          <section className="glass-morphism p-10 rounded-[2.5rem] border-white/5">
             <div className="flex items-center gap-4 mb-10">
                <Cpu className="text-white" size={24} />
                <h3 className="font-syncopate text-lg font-black uppercase tracking-widest italic">02. PERFORMANCE FABRIC</h3>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {['Aero-Mesh', 'Compression Pro', 'Thermal Shield'].map(f => (
                  <button key={f} onClick={() => setFabric(f)} className={`p-8 rounded-2xl border transition-all text-left ${fabric === f ? 'border-[#FF4500] bg-[#FF4500]/5 text-white' : 'border-white/5 bg-white/5 text-gray-600'}`}>
                    <h4 className="font-bold text-lg uppercase">{f}</h4>
                  </button>
                ))}
             </div>
          </section>
        </div>

        <div className="lg:col-span-4 sticky top-32">
          <div className="glass-morphism p-10 rounded-[3rem] border border-[#FF4500]/30 bg-black/40">
            <h2 className="font-syncopate text-xl font-bold mb-10 text-white italic uppercase tracking-tighter">PROJECT BRIEF</h2>
            <div className="space-y-6 mb-12">
               <div className="flex justify-between text-xs font-black italic text-gray-600 uppercase"><span>UNIT</span><span className="text-white">{baseGarment}</span></div>
               <div className="flex justify-between text-xs font-black italic text-gray-600 uppercase"><span>TECH</span><span className="text-white">{fabric}</span></div>
               <div className="flex justify-between text-xs font-black italic text-gray-600 uppercase pt-4 border-t border-white/5"><span>PAYLOAD</span><span className="text-[#FF4500] text-lg">{totalUnits}</span></div>
            </div>
            <button className="w-full py-6 bg-[#FF4500] text-white font-black uppercase tracking-[0.5em] rounded-2xl shadow-[0_20px_50px_rgba(255,69,0,0.35)] hover:brightness-110 transition-all">
              INITIATE_DEPLOYMENT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomLab;