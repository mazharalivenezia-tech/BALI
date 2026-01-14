
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldAlert, Terminal, Lock, Unlock, RefreshCcw, 
  Package, Layout, Database, Activity, Plus, Trash2, 
  Edit3, Save, Globe, Eye, Image as ImageIcon 
} from 'lucide-react';
import { MOCK_PRODUCTS } from '../constants';
import { Category } from '../types';

const Admin: React.FC = () => {
  const [logs, setLogs] = useState<string[]>([]);
  const [isLocked, setIsLocked] = useState(true);
  const [input, setInput] = useState('');
  const [activeTab, setActiveTab] = useState<'inventory' | 'site' | 'logs'>('inventory');

  // Local state for product editing
  const [products, setProducts] = useState(MOCK_PRODUCTS);
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: 0,
    category: Category.SPEED,
    color: 'blue' as 'blue' | 'red',
    image: 'https://images.unsplash.com/photo-1510566337590-2fc1f21d0faa'
  });

  // Local state for site config
  const [siteConfig, setSiteConfig] = useState({
    heroTitle: 'NEVER STAGNANT',
    heroSub: 'DARK FASHION SPORTS : BEYOND HUMAN LIMITS',
    heroImg: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018',
    matrixImg: 'https://images.unsplash.com/photo-1510566337590-2fc1f21d0faa',
    ctaImg: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5'
  });

  useEffect(() => {
    addLog('System: Security Interface Initialized.');
    addLog('Admin: Waiting for decryption key...');
  }, []);

  const addLog = (msg: string) => {
    setLogs(prev => [...prev.slice(-15), `[${new Date().toLocaleTimeString()}] ${msg}`]);
  };

  const handleAuth = () => {
    if (input.toLowerCase() === 'dreamer') {
      setIsLocked(false);
      addLog('Success: Admin session granted. Access level: OWNER.');
    } else {
      addLog('Error: Invalid security token. Access denied.');
      setInput('');
    }
  };

  const handleDeleteProduct = (id: string) => {
    setProducts(prev => prev.filter(p => p.id !== id));
    addLog(`System: Product ${id} purged from database.`);
  };

  const handleAddProduct = () => {
    const id = (products.length + 1).toString();
    setProducts(prev => [...prev, { ...newProduct, id, description: 'Custom engineered gear.' }]);
    setNewProduct({ name: '', price: 0, category: Category.SPEED, color: 'blue', image: 'https://images.unsplash.com/photo-1510566337590-2fc1f21d0faa' });
    addLog(`System: New unit ${id} deployed to global inventory.`);
  };

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen bg-[#0c0c0c]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          <div className="flex items-center gap-4">
            <div className={`p-4 rounded-2xl ${isLocked ? 'bg-[#ff0033]/20' : 'bg-[#00d4ff]/20'}`}>
               <ShieldAlert className={isLocked ? 'text-[#ff0033]' : 'text-[#00d4ff]'} size={32} />
            </div>
            <div>
              <h1 className="font-syncopate text-3xl font-black uppercase tracking-tighter">COMMAND CENTER</h1>
              <p className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-500">
                {isLocked ? 'PROTOCOL: SECURED' : 'PROTOCOL: ADMIN LEVEL ACCESS'}
              </p>
            </div>
          </div>
          
          {!isLocked && (
            <div className="flex gap-2">
              <button onClick={() => setActiveTab('inventory')} className={`px-6 py-3 rounded-xl flex items-center gap-2 text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === 'inventory' ? 'bg-white text-black' : 'bg-white/5 text-gray-400 hover:bg-white/10'}`}>
                <Package size={14} /> Inventory
              </button>
              <button onClick={() => setActiveTab('site')} className={`px-6 py-3 rounded-xl flex items-center gap-2 text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === 'site' ? 'bg-white text-black' : 'bg-white/5 text-gray-400 hover:bg-white/10'}`}>
                <Layout size={14} /> Content Studio
              </button>
              <button onClick={() => setActiveTab('logs')} className={`px-6 py-3 rounded-xl flex items-center gap-2 text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === 'logs' ? 'bg-white text-black' : 'bg-white/5 text-gray-400 hover:bg-white/10'}`}>
                <Database size={14} /> Metrics
              </button>
            </div>
          )}
        </div>

        {isLocked ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-md mx-auto py-24">
            <div className="glass-morphism p-10 rounded-[3rem] border-[#ff0033]/30 text-center space-y-8">
              <Lock size={48} className="mx-auto text-[#ff0033] animate-pulse" />
              <div className="space-y-2">
                <h3 className="font-syncopate text-xl font-bold">TERMINAL LOCKED</h3>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest font-black italic">Enter Authorization Key to Proceed</p>
              </div>
              <div className="space-y-4">
                <input 
                  type="password" 
                  className="w-full bg-black/50 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-[#ff0033] text-center tracking-[1em]"
                  placeholder="••••••••"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleAuth()}
                />
                <button onClick={handleAuth} className="w-full py-4 bg-white text-black font-black uppercase text-xs tracking-[0.5em] rounded-2xl hover:bg-[#ff0033] hover:text-white transition-all">
                  AUTHORIZE
                </button>
                <p className="text-[8px] text-gray-700 font-bold uppercase tracking-widest italic">Hint: 'dreamer'</p>
              </div>
            </div>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            
            {/* Main Workspace */}
            <div className="lg:col-span-3 space-y-8">
              
              <AnimatePresence mode="wait">
                {activeTab === 'inventory' && (
                  <motion.div key="inv" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="space-y-8">
                    {/* New Product Form */}
                    <div className="glass-morphism p-8 rounded-[2rem] border-white/5">
                      <h3 className="text-sm font-black uppercase tracking-[0.4em] mb-8 flex items-center gap-3">
                        <Plus size={18} className="text-[#00d4ff]" /> Deploy New Unit
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <input type="text" placeholder="Unit Name" value={newProduct.name} onChange={e => setNewProduct({...newProduct, name: e.target.value})} className="bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-[#00d4ff] outline-none" />
                        <input type="number" placeholder="Cost ($)" value={newProduct.price || ''} onChange={e => setNewProduct({...newProduct, price: Number(e.target.value)})} className="bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-[#00d4ff] outline-none" />
                        <select value={newProduct.category} onChange={e => setNewProduct({...newProduct, category: e.target.value as any})} className="bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-[#00d4ff] outline-none">
                          {Object.values(Category).map(c => <option key={c} value={c}>{c}</option>)}
                        </select>
                        <select value={newProduct.color} onChange={e => setNewProduct({...newProduct, color: e.target.value as any})} className="bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-[#00d4ff] outline-none">
                          <option value="blue">VOLT BLUE</option>
                          <option value="red">NITRO RED</option>
                        </select>
                        <input type="text" placeholder="Image URL" value={newProduct.image} onChange={e => setNewProduct({...newProduct, image: e.target.value})} className="md:col-span-2 bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-[#00d4ff] outline-none" />
                      </div>
                      <button onClick={handleAddProduct} className="mt-8 w-full py-4 bg-[#00d4ff] text-black font-black uppercase text-[10px] tracking-[0.5em] rounded-xl hover:scale-[1.01] transition-all">
                        SYNCHRONIZE TO GLOBAL DATABASE
                      </button>
                    </div>

                    {/* Product List */}
                    <div className="glass-morphism rounded-[2rem] border-white/5 overflow-hidden">
                      <div className="p-8 border-b border-white/5 flex justify-between items-center">
                         <h3 className="text-sm font-black uppercase tracking-[0.4em]">Active Inventory</h3>
                         <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{products.length} UNITS TRACKED</span>
                      </div>
                      <div className="divide-y divide-white/5">
                        {products.map((p) => (
                          <div key={p.id} className="p-6 flex items-center justify-between hover:bg-white/5 transition-colors group">
                             <div className="flex items-center gap-6">
                                <div className="w-16 h-16 rounded-xl overflow-hidden border border-white/10">
                                   <img src={p.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" alt={p.name} />
                                </div>
                                <div>
                                   <h4 className="font-bold text-white uppercase text-sm">{p.name}</h4>
                                   <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">${p.price} | {p.category}</p>
                                </div>
                             </div>
                             <div className="flex gap-4 opacity-40 group-hover:opacity-100 transition-all">
                                <button className="p-3 bg-white/5 rounded-xl hover:bg-white/10 hover:text-[#00d4ff]"><Edit3 size={16} /></button>
                                <button onClick={() => handleDeleteProduct(p.id)} className="p-3 bg-white/5 rounded-xl hover:bg-[#ff0033]/20 hover:text-[#ff0033]"><Trash2 size={16} /></button>
                             </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'site' && (
                  <motion.div key="site" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="space-y-8">
                    <div className="glass-morphism p-8 rounded-[2rem] border-white/5 space-y-12">
                       <h3 className="text-sm font-black uppercase tracking-[0.4em] mb-8 flex items-center gap-3">
                          <Layout size={18} className="text-[#ff0033]" /> Home Page Core Protocol
                       </h3>
                       
                       <div className="space-y-8">
                          <div className="grid md:grid-cols-2 gap-8">
                             <div className="space-y-2">
                                <label className="text-[9px] font-black uppercase tracking-widest text-gray-500 ml-2 italic">Main Hero Headline</label>
                                <input type="text" value={siteConfig.heroTitle} onChange={e => setSiteConfig({...siteConfig, heroTitle: e.target.value})} className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-xl font-bold outline-none focus:border-[#ff0033]" />
                             </div>
                             <div className="space-y-2">
                                <label className="text-[9px] font-black uppercase tracking-widest text-gray-500 ml-2 italic">Hero Sub-Directive</label>
                                <input type="text" value={siteConfig.heroSub} onChange={e => setSiteConfig({...siteConfig, heroSub: e.target.value})} className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-sm outline-none focus:border-[#ff0033]" />
                             </div>
                          </div>

                          <div className="space-y-6">
                             <h4 className="text-[10px] font-black uppercase tracking-widest border-b border-white/5 pb-2 italic">Kinetic Background Assets</h4>
                             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="space-y-4">
                                   <div className="aspect-video rounded-xl overflow-hidden border border-white/10">
                                      <img src={siteConfig.heroImg} className="w-full h-full object-cover" alt="Hero Asset" />
                                   </div>
                                   <input type="text" value={siteConfig.heroImg} onChange={e => setSiteConfig({...siteConfig, heroImg: e.target.value})} className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-2 text-[10px] outline-none focus:border-[#00d4ff]" />
                                </div>
                                <div className="space-y-4">
                                   <div className="aspect-video rounded-xl overflow-hidden border border-white/10">
                                      <img src={siteConfig.matrixImg} className="w-full h-full object-cover" alt="Matrix Asset" />
                                   </div>
                                   <input type="text" value={siteConfig.matrixImg} onChange={e => setSiteConfig({...siteConfig, matrixImg: e.target.value})} className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-2 text-[10px] outline-none focus:border-[#00d4ff]" />
                                </div>
                                <div className="space-y-4">
                                   <div className="aspect-video rounded-xl overflow-hidden border border-white/10">
                                      <img src={siteConfig.ctaImg} className="w-full h-full object-cover" alt="CTA Asset" />
                                   </div>
                                   <input type="text" value={siteConfig.ctaImg} onChange={e => setSiteConfig({...siteConfig, ctaImg: e.target.value})} className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-2 text-[10px] outline-none focus:border-[#00d4ff]" />
                                </div>
                             </div>
                          </div>
                       </div>

                       <button onClick={() => addLog('System: Site protocol synchronized successfully.')} className="w-full py-6 bg-white text-black font-black uppercase text-[10px] tracking-[0.5em] rounded-2xl flex items-center justify-center gap-4 hover:bg-[#ff0033] hover:text-white transition-all">
                          PUSH TO PRODUCTION <Save size={18} />
                       </button>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'logs' && (
                  <motion.div key="logs" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="space-y-8">
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="glass-morphism p-8 rounded-[2rem] border-white/5 flex items-center justify-between">
                           <div>
                              <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-1">Global Revenue</p>
                              <h4 className="text-3xl font-black italic">$284,912.00</h4>
                           </div>
                           <Activity className="text-[#00d4ff]" size={40} />
                        </div>
                        <div className="glass-morphism p-8 rounded-[2rem] border-white/5 flex items-center justify-between">
                           <div>
                              <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-1">Active Agents</p>
                              <h4 className="text-3xl font-black italic">1,402</h4>
                           </div>
                           <Globe className="text-[#ff0033]" size={40} />
                        </div>
                     </div>
                     <div className="glass-morphism p-10 rounded-[2.5rem] border-white/5 text-center py-24 border-dashed border-2">
                        <Database size={48} className="mx-auto text-gray-700 mb-6" />
                        <h3 className="font-syncopate text-xl font-bold text-gray-500">REAL-TIME DATA LINK OFFLINE</h3>
                        <p className="text-[10px] uppercase font-black tracking-widest text-gray-700 mt-2 italic">Connect Backend Cloud for Live Metrics</p>
                     </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Sidebar Stats & Logs */}
            <div className="space-y-8">
               <div className="glass-morphism p-6 rounded-[2rem] border-white/5 space-y-6">
                  <div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-2">
                     <Terminal size={14} className="text-[#00d4ff]" />
                     <span className="text-[10px] font-black uppercase tracking-widest">Console Output</span>
                  </div>
                  <div className="space-y-2 font-mono text-[9px] h-[300px] overflow-y-auto custom-scrollbar">
                    {logs.map((log, i) => (
                      <p key={i} className={log.includes('Error') ? 'text-red-500' : log.includes('Success') ? 'text-green-500' : 'text-blue-400'}>
                        {log}
                      </p>
                    ))}
                    <p className="animate-pulse text-[#00d4ff]">_</p>
                  </div>
               </div>

               <div className="glass-morphism p-6 rounded-[2rem] border-white/5">
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="text-[10px] font-black uppercase tracking-widest">System Health</h4>
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between text-[9px] font-bold uppercase mb-2">
                        <span>CPU Load</span>
                        <span className="text-[#00d4ff]">14%</span>
                      </div>
                      <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full bg-[#00d4ff] w-[14%]"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-[9px] font-bold uppercase mb-2">
                        <span>Net Latency</span>
                        <span className="text-[#ff0033]">12ms</span>
                      </div>
                      <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full bg-[#ff0033] w-[12%]"></div>
                      </div>
                    </div>
                  </div>
                  <button className="mt-8 w-full py-3 bg-white/5 border border-white/10 rounded-xl text-[8px] font-black uppercase tracking-[0.4em] hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                     <RefreshCcw size={12} /> Sync Nodes
                  </button>
               </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #1a1a1a; border-radius: 2px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #333; }
      `}</style>
    </div>
  );
};

export default Admin;
