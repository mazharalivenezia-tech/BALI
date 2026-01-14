
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MOCK_BLOGS } from '../constants';
import { Calendar, Tag, ArrowRight, Search } from 'lucide-react';

const Blog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredBlogs = MOCK_BLOGS.filter(blog => 
    blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.tags.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="pt-32 pb-24 px-4 md:px-6 min-h-screen max-w-7xl mx-auto">
      <header className="mb-16 text-center md:text-left">
        <span className="text-[#ff4d00] text-xs font-black tracking-[0.5em] uppercase mb-4 block">Field Intel & Daily Updates</span>
        <h1 className="font-syncopate text-4xl md:text-7xl font-bold mb-8">THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4d00] to-[#ffffff]">FEED</span></h1>
        
        <div className="relative max-w-xl mx-auto md:mx-0">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" size={18} />
          <input 
            type="text" 
            placeholder="Search updates by keyword..."
            className="w-full bg-white/5 border border-white/10 rounded-full py-4 pl-12 pr-6 text-sm focus:outline-none focus:border-[#ff4d00] transition-all"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        <AnimatePresence mode="popLayout">
          {filteredBlogs.map((post, idx) => (
            <motion.article
              layout
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-video rounded-[2rem] overflow-hidden border border-white/5 relative mb-6">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-6 left-6 flex gap-2">
                   {post.tags.map(tag => (
                     <span key={tag} className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[9px] font-bold uppercase tracking-widest text-[#ff4d00]">
                       #{tag}
                     </span>
                   ))}
                </div>
              </div>

              <div className="px-2">
                <div className="flex items-center gap-2 text-gray-600 text-[10px] uppercase font-bold tracking-widest mb-3">
                  <Calendar size={12} /> {post.date}
                </div>
                <h2 className="font-syncopate text-2xl md:text-3xl font-bold mb-4 group-hover:text-[#ff4d00] transition-colors leading-tight">
                  {post.title}
                </h2>
                <p className="text-gray-400 font-light leading-relaxed mb-6 line-clamp-2">
                  {post.excerpt}
                </p>
                <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-white hover:text-[#ff4d00] transition-colors">
                  Read Report <ArrowRight size={14} />
                </button>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>

      {filteredBlogs.length === 0 && (
        <div className="py-24 text-center">
          <p className="text-gray-600 uppercase tracking-widest">No field reports found for "{searchTerm}".</p>
        </div>
      )}
    </div>
  );
};

export default Blog;
