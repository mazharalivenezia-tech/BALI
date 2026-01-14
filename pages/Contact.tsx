
import React from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Globe, Headphones, Mail } from 'lucide-react';
import { CONTACT_DETAILS } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="pt-32 md:pt-48 pb-24 px-6 min-h-screen w-full max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <span className="text-[#F54A02] text-xs font-black tracking-[0.5em] uppercase mb-4 block italic">Channel: Direct Support</span>
            <h1 className="font-syncopate text-5xl md:text-8xl font-black leading-none mb-8 uppercase tracking-tighter">
              ESTABLISH <br /> <span className="text-white">LINK</span>
            </h1>
            <p className="text-gray-400 text-lg font-light leading-relaxed max-w-md">
              Whether it's a custom fleet request, press inquiry, or performance feedback—our global hub is listening. 
            </p>
          </motion.div>

          <div className="space-y-8">
            <div className="flex gap-6 items-center group">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-[#F54A02] group-hover:bg-[#F54A02] group-hover:text-white transition-all">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest font-black mb-1">Inquiries</p>
                <p className="text-lg font-bold tracking-tight">{CONTACT_DETAILS.email}</p>
              </div>
            </div>
            <div className="flex gap-6 items-center group">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-[#F54A02] group-hover:bg-[#F54A02] group-hover:text-white transition-all">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest font-black mb-1">Location</p>
                <p className="text-lg font-bold tracking-tight uppercase">Global Performance Hub - 101 Stealth Ave.</p>
              </div>
            </div>
            <div className="flex gap-6 items-center group">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-[#F54A02] group-hover:bg-[#F54A02] group-hover:text-white transition-all">
                <Headphones size={24} />
              </div>
              <div>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest font-black mb-1">Support</p>
                <p className="text-lg font-bold tracking-tight uppercase">24/7 Kinetic Response Unit</p>
              </div>
            </div>
          </div>

          <div className="pt-10 flex gap-4">
             <div className="px-6 py-4 glass-morphism rounded-2xl border-white/5 flex items-center gap-3">
                <Globe className="text-[#F54A02]" size={18} />
                <span className="text-[10px] font-black uppercase tracking-widest">Server: Online</span>
             </div>
             <div className="px-6 py-4 glass-morphism rounded-2xl border-white/5 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-[10px] font-black uppercase tracking-widest">Latency: 12ms</span>
             </div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-morphism p-10 md:p-16 rounded-[3rem] border border-[#F54A02]/20 relative"
        >
          <div className="absolute top-0 right-10 -translate-y-1/2 px-6 py-2 bg-[#F54A02] text-white text-[10px] font-black uppercase tracking-widest rounded-full">
            Transmission Brief
          </div>
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-black tracking-[0.3em] text-gray-500 ml-4 italic">Agent Name</label>
                <input 
                  type="text" 
                  placeholder="X-ALPHA" 
                  className="w-full bg-black/50 border border-white/10 rounded-2xl px-6 py-5 focus:border-[#F54A02] outline-none transition-all placeholder:text-gray-800"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-black tracking-[0.3em] text-gray-500 ml-4 italic">Frequency (Email)</label>
                <input 
                  type="email" 
                  placeholder="secure@channel.io" 
                  className="w-full bg-black/50 border border-white/10 rounded-2xl px-6 py-5 focus:border-[#F54A02] outline-none transition-all placeholder:text-gray-800"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-[10px] uppercase font-black tracking-[0.3em] text-gray-500 ml-4 italic">Subject Directive</label>
              <select className="w-full bg-black/50 border border-white/10 rounded-2xl px-6 py-5 focus:border-[#F54A02] outline-none transition-all appearance-none text-gray-400">
                 <option>Performance Feedback</option>
                 <option>Custom Fleet Request</option>
                 <option>Press Inquiry</option>
                 <option>Security/Admin</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase font-black tracking-[0.3em] text-gray-500 ml-4 italic">Payload (Message)</label>
              <textarea 
                rows={5} 
                placeholder="Initialize message sequence..." 
                className="w-full bg-black/50 border border-white/10 rounded-2xl px-6 py-5 focus:border-[#F54A02] outline-none transition-all resize-none placeholder:text-gray-800"
              />
            </div>

            <button className="w-full py-6 bg-white text-black font-black uppercase tracking-[0.5em] rounded-2xl flex items-center justify-center gap-4 hover:bg-[#F54A02] hover:text-white transition-all active:scale-95 group overflow-hidden">
               SEND TRANSMISSION <Send size={18} className="group-hover:translate-x-12 group-hover:-translate-y-12 transition-transform duration-500" />
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
