import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MOCK_PRODUCTS } from '../constants';
import { ShoppingBag, ChevronLeft, Zap, Shield, Activity, Target } from 'lucide-react';

const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const product = MOCK_PRODUCTS.find(p => p.id === id);
  const [selectedSize, setSelectedSize] = useState('M');

  if (!product) return null;

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen max-w-7xl mx-auto bg-[#050505]">
      <Link to="/products" className="inline-flex items-center gap-2 text-gray-700 hover:text-white transition-colors uppercase text-[10px] font-black tracking-widest mb-12 italic">
        <ChevronLeft size={16} /> BACK_TO_CATALOG
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/5 bg-black group">
          <img src={product.image} className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-1000" />
          <div className="absolute top-10 left-10 p-4 glass-morphism rounded-2xl flex items-center gap-4">
             <Activity className="text-[#FF4500]" size={20} />
             <span className="text-[10px] font-black uppercase tracking-widest text-white italic">THERMAL_SYNC_ACTIVE</span>
          </div>
        </div>

        <div className="space-y-12">
          <div>
            <span className="text-[#FF4500] text-[10px] font-black uppercase tracking-[0.5em] mb-4 block italic">[{product.category}]</span>
            <h1 className="font-syncopate text-4xl md:text-7xl font-bold leading-[0.9] uppercase tracking-tighter mb-8 text-white">{product.name}</h1>
            <p className="text-gray-500 text-lg font-light leading-relaxed max-w-lg italic font-bold uppercase tracking-widest text-xs">
              {product.description}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-12 border-y border-white/5 py-10">
             <div className="space-y-2">
                <span className="text-[10px] font-black text-gray-700 uppercase tracking-widest">Protocol Cost</span>
                <p className="text-4xl font-black text-white italic">${product.price}</p>
             </div>
             <div className="space-y-2">
                <span className="text-[10px] font-black text-gray-700 uppercase tracking-widest">Unit Status</span>
                <p className="text-4xl font-black text-[#FF4500] uppercase italic">DEPLOYED</p>
             </div>
          </div>

          <div className="space-y-8">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-600 italic">Dimension Profile</h4>
            <div className="flex flex-wrap gap-4">
              {['S', 'M', 'L', 'XL'].map(size => (
                <button key={size} onClick={() => setSelectedSize(size)} className={`px-8 py-4 rounded-xl border font-black uppercase text-xs transition-all ${selectedSize === size ? 'border-[#FF4500] text-[#FF4500] bg-[#FF4500]/5' : 'border-white/5 text-gray-800 hover:text-white'}`}>
                  {size}
                </button>
              ))}
            </div>
          </div>

          <button className="w-full py-8 bg-[#FF4500] text-white font-black uppercase tracking-[0.6em] rounded-3xl flex items-center justify-center gap-4 transition-all hover:brightness-110 shadow-[0_20px_60px_rgba(255,69,0,0.3)] italic">
             DEPLOY UNIT <ShoppingBag size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;