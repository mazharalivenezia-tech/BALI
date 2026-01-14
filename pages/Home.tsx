import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Zap, Activity, FastForward, Repeat, TrendingUp, Cpu, Shield, Layers, Quote, ArrowRight, Calendar, User, MessageSquare, Globe, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MOCK_PRODUCTS, MOCK_BLOGS } from '../constants';

const Home: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div ref={containerRef} className="w-full bg-black overflow-hidden selection:bg-[#ff0033] selection:text-white">
      
      {/* 1. CINEMATIC HERO (Image 1 Architecture) */}
      <section className="relative h-screen flex items-center px-6 md:px-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=3000&auto=format&fit=crop" 
            className="w-full h-full object-cover grayscale brightness-[0.4]"
            alt="Hero Background"
          />
          <div className="absolute inset-0 hero-gradient"></div>
        </div>

        <div className="relative z-10 max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 mb-8"
          >
            <span className="text-[#ff0033] font-syncopate text-xs md:text-lg font-black italic tracking-widest uppercase">Welcome to Dark Fashion</span>
            <div className="w-12 h-[1px] bg-[#ff0033]"></div>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-syncopate text-[clamp(2.5rem,9.5vw,11rem)] font-bold text-white leading-[0.85] uppercase italic tracking-tighter"
          >
            Power up <br />
            <span className="text-white">your game,</span> <br />
            <span className="text-white/30">End-to-End</span>
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.8 }}
            className="mt-12"
          >
             <Link to="/products" className="group inline-flex items-center gap-6 px-12 py-6 bg-[#ff0033] text-white rounded-full font-syncopate font-black uppercase text-xs tracking-widest hover:bg-white hover:text-black transition-all">
                GEAR UP NOW <ChevronRight size={18} />
             </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. STATS SECTION (Image 2 Architecture) */}
      <section className="py-40 px-6 md:px-24 bg-black border-y border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="lg:w-1/3">
            <h4 className="text-gray-500 font-syncopate text-sm md:text-xl font-bold uppercase tracking-[0.4em] italic leading-relaxed">
               Numbers That <br /> Speak Volumes
            </h4>
          </div>
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-20">
            {[
              { val: '173M+', label: 'Performance Units' },
              { val: '1.5K+', label: 'Elite Athletes' },
              { val: '2.3K+', label: 'Crew Network' }
            ].map((stat, i) => (
              <div key={i} className="text-center md:text-left group">
                <h3 className="text-7xl md:text-8xl font-black font-syncopate italic leading-none mb-4 group-hover:text-[#ff0033] transition-colors">{stat.val}</h3>
                <p className="text-[#ff0033] font-syncopate text-[10px] md:text-xs font-black uppercase tracking-[0.6em] italic">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CURVED SPLIT ABOUT (Image 3 & 4 Architecture) */}
      <section className="relative min-h-screen py-32 flex items-center overflow-hidden bg-black">
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-0">
          <div className="relative h-[60vh] lg:h-[90vh] flex items-center">
             <div className="absolute inset-0 p-6 lg:p-12">
                <div className="relative w-full h-full rounded-[4rem] overflow-hidden group">
                   <img src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=2400&auto=format&fit=crop" className="w-full h-full object-cover grayscale brightness-[0.4] group-hover:grayscale-0 transition-all duration-1000" alt="Action" />
                   <div className="absolute bottom-16 left-16">
                      <h3 className="font-syncopate text-7xl md:text-9xl font-black text-white italic drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">BRING FORCE</h3>
                   </div>
                </div>
             </div>
          </div>
          <div className="bg-white curved-mask-right py-32 px-12 lg:px-24 flex flex-col justify-center text-black">
            <span className="text-[#ff0033] font-syncopate text-xs font-black uppercase tracking-widest mb-8 block italic">About Dark Fashion</span>
            <h2 className="font-syncopate text-4xl lg:text-7xl font-bold italic leading-[1.1] mb-10 uppercase tracking-tighter">
              Revolutionizing <br /> Performance. <br /><span className="text-[#ff0033]">One Kit.</span>
            </h2>
            <p className="text-gray-600 text-lg md:text-2xl font-light leading-relaxed mb-12 max-w-xl italic">
              Our innovative platform converges cutting-edge technology and creative expertise to deliver seamless, end-to-end event-level sports apparel.
            </p>
            <Link to="/about" className="inline-flex items-center justify-center px-12 py-6 border-2 border-black text-black rounded-full font-syncopate font-black uppercase text-xs tracking-widest hover:bg-[#ff0033] hover:border-[#ff0033] hover:text-white transition-all w-fit">
              Explore Our DNA
            </Link>
          </div>
        </div>
      </section>

      {/* 4. THE MATRIX (Image 5 Architecture) */}
      <section className="py-40 bg-black relative px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center justify-center text-center mb-40">
             <h2 className="font-syncopate text-7xl md:text-[14rem] font-black uppercase italic leading-[0.7] tracking-tighter mb-4">
                Why <br /> Dark <br /> <span className="text-outline">Fashion?</span>
             </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-24 items-center">
             {/* Left Column 01, 02 */}
             <div className="space-y-32">
                {[
                  { id: '01.', title: 'All-in-One Solution', desc: 'We simplify athletic lifecycle management by consolidating critical gear—training, matchday, and recovery—into a single performance platform.' },
                  { id: '02.', title: 'Digital Impact', desc: 'Harness the power of technical fibers to streamline movement, boost efficiency, and deliver an immersive field presence.' }
                ].map(item => (
                  <div key={item.id} className="group">
                    <div className="flex items-end gap-6 mb-6">
                      <span className="text-6xl md:text-8xl font-syncopate font-black italic leading-none">{item.id}</span>
                      <h3 className="text-xl md:text-3xl font-syncopate font-black text-[#ff0033] italic uppercase leading-none">{item.title}</h3>
                    </div>
                    <div className="h-[2px] w-full bg-white/10 mb-8"></div>
                    <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-md italic">{item.desc}</p>
                  </div>
                ))}
             </div>

             {/* Center Image */}
             <div className="relative flex justify-center py-20 lg:py-0">
                <div className="relative z-10 w-full max-w-lg aspect-square rounded-full border-2 border-white/5 p-4 flex items-center justify-center">
                   <div className="w-full h-full rounded-full overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(255,0,51,0.2)]">
                      <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover grayscale" alt="Athlete" />
                   </div>
                </div>
                {/* Floating HUD Elements */}
                <div className="absolute top-0 right-0 p-8 glass-morphism rounded-3xl border border-white/10 z-20 animate-bounce">
                   <TrendingUp className="text-[#00d4ff]" size={32} />
                </div>
             </div>

             {/* Right Column 03, 04, 05 */}
             <div className="space-y-32">
                {[
                  { id: '03.', title: 'Broad Engagement', desc: 'Designed to maximize visibility through personalized technical storytelling and creative biometrics.' },
                  { id: '04.', title: 'Brand Presence', desc: 'Create an irresistible narrative for sponsors. Dark Fashion ensures enhanced visibility and ROI for teams.' },
                  { id: '05.', title: 'CRM & METRICS', desc: 'Leverage advanced biometric tools to track athlete data, understand behaviors, and measure output effectively.' }
                ].map(item => (
                  <div key={item.id} className="group">
                    <div className="flex items-end gap-6 mb-6">
                      <span className="text-6xl md:text-8xl font-syncopate font-black italic leading-none">{item.id}</span>
                      <h3 className="text-xl md:text-3xl font-syncopate font-black text-[#ff0033] italic uppercase leading-none">{item.title}</h3>
                    </div>
                    <div className="h-[2px] w-full bg-white/10 mb-8"></div>
                    <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-md italic">{item.desc}</p>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* 5. ARSENAL & SERVICES (Image 6 & 7 Architecture) */}
      <section className="py-40 relative px-6 bg-[#0a0a0a]">
         <div className="absolute inset-0 opacity-10 grayscale">
            <img src="https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=2400&auto=format&fit=crop" className="w-full h-full object-cover" alt="Detail" />
         </div>
         <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-32">
               <span className="text-[#ff0033] font-syncopate text-sm font-black uppercase tracking-[0.8em] italic mb-8 block">Performance Features</span>
               <h2 className="font-syncopate text-5xl md:text-9xl font-black text-outline uppercase italic tracking-tighter">OUR PROGRAM & SERVICES</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
               {[
                 { title: 'End-to-End Gear (E2E)', desc: 'A comprehensive model that supports every stage of the game, from warmups to championships.', icon: <Layers /> },
                 { title: 'Registration Lab', desc: 'A seamless, secure system for athlete onboarding and instant technical profiling.', icon: <Activity /> },
                 { title: 'Velotales Content', desc: 'Unique storytelling services that highlight performance with emotional depth and technical rigor.', icon: <Repeat /> },
                 { title: 'Field Blogposts', desc: 'Delivers expertly researched articles providing insightful info on the latest sports trends.', icon: <TrendingUp /> },
                 { title: 'Direct Messaging', desc: 'Personalized campaigns to engage scouts and drive better communication with global clubs.', icon: <Zap /> },
                 { title: 'Social Integration', desc: 'Amplify your reach and resonance through targeted social strategies and elite media.', icon: <Cpu /> }
               ].map((service, i) => (
                 <div key={i} className="glass-morphism p-12 rounded-[3rem] hover:bg-white/5 transition-all group border-white/5 hover:border-[#ff0033]/30">
                    <div className="text-[#ff0033] mb-10 w-16 h-16 flex items-center justify-center bg-white/5 rounded-2xl group-hover:scale-110 transition-transform">{service.icon}</div>
                    <h3 className="font-syncopate text-2xl font-black mb-6 italic uppercase tracking-tighter">{service.title}</h3>
                    <p className="text-gray-500 font-light leading-relaxed text-lg italic">{service.desc}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* 6. USP SECTION (Image 8 Architecture) */}
      <section className="py-40 bg-black px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24">
           <div className="space-y-6">
              <span className="text-[#ff0033] font-syncopate text-xs font-black uppercase tracking-widest italic">Our USPs</span>
              <h2 className="font-syncopate text-5xl md:text-8xl font-black text-white italic uppercase leading-[0.9] tracking-tighter">Creative <br /> <span className="text-outline">Decks for</span> <br /> Results.</h2>
           </div>
           <div className="flex flex-col justify-center space-y-8">
              <h3 className="font-syncopate text-4xl md:text-6xl font-black text-outline uppercase italic">Enhanced Value for Brands</h3>
              <p className="text-gray-400 text-lg md:text-2xl font-light leading-relaxed italic">
                 Our integrated approach guarantees superior visibility and engagement, maximizing value for every associated athlete and brand.
              </p>
           </div>
        </div>
      </section>

      {/* 7. QUOTE PHASE (Image 9 Architecture) */}
      <section className="py-60 px-6 bg-neutral-900 flex items-center justify-center text-center relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full grayscale opacity-20 pointer-events-none">
            <img src="https://images.unsplash.com/photo-1510566337590-2fc1f21d0faa?q=80&w=2400&auto=format&fit=crop" className="w-full h-full object-cover" alt="Texture" />
         </div>
         <div className="max-w-6xl relative z-10">
            <div className="mb-16 inline-block opacity-20"><Quote size={120} /></div>
            <h2 className="font-syncopate text-3xl md:text-6xl font-bold italic uppercase leading-tight tracking-tighter">
               The Game-Changing Digital Backbone for an Athlete that Elevates Experiences, Amplifies Engagement, and Drives Unmatched Results through Cutting-Edge Technology, Expert Insights, and Proven Strategies.
            </h2>
         </div>
      </section>

      {/* 8. LATEST ARTICLES (Image 10 Architecture) */}
      <section className="py-40 bg-black px-6">
         <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
               <div className="space-y-4">
                  <span className="text-[#ff0033] font-syncopate text-xs font-black uppercase tracking-[0.6em] italic block">Our Blog</span>
                  <h2 className="font-syncopate text-4xl md:text-8xl font-black text-outline uppercase italic tracking-tighter leading-none">LATEST BLOG & ARTICLES</h2>
               </div>
               <Link to="/blog" className="px-10 py-5 border border-white/20 rounded-full font-syncopate font-black uppercase text-[10px] tracking-widest hover:bg-white hover:text-black transition-all">View All</Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
               {MOCK_BLOGS.concat(MOCK_BLOGS).slice(0, 3).map((blog, idx) => (
                 <div key={idx} className="glass-morphism rounded-[3rem] overflow-hidden flex flex-col group border-white/5 hover:border-[#ff0033]/40 transition-all">
                    <div className="aspect-[16/10] overflow-hidden relative">
                       <img src={blog.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt={blog.title} />
                       <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                       <div className="absolute top-8 left-8">
                          <div className="px-4 py-2 glass-morphism rounded-full">
                             <span className="text-[10px] font-black uppercase tracking-widest text-[#ff0033] italic">Report ID: 0{idx+1}</span>
                          </div>
                       </div>
                    </div>
                    <div className="p-10 flex flex-col flex-grow">
                       <div className="flex items-center gap-6 text-gray-500 text-[10px] font-black uppercase tracking-widest mb-8 italic">
                          <span className="flex items-center gap-2"><Calendar size={12} /> {blog.date}</span>
                          <span className="flex items-center gap-2 uppercase tracking-widest">No Comments</span>
                       </div>
                       <h3 className="font-syncopate text-2xl font-black text-white italic mb-8 leading-tight group-hover:text-[#ff0033] transition-colors uppercase tracking-tighter">
                          {blog.title}
                       </h3>
                       <p className="text-gray-500 font-light leading-relaxed mb-10 line-clamp-3 italic text-lg">
                          Empower Your Game with Dark Fashion: The Ultimate Event Performance Management Platform. Seamless Execution.
                       </p>
                       <Link to={`/blog`} className="mt-auto flex items-center gap-3 text-[#ff0033] font-black uppercase text-[10px] tracking-[0.5em] group/btn italic">
                          Read More <ArrowRight size={14} className="group-hover/btn:translate-x-2 transition-transform" />
                       </Link>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      <style>{`
        @keyframes spin-slow {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 25s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;