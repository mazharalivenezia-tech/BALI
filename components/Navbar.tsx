
import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X, ShieldCheck, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();
  const lastScrollY = useRef(0);
  
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  // Intelligent Scroll Logic - Optimized for touch responsiveness
  useMotionValueEvent(scrollY, "change", (latest) => {
    const direction = latest - lastScrollY.current;
    if (latest < 60) {
      setIsHidden(false);
    } else if (direction > 12 && !isMenuOpen) {
      setIsHidden(true);
    } else if (direction < -6) {
      setIsHidden(false);
    }
    lastScrollY.current = latest;
  });

  const navLinks = [
    { name: 'Arena', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Custom Lab', path: '/lab' },
    { name: 'Blog', path: '/blog' },
    { name: 'Mission', path: '/mission' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.nav 
        initial={{ y: 0 }}
        animate={{ y: isHidden ? -100 : 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 w-full z-[100] px-2 md:px-8 py-2 md:py-6 pointer-events-none"
      >
        {/* NITRO PROGRESS BAR */}
        <motion.div 
          style={{ scaleX: scrollYProgress }}
          className="absolute top-0 left-0 h-[2px] bg-[#ff0033] origin-left z-[101]"
        />

        <div className="max-w-[1600px] mx-auto glass-morphism rounded-xl md:rounded-[2rem] px-3 md:px-10 py-2.5 md:py-5 flex items-center justify-between pointer-events-auto shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-white/5 relative overflow-hidden">
          {/* Logo Section - Scaled for Mobile */}
          <Link to="/" className="flex items-center gap-2 md:gap-5 group relative z-10" onClick={() => setIsMenuOpen(false)}>
            <Logo className="w-8 h-8 md:w-14 md:h-14 transition-transform duration-300 group-hover:rotate-12" />
            <div className="flex flex-col">
              <span className="font-syncopate text-[9px] md:text-xl font-black tracking-tighter uppercase whitespace-nowrap leading-none text-white">
                DARK FASHION
              </span>
              <span className="font-syncopate text-[7px] md:text-lg font-black tracking-widest uppercase text-[#F54A02] leading-none mt-0.5">
                SPORTS
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden xl:flex items-center gap-8 font-black text-[10px] tracking-[0.4em] uppercase">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`hover:text-white transition-all relative group py-2 ${
                  isActive(link.path) ? 'text-[#ff0033]' : 'text-gray-500'
                }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#ff0033] transition-transform duration-300 origin-left ${isActive(link.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-1.5 md:gap-5 relative z-10">
            <button className="relative p-3 md:p-4 text-gray-400 hover:text-white active:scale-90 hover:bg-white/5 rounded-full transition-all">
              <ShoppingBag size={18} className="md:w-5 md:h-5" />
              <span className="absolute top-3 right-3 w-1.5 h-1.5 bg-[#00d4ff] rounded-full shadow-[0_0_8px_#00d4ff]"></span>
            </button>
            
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
              className="xl:hidden p-3 md:p-4 text-white active:scale-75 bg-white/5 rounded-full border border-white/10 transition-all"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '-100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '-100%' }}
            transition={{ type: 'spring', damping: 35, stiffness: 450 }}
            className="fixed inset-0 z-[110] bg-[#0c0c0c] flex flex-col pt-24 pb-8 px-6 overflow-hidden"
          >
            <div className="relative z-10 flex flex-col gap-0.5 overflow-y-auto max-h-full">
              <p className="text-[#ff0033] text-[8px] font-black uppercase tracking-[0.8em] mb-4 opacity-40 italic">MOBILE_LINK_ENGAGED</p>
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.02 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`group flex items-center justify-between py-3.5 border-b border-white/5 ${
                      isActive(link.path) ? 'text-[#ff0033]' : 'text-white'
                    }`}
                  >
                    <span className="font-syncopate text-xl font-black uppercase tracking-tighter group-active:scale-95 transition-transform">
                      {link.name}
                    </span>
                    <ChevronRight size={20} className={`transition-transform ${isActive(link.path) ? 'opacity-100 text-[#ff0033]' : 'opacity-10'}`} />
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-auto relative z-10 pt-4">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                <div className="flex gap-3 items-center">
                   <div className="w-9 h-9 rounded-lg bg-[#ff0033]/20 flex items-center justify-center text-[#ff0033]">
                      <ShoppingBag size={18} />
                   </div>
                   <div className="flex flex-col">
                      <span className="text-[7px] font-black uppercase tracking-widest text-gray-600">INVENTORY</span>
                      <span className="text-white font-bold text-xs tracking-tighter">EMPTY LOADOUT</span>
                   </div>
                </div>
                <Link to="/products" onClick={() => setIsMenuOpen(false)} className="px-5 py-2.5 bg-white text-black font-black uppercase text-[8px] tracking-widest rounded-md active:scale-95 transition-all">
                  BROWSE
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
