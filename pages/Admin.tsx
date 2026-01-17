import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, Package, Layout, Database, Activity, Plus, Trash2, 
  Save, Image as ImageIcon, Check, Upload, X, Terminal
} from 'lucide-react';
import { MOCK_PRODUCTS } from '../constants';
import { Category, CATEGORY_MAP, Product } from '../types';

const Admin: React.FC = () => {
  const [isLocked, setIsLocked] = useState(true);
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState<'inventory' | 'metrics'>('inventory');
  const [products, setProducts] = useState<Product[]>(MOCK_PRODUCTS as Product[]);
  const [logs, setLogs] = useState<string[]>(['System Ready. Initializing Secure Node...']);
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  const colors = ['Stealth Black', 'Magma Orange', 'Pure White', 'Matte Grey', 'Carbon Grey'];
  const sizes = ['S', 'M', 'L', 'XL', 'XXL'];

  const [form, setForm] = useState({
    name: '',
    price: 0,
    category: Category.BALL_TEAM,
    subCategory: CATEGORY_MAP[Category.BALL_TEAM][0],
    availableColors: [] as string[],
    availableSizes: [] as string[],
    image: '',
    description: '',
    color: 'magma' as 'magma' | 'obsidian'
  });

  const addLog = (msg: string) => setLogs(prev => [`[${new Date().toLocaleTimeString()}] ${msg}`, ...prev].slice(0, 10));

  const handleLogin = () => {
    if (password === 'Pakistan1947@') {
      setIsLocked(false);
      addLog('Access Granted. Welcome, Admin.');
    } else {
      addLog('Access Denied. Invalid Protocol.');
      setPassword('');
    }
  };

  const deployProduct = () => {
    if (!form.name || !form.price) return addLog('Deployment Error: Incomplete Fields.');
    const newId = Date.now().toString();
    setProducts([{ ...form, id: newId } as Product, ...products]);
    setForm({
      name: '', price: 0, category: Category.BALL_TEAM, subCategory: CATEGORY_MAP[Category.BALL_TEAM][0],
      availableColors: [], availableSizes: [], image: '', description: '', color: 'magma'
    });
    addLog(`Unit ${form.name} synced to global node.`);
  };

  if (isLocked) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#050505] p-6">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="w-full max-w-md glass-morphism p-12 rounded-[2rem] border-white/5 text-center">
          <ShieldCheck size={48} className="mx-auto text-[#FF4500] mb-8" />
          <h2 className="font-syncopate text-xl font-bold text-white mb-2">SYSTEM_SECURED</h2>
          <p className="text-[10px] uppercase tracking-[0.4em] text-gray-500 mb-10">Verification Required</p>
          <input 
            type="password" 
            value={password} 
            onChange={e => setPassword(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleLogin()}
            className="w-full bg-black/40 border border-white/10 rounded-xl py-5 px-6 text-center text-white outline-none focus:border-[#FF4500] mb-6 tracking-widest"
            placeholder="••••••••"
          />
          <button onClick={handleLogin} className="w-full py-5 bg-[#FF4500] text-white font-black uppercase text-[10px] tracking-[0.4em] rounded-xl hover:brightness-125 transition-all">
            AUTHORIZE_LINK
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-16">
          <div className="flex items-center gap-6">
            <div className="p-4 bg-[#FF4500]/10 rounded-2xl border border-[#FF4500]/20">
              <Activity className="text-[#FF4500]" />
            </div>
            <h1 className="font-syncopate text-2xl font-bold text-white">COMMAND_CENTER</h1>
          </div>
          <div className="flex p-1 bg-white/5 rounded-xl border border-white/5">
            <button onClick={() => setActiveTab('inventory')} className={`px-8 py-3 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === 'inventory' ? 'bg-[#FF4500] text-white' : 'text-gray-500 hover:text-white'}`}>Inventory</button>
            <button onClick={() => setActiveTab('metrics')} className={`px-8 py-3 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === 'metrics' ? 'bg-[#FF4500] text-white' : 'text-gray-500 hover:text-white'}`}>Metrics</button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">
            <section className="glass-morphism p-10 rounded-[2.5rem] border-white/5">
              <h2 className="text-xs font-black uppercase tracking-[0.4em] text-white mb-10 flex items-center gap-3 italic">
                <Plus size={16} className="text-[#FF4500]" /> Deploy New Asset
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-[9px] font-black text-gray-600 uppercase tracking-widest ml-2">Product Name</label>
                    <input value={form.name} onChange={e => setForm({...form, name: e.target.value})} type="text" className="w-full bg-black/40 border border-white/5 rounded-xl px-5 py-4 text-white focus:border-[#FF4500] outline-none" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[9px] font-black text-gray-600 uppercase tracking-widest ml-2">Base Price</label>
                      <input value={form.price || ''} onChange={e => setForm({...form, price: Number(e.target.value)})} type="number" className="w-full bg-black/40 border border-white/5 rounded-xl px-5 py-4 text-white focus:border-[#FF4500] outline-none" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[9px] font-black text-gray-600 uppercase tracking-widest ml-2">Theme</label>
                      <select value={form.color} onChange={e => setForm({...form, color: e.target.value as any})} className="w-full bg-black/40 border border-white/5 rounded-xl px-5 py-4 text-white focus:border-[#FF4500] outline-none">
                        <option value="magma">Magma</option>
                        <option value="obsidian">Obsidian</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] font-black text-gray-600 uppercase tracking-widest ml-2">Sector</label>
                    <select value={form.category} onChange={e => setForm({...form, category: e.target.value as Category, subCategory: CATEGORY_MAP[e.target.value as Category][0]})} className="w-full bg-black/40 border border-white/5 rounded-xl px-5 py-4 text-white focus:border-[#FF4500] outline-none">
                      {Object.values(Category).map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>
                </div>
                <div className="space-y-6">
                   <div className="space-y-4">
                    <label className="text-[9px] font-black text-gray-600 uppercase tracking-widest">Attributes</label>
                    <div className="flex flex-wrap gap-2">
                      {colors.map(c => (
                        <button key={c} className={`px-4 py-2 rounded-lg text-[9px] font-bold border ${form.availableColors.includes(c) ? 'bg-[#FF4500] border-[#FF4500] text-white' : 'bg-white/5 border-white/5 text-gray-600'}`}>{c}</button>
                      ))}
                    </div>
                  </div>
                  <textarea rows={4} value={form.description} onChange={e => setForm({...form, description: e.target.value})} className="w-full bg-black/40 border border-white/5 rounded-xl px-5 py-4 text-white focus:border-[#FF4500] outline-none text-xs" placeholder="Technical Description..." />
                </div>
              </div>
              <button onClick={deployProduct} className="w-full mt-10 py-6 bg-[#FF4500] text-white font-black uppercase text-[10px] tracking-[0.5em] rounded-xl hover:brightness-110 shadow-xl flex items-center justify-center gap-4">
                SYNC_ASSET_TO_LIVE <Save size={18} />
              </button>
            </section>

            <div className="glass-morphism rounded-[2.5rem] border-white/5 overflow-hidden">
              <div className="divide-y divide-white/5">
                {products.map(p => (
                  <div key={p.id} className="p-8 flex items-center justify-between group">
                    <div className="flex items-center gap-8">
                      <div className="w-12 h-16 rounded-xl overflow-hidden bg-black/50 border border-white/5 shrink-0"><img src={p.image} className="w-full h-full object-cover grayscale opacity-40 group-hover:opacity-100 transition-all" /></div>
                      <div>
                        <h4 className="font-bold text-white uppercase text-sm">{p.name}</h4>
                        <p className="text-[9px] text-gray-600 font-bold uppercase tracking-widest mt-1 italic">{p.category}</p>
                      </div>
                    </div>
                    <button onClick={() => setProducts(products.filter(pr => pr.id !== p.id))} className="text-gray-700 hover:text-[#FF4500] transition-colors"><Trash2 size={16} /></button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-10">
            <div className="glass-morphism p-8 rounded-[2rem] border-white/5">
              <h3 className="text-[9px] font-black uppercase tracking-widest text-white mb-6 flex items-center gap-3 italic">
                <Terminal size={14} className="text-[#FF4500]" /> System Log
              </h3>
              <div className="space-y-4 font-mono text-[9px]">
                {logs.map((log, i) => <p key={i} className={i === 0 ? 'text-[#FF4500]' : 'text-gray-700'}>{log}</p>)}
                <div className="w-2 h-4 bg-[#FF4500] animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;