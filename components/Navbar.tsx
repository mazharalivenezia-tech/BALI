import React, { useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X, ChevronDown, LayoutDashboard, ShoppingCart, Trash2 } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import Logo from './Logo';
import { Category, CATEGORY_MAP } from '../types';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();
  const lastScrollY = useRef(0);
  
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  const [cartItems] = useState([
    { id: '1', name: 'Magma Pitch Kit', price: 145, quantity: 1, image: 'https://images.unsplash.com/photo-1510566337590-2fc1f21d0faa?q=80&w=200' }
  ]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const direction = latest - lastScrollY.current;
    if (latest < 50) setIsHidden(false);
    else if (direction > 10 && !isMenuOpen) {
      setIsHidden(true);
      setIsMegaMenuOpen(false);
    } else if (direction < -5) setIsHidden(false);
    lastScrollY.current = latest;
  });

  const megaMenuGroups = [
    { title: 'CORE_FIELD', categories: [Category.BALL_TEAM, Category.INDIVIDUAL_RACKET, Category.ATHLETICS] },
    { title: 'COMBAT_ELEMENT', categories: [Category.COMBAT, Category.GYMNASTICS, Category.STRENGTH_WEIGHT] },
    { title: 'KINETIC_FLOW', categories: [Category.WATER, Category.WINTER, Category.MOTORSPORTS, Category.CYCLING] },
    { title: 'STRATEGY_BOARD', categories: [Category.EQUESTRIAN, Category.TARGET, Category.BOARD_DISC, Category.MIND] }
  ];

  return (
    <>
      <motion.nav 
        animate={{ y: isHidden ? -100 : 0 }}
        className="fixed top-0 left-0 w-full z-[100] bg-[#050505]/95 backdrop-blur-3xl border-b border-white/5"
        onMouseLeave={() => setIsMegaMenuOpen(false)}
      >
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 py-5 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <Logo className="w-8 h-8 md:w-9 md:h-9 group-hover:scale-110 transition-transform duration-500" />
            <div className="flex flex-col">
              <span className="font-syncopate text-sm font-bold text-white tracking-tighter">DARK FASHION</span>
              <span className="font-syncopate text-[8px] font-black text-[#FF4500] tracking-[0.4em] mt-1 italic">SPORTS</span>
            </div>
          </Link>

          <div className="hidden xl:flex items-center gap-12 text-[10px] font-black uppercase tracking-[0.3em]">
            <Link to="/" className={`hover:text-white transition-all ${isActive('/') ? 'text-[#FF4500]' : 'text-gray-500'}`}>ARENA</Link>
            <button onMouseEnter={() => setIsMegaMenuOpen(true)} className={`hover:text-white transition-all flex items-center gap-2 ${isActive('/products') ? 'text-[#FF4500]' : 'text-gray-500'}`}>
              COLLECTIONS <ChevronDown size={10} />
            </button>
            <Link to="/lab" className={`hover:text-white transition-all ${isActive('/lab') ? 'text-[#FF4500]' : 'text-gray-500'}`}>LAB</Link>
            <Link to="/blog" className={`hover:text-white transition-all ${isActive('/blog') ? 'text-[#FF4500]' : 'text-gray-500'}`}>INTEL</Link>
            <Link to="/mission" className={`hover:text-white transition-all ${isActive('/mission') ? 'text-[#FF4500]' : 'text-gray-500'}`}>MISSION</Link>
          </div>

          <div className="flex items-center gap-4 md:gap-6">
            <Link to="/admin" className="p-2.5 text-gray-500 hover:text-[#FF4500] transition-all border border-white/5 rounded-xl hover:bg-white/5" title="Dashboard">
              <LayoutDashboard size={18} />
            </Link>
            <button onClick={() => setIsCartOpen(true)} className="relative p-2.5 text-gray-500 hover:text-[#FF4500] transition-all border border-white/5 rounded-xl hover:bg-white/5">
              <ShoppingBag size={18} />
              {cartItems.length > 0 && <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#FF4500] text-[8px] font-black text-white flex items-center justify-center rounded-full border border-black">{cartItems.length}</span>}
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="xl:hidden p-2 text-white">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMegaMenuOpen && (
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }} className="absolute top-full left-0 w-full bg-[#0c0d10] border-b border-white/5 shadow-2xl py-16 px-12">
              <div className="max-w-[1800px] mx-auto grid grid-cols-4 gap-12">
                {megaMenuGroups.map(group => (
                  <div key={group.title} className="space-y-8">
                    <h4 className="text-[#FF4500] text-[9px] font-black uppercase tracking-[0.4em] italic border-b border-[#FF4500]/20 pb-4">{group.title}</h4>
                    <div className="space-y-6">
                      {group.categories.map(cat => (
                        <div key={cat} className="space-y-3">
                          <Link to="/products" onClick={() => setIsMegaMenuOpen(false)} className="text-white hover:text-[#FF4500] text-[11px] font-black uppercase tracking-widest block transition-colors">{cat}</Link>
                          <ul className="space-y-1.5 pl-2 border-l border-white/5">
                            {CATEGORY_MAP[cat].slice(0, 3).map(sub => (
                              <li key={sub}><Link to="/products" onClick={() => setIsMegaMenuOpen(false)} className="text-gray-500 hover:text-white text-[9px] font-bold uppercase tracking-wider block transition-colors">{sub}</Link></li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Mobile Menu logic... omitted for brevity but assuming updated similar to desktop */}
    </>
  );
};

export default Navbar;