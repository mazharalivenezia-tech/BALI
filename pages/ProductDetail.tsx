
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MOCK_PRODUCTS } from '../constants';
import { ShoppingBag, ChevronLeft, Zap, Shield, Activity, Target } from 'lucide-react';

const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const product = MOCK_PRODUCTS.find(p => p.id === id);
  
  const [selectedSize, setSelectedSize] = useState('M');
  const [customText, setCustomText] = useState('');
  const [selectedColor, setSelectedColor] = useState(product?.color || 'blue');

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24">
        <div className="text-center">
          <h2 className="font-syncopate text-3xl font-bold mb-6">UNIT NOT FOUND</h2>
          <Link to="/products" className="text-[#ff0033] uppercase tracking-widest font-black text-sm">Return to Inventory</Link>
        </div>
      </div>
    );
  }

  const isRed = selectedColor === 'red';
  const brandColorClass = isRed ? 'text-[#ff0033]' : 'text-[#00d4ff]';
  const bgColorClass = isRed ? 'bg-[#ff0033]' : 'bg-[#00d4ff]';
  const borderColorClass = isRed ? 'border-[#ff0033]' : 'border-[#00d4ff]';

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen max-w-7xl mx-auto">
      <Link to="/products" className="inline-flex items-center gap-2 text-gray-500 hover:text-white transition-colors uppercase text-[10px] font-black tracking-widest mb-12">
        <ChevronLeft size={16} /> Back to Products
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Visual Module */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10 group bg-black"
        >
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
          
          <div className="absolute top-10 left-10 space-y-4">
             <div className="glass-morphism px-4 py-2 rounded-full flex items-center gap-3">
                <div className={`w-2 h-2 rounded-full animate-ping ${bgColorClass}`}></div>
                <span className="text-[10px] font-black uppercase tracking-widest">Active Scan</span>
             </div>
             <div className="glass-morphism p-4 rounded-2xl flex items-center gap-4">
                <Activity className={brandColorClass} size={20} />
                <div className="flex flex-col">
                   <span className="text-[8px] text-gray-500 uppercase font-black">Thermal Sync</span>
                   <span className="text-[10px] font-bold">98.6°F NOMINAL</span>
                </div>
             </div>
          </div>
        </motion.div>

        {/* Configuration Module */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-12"
        >
          <div>
            <span className={`${brandColorClass} text-[10px] font-black uppercase tracking-[0.5em] mb-4 block italic`}>[{product.category}]</span>
            <h1 className="font-syncopate text-4xl md:text-7xl font-bold leading-[0.9] uppercase tracking-tighter mb-6">{product.name}</h1>
            <p className="text-gray-400 text-lg font-light leading-relaxed max-w-lg italic">
              {product.description} Built for the extreme performance demands of the modern field general.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-12 border-y border-white/5 py-10">
             <div className="space-y-2">
                <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Protocol Cost</span>
                <p className="text-4xl font-black">${product.price}</p>
             </div>
             <div className="space-y-2">
                <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Unit Status</span>
                <p className="text-4xl font-black text-green-500 uppercase">READY</p>
             </div>
          </div>

          <div className="space-y-8">
            {/* Color Selection */}
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] mb-6 flex items-center gap-3">
                 <Zap size={14} className={brandColorClass} /> Spectrum Configuration
              </h4>
              <div className="flex gap-4">
                <button 
                  onClick={() => setSelectedColor('blue')}
                  className={`w-12 h-12 rounded-full bg-[#00d4ff] border-4 transition-all ${selectedColor === 'blue' ? 'border-white scale-110' : 'border-transparent'}`}
                />
                <button 
                  onClick={() => setSelectedColor('red')}
                  className={`w-12 h-12 rounded-full bg-[#ff0033] border-4 transition-all ${selectedColor === 'red' ? 'border-white scale-110' : 'border-transparent'}`}
                />
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] mb-6 flex items-center gap-3">
                 <Shield size={14} className={brandColorClass} /> Dimension Profile
              </h4>
              <div className="flex flex-wrap gap-4">
                {['S', 'M', 'L', 'XL', 'XXL'].map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-8 py-4 rounded-xl border font-black uppercase text-xs transition-all ${
                      selectedSize === size 
                        ? `${borderColorClass} ${brandColorClass} bg-white/5` 
                        : 'border-white/10 text-gray-500 hover:border-white/30'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Customization */}
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] mb-6 flex items-center gap-3">
                 <Target size={14} className={brandColorClass} /> Custom Directive
              </h4>
              <input 
                type="text" 
                placeholder="Agent Name / Unit ID..."
                value={customText}
                onChange={(e) => setCustomText(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:border-white outline-none transition-all placeholder:text-gray-700"
              />
              <p className="text-[8px] text-gray-600 mt-3 uppercase tracking-widest font-bold">*Customized units add 48H to deployment time.</p>
            </div>
          </div>

          <div className="pt-8">
             <button className={`w-full py-8 text-white font-black uppercase tracking-[0.5em] rounded-3xl flex items-center justify-center gap-4 transition-all active:scale-95 shadow-2xl group relative overflow-hidden ${isRed ? 'bg-[#ff0033]' : 'bg-[#00d4ff]'}`}>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
                DEPLOY UNIT <ShoppingBag size={20} className="group-hover:translate-x-2 transition-transform" />
             </button>
          </div>
        </motion.div>
      </div>

      {/* Tech Specs Table */}
      <div className="mt-32 pt-20 border-t border-white/5">
         <h3 className="font-syncopate text-2xl font-bold mb-12 uppercase">Technical Specs</h3>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { label: 'Fabric Composition', val: '92% Kinetic-Polyester / 8% Elite-Elastane' },
              { label: 'Compression Ratio', val: 'Level 3 - Progressive Arterial Support' },
              { label: 'Moisture Control', val: 'Nitro-Wick™ Sublimation Tech' }
            ].map((spec, i) => (
              <div key={i} className="space-y-2">
                 <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest">{spec.label}</p>
                 <p className="text-white font-bold">{spec.val}</p>
              </div>
            ))}
         </div>
      </div>
    </div>
  );
};

export default ProductDetail;
