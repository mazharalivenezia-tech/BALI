
import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { ShoppingCart, Activity } from 'lucide-react';

interface GlowCardProps {
  product: Product;
}

const GlowCard: React.FC<GlowCardProps> = ({ product }) => {
  const isRed = product.color === 'red';
  const glowColor = isRed ? 'rgba(255, 0, 51, 0.5)' : 'rgba(0, 212, 255, 0.5)';
  const brandColor = isRed ? 'text-[#ff0033]' : 'text-[#00d4ff]';
  const borderColor = isRed ? 'border-[#ff0033]/30' : 'border-[#00d4ff]/30';

  return (
    <Link 
      to={`/product/${product.id}`}
      className={`group relative block overflow-hidden rounded-[2.5rem] bg-[#151515] border ${borderColor} transition-all duration-500 hover:scale-[1.03] shadow-2xl touch-manipulation`}
      style={{ boxShadow: `0 20px 60px -20px ${glowColor}` }}
    >
      <div className="aspect-[4/5] overflow-hidden relative">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700 opacity-80 group-hover:opacity-100"
        />
        {/* HUD Overlay Elements */}
        <div className="absolute top-6 left-6 flex flex-col gap-1 opacity-40 group-hover:opacity-100 transition-opacity">
           <div className="flex items-center gap-2">
              <div className={`w-1.5 h-1.5 rounded-full animate-pulse ${isRed ? 'bg-[#ff0033]' : 'bg-[#00d4ff]'}`}></div>
              <span className="text-[8px] font-black uppercase tracking-[0.2em]">Live Performance Tracking</span>
           </div>
           <div className="w-12 h-[1px] bg-white/20"></div>
           <Activity size={12} className={brandColor} />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-transparent to-transparent"></div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full p-8 transition-all duration-300">
        <div className="flex justify-between items-end">
          <div className="flex-1 mr-4">
            <p className={`text-[10px] uppercase tracking-[0.4em] font-black mb-2 italic ${brandColor}`}>
              [{product.category}]
            </p>
            <h3 className="text-xl md:text-2xl font-syncopate font-black leading-none mb-3 text-white uppercase tracking-tighter line-clamp-1">{product.name}</h3>
            <div className="flex items-center gap-4">
               <span className="text-2xl font-black text-white italic">${product.price}</span>
               <div className={`h-[1px] flex-grow bg-white/10`}></div>
            </div>
          </div>
          <button className={`p-5 rounded-2xl transition-all shadow-xl flex-shrink-0 border border-white/10 hover:border-white/40 active:scale-90 ${isRed ? 'bg-[#ff0033]/20 hover:bg-[#ff0033]' : 'bg-[#00d4ff]/20 hover:bg-[#00d4ff]'}`}>
            <ShoppingCart size={20} className="text-white" />
          </button>
        </div>
      </div>
    </Link>
  );
};

export default GlowCard;
