
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MOCK_PRODUCTS } from '../constants';
import { Category } from '../types';
import GlowCard from '../components/GlowCard';
import { Search } from 'lucide-react';

const Products: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<Category | 'ALL'>('ALL');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = useMemo(() => {
    return MOCK_PRODUCTS.filter(p => {
      const matchesFilter = activeFilter === 'ALL' || p.category === activeFilter;
      const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, searchTerm]);

  return (
    <div className="pt-24 md:pt-32 pb-20 md:pb-24 px-4 md:px-6 min-h-screen max-w-7xl mx-auto">
      <header className="mb-10 md:mb-16">
        <h1 className="font-syncopate text-4xl md:text-7xl font-bold mb-6 tracking-tighter">PRODUCTS</h1>
        <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
          <div className="flex flex-wrap gap-2 md:gap-3">
            {['ALL', ...Object.values(Category)].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat as any)}
                className={`px-4 md:px-6 py-2 rounded-full text-[8px] md:text-[10px] font-black tracking-widest uppercase transition-all border active:scale-90 ${
                  activeFilter === cat 
                    ? 'bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.2)]' 
                    : 'bg-transparent text-gray-500 border-white/10 hover:border-white/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
            <input 
              type="text" 
              placeholder="Search gear..."
              className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-12 pr-6 text-sm focus:outline-none focus:border-[#00d4ff] transition-all placeholder:text-gray-700"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
        <AnimatePresence mode="popLayout">
          {filteredProducts.map((product) => (
            <motion.div
              layout
              key={product.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <GlowCard product={product} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {filteredProducts.length === 0 && (
        <div className="py-24 text-center">
          <p className="text-gray-600 uppercase tracking-widest font-black text-xs italic">_NO GEAR DETECTED IN SECTOR</p>
        </div>
      )}
    </div>
  );
};

export default Products;
