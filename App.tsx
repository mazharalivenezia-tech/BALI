import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import CustomLab from './pages/CustomLab';
import Admin from './pages/Admin';
import Blog from './pages/Blog';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Logo from './components/Logo';
import { CONTACT_DETAILS } from './constants';
import { Instagram, Facebook, Mail } from 'lucide-react';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
};

const Mission: React.FC = () => (
  <div className="pt-32 md:pt-48 pb-20 md:pb-32 px-6 min-h-screen flex items-center justify-center w-full max-w-7xl mx-auto overflow-hidden bg-white">
    <div className="max-w-4xl text-center">
      <div className="relative mb-12 md:mb-20 inline-block group">
        <Logo className="w-32 h-32 md:w-64 md:h-64 mx-auto transition-transform duration-700 invert" />
        <div className="absolute -inset-10 bg-[#BE123C]/5 blur-[80px] -z-10 rounded-full"></div>
      </div>
      
      <h1 className="font-syncopate text-4xl md:text-7xl font-black mb-8 md:mb-12 uppercase tracking-tighter leading-none text-slate-900">
        THE <span className="text-[#BE123C]">MISSION</span>
      </h1>
      
      <p className="text-lg md:text-2xl text-slate-600 font-light leading-relaxed mb-8 md:mb-12 px-2">
        At <span className="text-slate-900 font-black italic">Dark Fashion Sports</span>, we bridge high-fashion silhouettes and elite performance.
      </p>
      
      <div className="h-[1px] w-24 bg-slate-200 mx-auto mb-12 md:mb-16"></div>
      
      <p className="text-slate-400 leading-relaxed max-w-2xl mx-auto uppercase text-[8px] md:text-xs tracking-[0.3em] font-black px-4 italic">
        We engineered this brand for the night runners, the underground titans, and the dreamers.
      </p>
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col relative overflow-x-hidden w-full bg-white text-slate-900">
        <Navbar />
        
        <main className="flex-grow flex flex-col items-center w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/lab" element={<CustomLab />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/mission" element={<Mission />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </main>

        <footer className="py-16 md:py-20 px-6 border-t border-slate-100 bg-slate-50 w-full">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20 items-start mb-16 md:mb-20 text-center md:text-left">
              <div className="space-y-6 md:space-y-8 flex flex-col items-center md:items-start">
                <div className="flex items-center gap-4 group">
                  <Logo className="w-10 h-10 md:w-14 md:h-14 invert" />
                  <div className="flex flex-col text-left">
                    <span className="font-syncopate font-black text-lg md:text-xl tracking-tighter leading-none text-slate-900">DARK FASHION</span>
                    <span className="font-syncopate font-black text-sm md:text-base tracking-widest text-[#BE123C] leading-none mt-1">SPORTS</span>
                  </div>
                </div>
                <p className="text-[9px] md:text-[10px] text-slate-500 leading-relaxed uppercase tracking-[0.2em] max-w-xs italic">
                  High Performance. Bespoke Aesthetics. Beyond human limits.
                </p>
              </div>
              
              <div className="flex flex-col gap-6 md:gap-8 items-center md:items-start">
                <h4 className="text-[9px] font-black uppercase tracking-[0.4em] text-slate-400">Connectivity</h4>
                <div className="flex gap-6">
                  <a href={CONTACT_DETAILS.instagram} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 transition-all">
                    <Instagram size={20} />
                  </a>
                  <a href={CONTACT_DETAILS.facebook} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 transition-all">
                    <Facebook size={20} />
                  </a>
                  <a href={`mailto:${CONTACT_DETAILS.email}`} className="text-slate-400 hover:text-slate-900 transition-all">
                    <Mail size={20} />
                  </a>
                </div>
              </div>

              <div className="space-y-6 md:space-y-8 flex flex-col items-center md:items-start">
                <h4 className="text-[9px] font-black uppercase tracking-[0.4em] text-slate-400">The Hub</h4>
                <p className="text-[10px] md:text-xs font-black text-slate-600 tracking-[0.1em] leading-loose">
                  {CONTACT_DETAILS.email}<br />
                  GLOBAL PERFORMANCE HUB
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-slate-200 gap-6 text-center">
              <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-[8px] md:text-[9px] uppercase font-black tracking-[0.3em] text-slate-400">
                 <a href="#" className="hover:text-slate-900 transition-colors">Shipping</a>
                 <a href="#" className="hover:text-slate-900 transition-colors">Returns</a>
                 <a href="#" className="hover:text-slate-900 transition-colors">Privacy</a>
              </div>
              <p className="text-[8px] text-slate-400 uppercase tracking-[0.4em] font-black">
                DFS &copy; 2024.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;