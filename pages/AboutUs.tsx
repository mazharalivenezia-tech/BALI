import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Target, Layers, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';

const AboutUs: React.FC = () => {
  return (
    <div className="pt-32 md:pt-48 pb-24 px-6 min-h-screen w-full max-w-7xl mx-auto overflow-hidden bg-[#050505]">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-24"
      >
        <span className="text-[#FF4500] text-[10px] font-black tracking-[0.6em] uppercase mb-6 block italic">BEYOND_THE_VISIBLE</span>
        <h1 className="font-syncopate text-5xl md:text-8xl font-black mb-8 leading-none tracking-tighter uppercase italic">
          THE <span className="text-[#FF4500]">DNA</span>
        </h1>
        <p className="text-gray-500 text-xs uppercase tracking-[0.4em] max-w-xl mx-auto font-black leading-loose italic">
          SYNERGY OF HIGH-FASHION STEALTH AND UNCOMPROMISING ATHLETIC OUTPUT.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-40">
        <div className="relative group">
          <div className="absolute -inset-4 bg-[#FF4500]/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2000&auto=format&fit=crop" 
            alt="Training" 
            className="rounded-[3rem] border border-white/5 grayscale hover:grayscale-0 transition-all duration-700 opacity-60 group-hover:opacity-90 scale-100 group-hover:scale-[1.02]"
          />
        </div>
        <div className="space-y-12">
          <h2 className="font-syncopate text-3xl md:text-5xl font-bold uppercase leading-tight italic">ARCHITECTURE OF <span className="text-[#FF4500]">STEALTH</span></h2>
          <p className="text-gray-400 text-lg font-light leading-relaxed italic uppercase tracking-widest text-xs font-bold">
            Founded in the underground racing and high-performance cross-training scenes, Dark Fashion Sports was born from a singular vision: gear must be both character-driven and elite-utility.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 glass-morphism rounded-3xl border-white/5 space-y-4">
              <div className="text-[#FF4500]"><Layers size={28} /></div>
              <h4 className="font-syncopate font-bold uppercase tracking-widest text-sm italic text-white">Multi-Layer Logic</h4>
              <p className="text-[10px] text-gray-500 leading-relaxed uppercase tracking-widest font-black italic">Fabrics that breath like skin and protect like armor.</p>
            </div>
            <div className="p-8 glass-morphism rounded-3xl border-white/5 space-y-4">
              <div className="text-[#FF4500]"><Zap size={28} /></div>
              <h4 className="font-syncopate font-bold uppercase tracking-widest text-sm italic text-white">Kinetic Flow</h4>
              <p className="text-[10px] text-gray-500 leading-relaxed uppercase tracking-widest font-black italic">Engineered to return energy with every strike.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-24 border-t border-white/5 text-center">
        <h3 className="font-syncopate text-xl md:text-3xl font-black mb-20 uppercase tracking-[0.4em] italic text-gray-800">CORE_DIRECTIVES</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { t: 'RESILIENCE', d: 'WE BUILD GEAR THAT OUTLASTS THE ATHLETE.', icon: <Shield className="text-[#FF4500] mx-auto mb-6" /> },
            { t: 'PRECISION', d: 'EVERY STITCH SERVES A PERFORMANCE METRIC.', icon: <Target className="text-[#FF4500] mx-auto mb-6" /> },
            { t: 'DREAM_STATE', d: 'INSPIRING THE VISIONARY SPIRIT OF SPORT.', icon: <Logo className="mx-auto mb-6 w-12 h-12" /> }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="p-12 glass-morphism rounded-[2.5rem] border border-white/5 text-center group"
            >
              {item.icon}
              <h4 className="font-syncopate text-xl font-bold mb-4 text-white group-hover:text-[#FF4500] transition-colors uppercase italic tracking-tighter">{item.t}</h4>
              <p className="text-[9px] text-gray-600 font-black tracking-[0.3em] leading-relaxed italic">{item.d}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-20 text-center">
         <Link to="/products" className="inline-flex items-center gap-6 px-16 py-6 bg-[#FF4500] text-white font-syncopate font-black uppercase text-[11px] tracking-[0.5em] rounded-sm hover:brightness-110 transition-all shadow-2xl">
           EXPLORE_COLLECTIONS <ArrowRight size={18} />
         </Link>
      </div>
    </div>
  );
};

export default AboutUs;