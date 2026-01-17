import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MOCK_PRODUCTS } from '../constants';
import { Category } from '../types';
import GlowCard from '../components/GlowCard';
import { Search, ChevronDown, Filter, X } from 'lucide-react';

const Products: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<Category | 'ALL'>('ALL');
  const [searchTerm, setSearchTerm] = useState('');
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    return MOCK_PRODUCTS.filter(p => {
      const matchesFilter = activeFilter === 'ALL' || p.category === activeFilter;
      const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, searchTerm]);

  const categories = Object.values(Category);

  return (
    <div className="pt-40 md:pt-48 pb-32 px-6 min-h-screen max-w-screen-2xl mx-auto bg-[#050505]">
      <header className="mb-20">
        <div className="flex flex-col md:flex-row items-baseline justify-between gap-8 mb-16">
          <div className="space-y-4">
             <h1 className="font-syncopate text-6xl md:text-8xl font-bold tracking-tighter uppercase italic leading-none text-white">THE_CATALOG</h1>
             <p className="text-[11px] font-black uppercase tracking-[0.6em] text-gray-700 italic">SYSTEM_INVENTORY_DEPLOYED_v4.5</p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-6 w-full md:w-auto">
             <div className="relative w-full md:w-96">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-700" size={18} />
                <input 
                  type="text" 
                  placeholder="LOCATE ASSET..."
                  className="w-full bg-[#0c0d10] border border-white/5 rounded-xl py-5 pl-16 pr-8 text-xs font-black focus:outline-none focus:border-[#FF4500] transition-all placeholder:text-gray-800 uppercase tracking-widest text-white"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
             </div>
             
             <button
               onClick={() => setIsCategoryOpen(!isCategoryOpen)}
               className={`flex items-center justify-between gap-6 px-8 py-5 rounded-xl text-[11px] font-black tracking-[0.3em] uppercase transition-all border ${
                 activeFilter !== 'ALL' ? 'bg-[#FF4500] text-white border-[#FF4500]' : 'bg-[#0c0d10] text-gray-500 border-white/5 hover:border-white/10'
               }`}
             >
               {activeFilter === 'ALL' ? 'SECTORS' : activeFilter}
               <ChevronDown size={16} />
             </button>
          </div>
        </div>

        <AnimatePresence>
          {isCategoryOpen && (
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
              <button onClick={() => { setActiveFilter('ALL'); setIsCategoryOpen(false); }} className={`p-4 rounded-xl text-[9px] font-black uppercase tracking-widest border ${activeFilter === 'ALL' ? 'bg-[#FF4500] border-[#FF4500] text-white' : 'border-white/5 text-gray-600'}`}>ALL_UNITS</button>
              {categories.map(cat => (
                <button key={cat} onClick={() => { setActiveFilter(cat); setIsCategoryOpen(false); }} className={`p-4 rounded-xl text-[9px] font-black uppercase tracking-widest border transition-all ${activeFilter === cat ? 'bg-[#FF4500] border-[#FF4500] text-white' : 'border-white/5 text-gray-600 hover:text-white'}`}>{cat}</button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {filteredProducts.map((product) => (
          <GlowCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;