import React from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Globe, Headphones, Mail, Target } from 'lucide-react';
import { CONTACT_DETAILS } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="pt-40 md:pt-48 pb-32 px-6 min-h-screen w-full max-w-7xl mx-auto bg-[#050505]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
        <div className="space-y-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <span className="text-[#FF4500] text-[10px] font-black tracking-[0.6em] uppercase mb-6 block italic">CHANNEL_LINK // DIRECT_SUPPORT</span>
            <h1 className="font-syncopate text-6xl md:text-8xl font-black leading-none mb-10 uppercase tracking-tighter italic text-white">
              ESTABLISH <br /> <span className="text-[#FF4500]">LINK</span>
            </h1>
            <p className="text-gray-500 text-xs font-black uppercase tracking-[0.4em] max-w-md italic leading-loose">
              Whether it's a custom fleet request, press inquiry, or performance feedback—our global hub is listening. 
            </p>
          </motion.div>

          <div className="space-y-10">
            <div className="flex gap-8 items-center group">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/5 text-[#FF4500] group-hover:bg-[#FF4500] group-hover:text-white transition-all">
                <Mail size={22} />
              </div>
              <div>
                <p className="text-[9px] text-gray-700 uppercase tracking-widest font-black mb-1 italic">ENCRYPTED_EMAIL</p>
                <p className="text-lg font-black tracking-tight text-white uppercase italic">{CONTACT_DETAILS.email}</p>
              </div>
            </div>
            <div className="flex gap-8 items-center group">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/5 text-[#FF4500] group-hover:bg-[#FF4500] group-hover:text-white transition-all">
                <MapPin size={22} />
              </div>
              <div>
                <p className="text-[9px] text-gray-700 uppercase tracking-widest font-black mb-1 italic">PHYSICAL_SECTOR</p>
                <p className="text-lg font-black tracking-tight uppercase text-white italic">GLOBAL_HUB // 101 STEALTH AVE.</p>
              </div>
            </div>
          </div>

          <div className="pt-12 flex flex-wrap gap-4">
             <div className="px-6 py-4 glass-morphism rounded-2xl border-white/5 flex items-center gap-3">
                <Globe className="text-[#FF4500]" size={16} />
                <span className="text-[9px] font-black uppercase tracking-widest text-gray-500 italic">GATEWAY: ONLINE</span>
             </div>
             <div className="px-6 py-4 glass-morphism rounded-2xl border-white/5 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#FF4500] animate-pulse"></div>
                <span className="text-[9px] font-black uppercase tracking-widest text-gray-500 italic">STATUS: READY</span>
             </div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-morphism p-12 md:p-16 rounded-[3.5rem] border border-white/5 relative bg-black/40"
        >
          <div className="absolute top-0 right-12 -translate-y-1/2 px-8 py-3 bg-[#FF4500] text-white text-[10px] font-black uppercase tracking-[0.4em] rounded-full italic">
            TRANSMISSION_BRIEF
          </div>
          <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-10">
              <div className="space-y-3">
                <label className="text-[9px] uppercase font-black tracking-[0.4em] text-gray-700 ml-4 italic">AGENT_ID</label>
                <input 
                  type="text" 
                  placeholder="X-ALPHA" 
                  className="w-full bg-black border border-white/5 rounded-2xl px-8 py-5 focus:border-[#FF4500] outline-none transition-all placeholder:text-gray-900 text-sm font-bold uppercase tracking-widest text-white"
                />
              </div>
              <div className="space-y-3">
                <label className="text-[9px] uppercase font-black tracking-[0.4em] text-gray-700 ml-4 italic">FREQUENCY</label>
                <input 
                  type="email" 
                  placeholder="AGENT@DFS.NET" 
                  className="w-full bg-black border border-white/5 rounded-2xl px-8 py-5 focus:border-[#FF4500] outline-none transition-all placeholder:text-gray-900 text-sm font-bold uppercase tracking-widest text-white"
                />
              </div>
            </div>
            
            <div className="space-y-3">
              <label className="text-[9px] uppercase font-black tracking-[0.4em] text-gray-700 ml-4 italic">DIRECTIVE</label>
              <select className="w-full bg-black border border-white/5 rounded-2xl px-8 py-5 focus:border-[#FF4500] outline-none transition-all appearance-none text-gray-600 text-[10px] font-black uppercase tracking-widest">
                 <option>PERFORMANCE_FEEDBACK</option>
                 <option>CUSTOM_FLEET_REQUEST</option>
                 <option>PRESS_INQUIRY</option>
                 <option>SECURITY_PROTOCOL</option>
              </select>
            </div>

            <div className="space-y-3">
              <label className="text-[9px] uppercase font-black tracking-[0.4em] text-gray-700 ml-4 italic">PAYLOAD</label>
              <textarea 
                rows={4} 
                placeholder="INITIALIZE MESSAGE SEQUENCE..." 
                className="w-full bg-black border border-white/5 rounded-2xl px-8 py-5 focus:border-[#FF4500] outline-none transition-all resize-none placeholder:text-gray-900 text-sm font-bold uppercase tracking-widest text-white"
              />
            </div>

            <button className="w-full py-8 bg-[#FF4500] text-white font-black uppercase tracking-[0.6em] rounded-3xl flex items-center justify-center gap-6 hover:brightness-110 transition-all shadow-[0_20px_50px_rgba(255,69,0,0.3)] italic">
               SEND TRANSMISSION <Send size={18} />
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;