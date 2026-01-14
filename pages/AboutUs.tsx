
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Target, Layers } from 'lucide-react';
import Logo from '../components/Logo';

const AboutUs: React.FC = () => {
  return (
    <div className="pt-32 md:pt-48 pb-24 px-6 min-h-screen w-full max-w-7xl mx-auto overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-24"
      >
        <span className="text-[#F54A02] text-xs font-black tracking-[0.5em] uppercase mb-6 block italic">Beyond the Visible</span>
        <h1 className="font-syncopate text-5xl md:text-[10rem] font-black mb-8 leading-none tracking-tighter uppercase">
          THE <span className="text-white">DNA</span>
        </h1>
        <p className="text-gray-500 text-sm md:text-base uppercase tracking-[0.4em] max-w-xl mx-auto font-black leading-loose">
          A SYNERGY OF HIGH-FASHION STEALTH AND UNCOMPROMISING ATHLETIC OUTPUT.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center mb-32">
        <div className="relative group">
          <div className="absolute -inset-4 bg-[#F54A02]/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2000&auto=format&fit=crop" 
            alt="Training" 
            className="rounded-[3rem] border border-white/5 grayscale hover:grayscale-0 transition-all duration-700 opacity-60 group-hover:opacity-90 scale-105"
          />
          <div className="absolute bottom-10 right-10 p-6 glass-morphism rounded-2xl border-white/10 hidden md:block">
            <Logo className="w-16 h-16" />
          </div>
        </div>
        <div className="space-y-10">
          <h2 className="font-syncopate text-3xl md:text-5xl font-bold uppercase leading-tight">THE ARCHITECTURE OF <span className="text-[#F54A02]">STEALTH</span></h2>
          <p className="text-gray-400 text-lg font-light leading-relaxed">
            Founded in the underground racing and high-performance cross-training scenes of the 2020s, Dark Fashion Sports was born from a singular frustration: traditional sports gear lacked character, while fashion gear lacked utility.
          </p>
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="text-[#F54A02]"><Layers size={32} /></div>
              <h4 className="font-bold uppercase tracking-widest text-sm italic">Multi-Layered Logic</h4>
              <p className="text-xs text-gray-500 leading-relaxed uppercase tracking-widest font-black">Fabrics that breath like skin and protect like armor.</p>
            </div>
            <div className="space-y-4">
              <div className="text-[#F54A02]"><Zap size={32} /></div>
              <h4 className="font-bold uppercase tracking-widest text-sm italic">Kinetic Energy</h4>
              <p className="text-xs text-gray-500 leading-relaxed uppercase tracking-widest font-black">Engineered to return energy with every strike.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 border-t border-white/5 text-center">
        <h3 className="font-syncopate text-2xl md:text-4xl font-black mb-16 uppercase tracking-widest italic text-gray-700">CORE DIRECTIVES</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { t: 'RESILIENCE', d: 'WE BUILD GEAR THAT OUTLASTS THE ATHLETE.', icon: <Shield className="text-[#F54A02] mx-auto mb-6" /> },
            { t: 'PRECISION', d: 'EVERY STITCH SERVES A PERFORMANCE METRIC.', icon: <Target className="text-[#F54A02] mx-auto mb-6" /> },
            { t: 'DREAM STATE', d: 'INSPIRING THE VISIONARY SPIRIT OF SPORT.', icon: <Logo className="mx-auto mb-6 w-12 h-12" /> }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="p-10 glass-morphism rounded-[2.5rem] border border-white/5"
            >
              {item.icon}
              <h4 className="font-syncopate text-xl font-bold mb-4">{item.t}</h4>
              <p className="text-[10px] text-gray-500 font-black tracking-[0.3em] leading-relaxed">{item.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
