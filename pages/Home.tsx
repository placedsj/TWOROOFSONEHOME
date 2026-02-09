
import React, { useEffect, useState } from 'react';
import { useLocation } from 'wouter';
import { Shield, ArrowRight, Lock, Activity, ChevronRight, Heart } from 'lucide-react';

function Home() {
  const [, setLocation] = useLocation();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-royal-950 text-white flex flex-col items-center justify-center p-6 relative overflow-hidden font-sans">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-royal-800/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-gold-900/10 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5"></div>
      </div>

      {/* Security Interface Header */}
      <div className={`absolute top-12 left-12 flex items-center gap-4 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
        <div className="p-3 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md">
          <Shield className="text-gold-500" size={24} />
        </div>
        <div>
          <div className="text-[10px] font-black tracking-[0.4em] text-royal-400 uppercase">System Status</div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
            <span className="text-[10px] font-mono text-emerald-500 uppercase font-bold tracking-widest">Secured & Active</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl w-full relative z-10 text-center space-y-12">
        <div className={`space-y-6 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-royal-900/50 border border-royal-800 rounded-full text-[10px] font-black uppercase tracking-[0.3em] text-gold-500">
            <Lock size={12} /> Encrypted Directive V2.1
          </div>
          <h1 className="text-6xl md:text-8xl font-serif font-black leading-[0.95] tracking-tight text-white drop-shadow-2xl">
            The <span className="text-gold-500 italic">Harper</span> <br /> Baseline
          </h1>
          <p className="text-xl md:text-2xl text-royal-300 font-medium max-w-2xl mx-auto leading-relaxed">
            A architectural blueprint for a life built on <span className="text-white border-b-2 border-gold-500/50">Radical Truth</span>, Divine Stewardship, and the protection of a daughter.
          </p>
        </div>

        <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <button 
            onClick={() => setLocation('/binder')} 
            className="group relative px-10 py-5 bg-gold-600 hover:bg-gold-500 text-royal-950 font-black text-sm uppercase tracking-[0.2em] rounded-2xl transition-all duration-500 hover:shadow-[0_0_40px_rgba(245,158,11,0.4)] flex items-center gap-4 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            Access Digital Binder
            <ArrowRight className="group-hover:translate-x-2 transition-transform" size={18} />
          </button>
          
          <button className="px-10 py-5 bg-white/5 hover:bg-white/10 text-white font-bold text-sm uppercase tracking-[0.2em] rounded-2xl border border-white/10 transition-all backdrop-blur-sm flex items-center gap-4">
            Case Details <ChevronRight size={18} className="opacity-40" />
          </button>
        </div>

        {/* Dynamic Footer Data */}
        <div className={`pt-12 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <div className="space-y-1">
            <div className="text-[9px] font-black uppercase tracking-widest text-royal-500">Case ID</div>
            <div className="text-xs font-mono font-bold">FDSJ-739-2024</div>
          </div>
          <div className="space-y-1">
            <div className="text-[9px] font-black uppercase tracking-widest text-royal-500">Jurisdiction</div>
            <div className="text-xs font-mono font-bold">Quispamsis, NB</div>
          </div>
          <div className="space-y-1">
            <div className="text-[9px] font-black uppercase tracking-widest text-royal-500">Baseline Date</div>
            <div className="text-xs font-mono font-bold">11.12.2024</div>
          </div>
          <div className="space-y-1">
            <div className="text-[9px] font-black uppercase tracking-widest text-royal-500">Security</div>
            <div className="text-xs font-mono font-bold">End-to-End Truth</div>
          </div>
        </div>
      </div>

      {/* Floating Detail */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-3 opacity-20 hover:opacity-100 transition-opacity cursor-default">
        <Heart size={16} className="text-pink-500 fill-pink-500" />
        <span className="text-[10px] font-black uppercase tracking-[0.4em]">One Home • Two Roofs • One Heart</span>
      </div>
    </div>
  );
}

export default Home;
