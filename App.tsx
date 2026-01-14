
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

// Specialized Scroll-to-Top Component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
};

const Mission: React.FC = () => (
  <div className="pt-32 md:pt-48 pb-20 md:pb-32 px-6 min-h-screen flex items-center justify-center w-full max-w-7xl mx-auto overflow-hidden">
    <div className="max-w-4xl text-center">
      <div className="relative mb-12 md:mb-20 inline-block group">
        <Logo className="w-32 h-32 md:w-64 md:h-64 mx-auto transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute -inset-6 md:-inset-10 bg-[#F54A02]/20 blur-[60px] md:blur-[100px] -z-10 rounded-full animate-pulse"></div>
      </div>
      
      <h1 className="font-syncopate text-4xl md:text-8xl font-black mb-8 md:mb-12 uppercase tracking-tighter leading-none">
        THE <span className="text-[#F54A02]">MISSION</span>
      </h1>
      
      <p className="text-lg md:text-3xl text-gray-200 font-light leading-relaxed mb-8 md:mb-12 px-2">
        At <span className="text-white font-black italic">Dark Fashion Sports</span>, we bridge the gap between high-fashion silhouettes and elite athletic performance.
      </p>
      
      <div className="h-1 w-24 md:w-40 bg-gradient-to-r from-[#F54A02] to-transparent mx-auto mb-12 md:mb-16"></div>
      
      <p className="text-gray-400 leading-relaxed max-w-2xl mx-auto uppercase text-[8px] md:text-sm tracking-[0.3em] md:tracking-[0.5em] font-black px-4">
        We engineered this brand for the night runners, the underground titans, and the dreamers who refuse to be overlooked. Our gear is a uniform for the dedicated.
      </p>
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col relative overflow-x-hidden w-full bg-[#0f0f0f]">
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

        <footer className="py-16 md:py-24 px-6 border-t border-white/10 bg-[#151515] backdrop-blur-md w-full">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20 items-start mb-16 md:mb-24 text-center md:text-left">
              <div className="space-y-6 md:space-y-10 flex flex-col items-center md:items-start">
                <div className="flex items-center gap-4 md:gap-6 group">
                  <Logo className="w-12 h-12 md:w-20 md:h-20 transition-transform group-hover:rotate-12" />
                  <div className="flex flex-col text-left">
                    <span className="font-syncopate font-black text-lg md:text-2xl tracking-tighter leading-none text-white">DARK FASHION</span>
                    <span className="font-syncopate font-black text-base md:text-xl tracking-widest text-[#F54A02] leading-none mt-1">SPORTS</span>
                  </div>
                </div>
                <p className="text-[9px] md:text-[11px] text-gray-400 leading-relaxed uppercase tracking-[0.2em] md:tracking-[0.3em] max-w-xs">
                  High Performance. Bespoke Aesthetics. Designed for the Driven. Beyond human limits since 2024.
                </p>
              </div>
              
              <div className="flex flex-col gap-6 md:gap-10 items-center md:items-start">
                <h4 className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] md:tracking-[0.6em] text-gray-400">Connectivity</h4>
                <div className="flex gap-8 md:gap-10">
                  <a href={CONTACT_DETAILS.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#F54A02] transition-all hover:scale-125">
                    <Instagram size={24} md:size={32} />
                  </a>
                  <a href={CONTACT_DETAILS.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#F54A02] transition-all hover:scale-125">
                    <Facebook size={24} md:size={32} />
                  </a>
                  <a href={`mailto:${CONTACT_DETAILS.email}`} className="text-gray-400 hover:text-[#F54A02] transition-all hover:scale-125">
                    <Mail size={24} md:size={32} />
                  </a>
                </div>
              </div>

              <div className="space-y-6 md:space-y-10 flex flex-col items-center md:items-start">
                <h4 className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] md:tracking-[0.6em] text-gray-400">The Hub</h4>
                <p className="text-xs md:text-sm font-black text-white tracking-[0.1em] md:tracking-[0.2em] leading-loose">
                  {CONTACT_DETAILS.email}<br />
                  GLOBAL PERFORMANCE HUB
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row justify-between items-center pt-10 md:pt-16 border-t border-white/10 gap-6 text-center">
              <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-[8px] md:text-[10px] uppercase font-black tracking-[0.3em] md:tracking-[0.5em] text-gray-500">
                 <a href="#" className="hover:text-[#F54A02] transition-colors">Shipping</a>
                 <a href="#" className="hover:text-[#F54A02] transition-colors">Returns</a>
                 <a href="#" className="hover:text-[#F54A02] transition-colors">Privacy</a>
              </div>
              <p className="text-[8px] md:text-[10px] text-gray-600 uppercase tracking-[0.4em] md:tracking-[0.8em] font-black">
                DARK FASHION SPORTS &copy; 2024.
              </p>
            </div>
          </div>
        </footer>

        {/* Global Ambient Glows */}
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 opacity-30 md:opacity-50">
          <div className="absolute top-[-10%] right-[-10%] w-[600px] md:w-[1200px] h-[600px] md:h-[1200px] bg-[#F54A02]/10 rounded-full blur-[150px] md:blur-[300px]"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[600px] md:w-[1200px] h-[600px] md:h-[1200px] bg-[#00d4ff]/10 rounded-full blur-[150px] md:blur-[300px]"></div>
        </div>
      </div>
    </Router>
  );
};

export default App;
