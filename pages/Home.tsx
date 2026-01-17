import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, Cpu, Shield, Box, Wind } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MOCK_PRODUCTS } from '../constants';
import GlowCard from '../components/GlowCard';

const Home: React.FC = () => {
  const newArrivals = MOCK_PRODUCTS.slice(0, 4);

  return (
    <div className="w-full bg-[#050505] selection:bg-[#FF4500] selection:text-white relative">
      
      <section className="relative min-h-screen flex items-center px-6 md:px-16 lg:px-24 xl:px-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=3000&auto=format&fit=crop" 
            className="w-full h-full object-cover grayscale brightness-[0.1]"
            alt="Hero Training"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/0 via-[#050505]/60 to-[#050505]"></div>
        </div>

        <div className="relative z-10 max-w-screen-2xl mx-auto w-full pt-40">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 mb-8"
          >
            <span className="text-[#FF4500] font-syncopate text-[10px] font-black tracking-[0.6em] uppercase italic">EST_2024 // GLOBAL_ARENA</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-syncopate text-[clamp(2.5rem,8vw,8rem)] font-bold text-white leading-[0.85] uppercase italic tracking-tighter mb-12"
          >
            BEYOND <br />
            <span className="text-[#FF4500]">HUMAN</span> <br />
            LIMITS.
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-6"
          >
             <Link to="/products" className="group flex items-center gap-4 px-12 py-5 bg-[#FF4500] text-white font-syncopate font-black uppercase text-[10px] tracking-[0.4em] hover:brightness-110 transition-all rounded-sm shadow-[0_10px_40px_rgba(255,69,0,0.3)]">
                DEPLOY GEAR <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
             </Link>
             <Link to="/lab" className="group flex items-center gap-4 px-12 py-5 border border-white/10 text-white font-syncopate font-black uppercase text-[10px] tracking-[0.4em] hover:bg-white hover:text-black transition-all rounded-sm">
                CUSTOM LAB
             </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-32 px-6 md:px-24 bg-[#050505]">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="space-y-4">
              <h2 className="font-syncopate text-4xl md:text-6xl font-bold uppercase italic tracking-tighter text-white">NEW_ARRIVALS</h2>
              <div className="w-24 h-1 bg-[#FF4500]"></div>
            </div>
            <Link to="/products" className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-500 hover:text-white transition-colors flex items-center gap-2 italic">
              VIEW FULL INVENTORY <ChevronRight size={14} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {newArrivals.map((product) => (
              <GlowCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-40 bg-[#0c0d10] border-y border-white/5">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { icon: <Wind className="text-[#FF4500]" size={40} />, title: "AERO-FLOW", desc: "Engineered ventilation channels mapped to thermal zones." },
              { icon: <Cpu className="text-white" size={40} />, title: "BIO-SYNC", desc: "Kinetic compression fibers for peak muscle stabilization." },
              { icon: <Shield className="text-[#FF4500]" size={40} />, title: "TITAN-KNT", desc: "High-density weave resistant to high-speed abrasions." }
            ].map((feature, i) => (
              <div key={i} className="space-y-6 text-center group">
                <div className="mx-auto w-20 h-20 rounded-2xl bg-black border border-white/5 flex items-center justify-center group-hover:border-[#FF4500] transition-all shadow-lg">
                  {feature.icon}
                </div>
                <h3 className="font-syncopate text-xl font-bold uppercase tracking-tight text-white italic">{feature.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed max-w-xs mx-auto italic font-bold uppercase tracking-widest">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;