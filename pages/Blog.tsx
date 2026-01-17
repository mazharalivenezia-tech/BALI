import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MOCK_BLOGS } from '../constants';
import { Calendar, Tag, ArrowRight, Search, Zap } from 'lucide-react';

const Blog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredBlogs = MOCK_BLOGS.filter(blog => 
    blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.tags.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="pt-40 pb-24 px-6 min-h-screen max-w-7xl mx-auto bg-[#050505]">
      <header className="mb-20">
        <div className="flex flex-col md:flex-row items-end justify-between gap-12">
          <div className="space-y-4">
            <span className="text-[#FF4500] text-[10px] font-black tracking-[0.6em] uppercase italic">FIELD_INTEL // DAILY_REPORTS</span>
            <h1 className="font-syncopate text-6xl md:text-8xl font-bold uppercase italic tracking-tighter text-white leading-none">THE <span className="text-white/20">FEED</span></h1>
          </div>
          
          <div className="relative w-full md:w-96">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-700" size={18} />
            <input 
              type="text" 
              placeholder="SEARCH PROTOCOLS..."
              className="w-full bg-[#0c0d10] border border-white/5 rounded-2xl py-5 pl-16 pr-8 text-[10px] font-black focus:outline-none focus:border-[#FF4500] transition-all placeholder:text-gray-800 uppercase tracking-[0.2em] text-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
        <AnimatePresence mode="popLayout">
          {filteredBlogs.map((post, idx) => (
            <motion.article
              layout
              key={post.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[16/10] rounded-[2.5rem] overflow-hidden border border-white/5 relative mb-10 bg-black">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale group-hover:grayscale-0 opacity-40 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                <div className="absolute top-8 left-8 flex gap-3">
                   {post.tags.map(tag => (
                     <span key={tag} className="px-4 py-1.5 bg-[#FF4500]/90 backdrop-blur-md rounded-full text-[9px] font-black uppercase tracking-widest text-white italic">
                       {tag}
                     </span>
                   ))}
                </div>
              </div>

              <div className="px-4 space-y-6">
                <div className="flex items-center gap-4 text-gray-700 text-[9px] uppercase font-black tracking-widest italic">
                  <Calendar size={12} className="text-[#FF4500]" /> {post.date}
                </div>
                <h2 className="font-syncopate text-3xl font-bold group-hover:text-[#FF4500] transition-colors leading-tight uppercase italic tracking-tighter text-white">
                  {post.title}
                </h2>
                <p className="text-gray-500 font-bold text-xs leading-relaxed uppercase tracking-widest italic line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="pt-4 flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-white hover:text-[#FF4500] transition-all italic">
                   READ_REPORT <ArrowRight size={14} className="group-hover:translate-x-4 transition-transform" />
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>

      {filteredBlogs.length === 0 && (
        <div className="py-40 text-center flex flex-col items-center gap-8">
           <Zap className="text-gray-900" size={48} />
           <p className="text-gray-800 uppercase tracking-[1em] font-black text-[10px] italic">ZERO_INTEL_REPORTS_FOUND</p>
        </div>
      )}
    </div>
  );
};

export default Blog;