import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { ChevronRight } from 'lucide-react';

interface GlowCardProps {
  product: Product;
}

const GlowCard: React.FC<GlowCardProps> = ({ product }) => {
  return (
    <Link 
      to={`/product/${product.id}`}
      className="group relative block overflow-hidden rounded-sm card-elite shadow-2xl h-full flex flex-col"
    >
      <div className="aspect-[3/4] overflow-hidden relative bg-[#050505]">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105 opacity-60 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors"></div>
        
        <div className="absolute top-6 left-6">
           <div className="px-4 py-2 bg-[#050505]/90 backdrop-blur-md border border-white/5 shadow-sm">
              <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white italic">ARENA_READY</span>
           </div>
        </div>
      </div>
      
      <div className="p-8 flex-grow flex flex-col justify-between">
        <div className="space-y-4">
          <div>
            <p className="text-[10px] uppercase tracking-[0.4em] font-black mb-2 italic text-gray-600">
              {product.category.replace(' Sports', '')}
            </p>
            <h3 className="text-lg font-syncopate font-bold leading-tight text-white uppercase tracking-tighter group-hover:text-[#FF4500] transition-colors">{product.name}</h3>
          </div>
          
          <div className="flex justify-between items-center border-t border-white/5 pt-6">
             <span className="text-xl font-black text-white italic tracking-tighter">${product.price}</span>
             <ChevronRight size={20} className="text-gray-600 group-hover:text-[#FF4500] group-hover:translate-x-2 transition-all" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GlowCard;