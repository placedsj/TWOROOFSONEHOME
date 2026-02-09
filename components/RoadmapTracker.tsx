
import React, { useState, useEffect } from 'react';
import { calculateSunriseProgress, calculateJubileeGraceValue, calculateJaneBlock } from '../lib/milestoneCalculators';
import { Sun, Lock, ShieldCheck, Clock, TrendingDown, ChevronRight, Zap } from 'lucide-react';

export const RoadmapTracker = () => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const sunrise = calculateSunriseProgress();
  const jubilee = calculateJubileeGraceValue(sunrise.percentage);
  const janeBlock = calculateJaneBlock();

  return (
    <div className="space-y-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h3 className="text-xs font-black text-gold-600 uppercase tracking-[0.4em] mb-2">Roadmap to Freedom</h3>
          <h2 className="text-4xl font-serif font-black text-royal-900 tracking-tight">The Sunrise Protocol</h2>
        </div>
        <div className="flex flex-col items-end">
          <div className="text-[10px] font-black text-slate-400 tracking-widest uppercase mb-1">Target Convergence</div>
          <div className="px-4 py-2 bg-royal-900 text-white rounded-xl font-mono font-bold text-sm shadow-xl shadow-royal-900/20">
            MARCH 01, 2028
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 p-10 rounded-[2.5rem] border-2 border-royal-900 bg-royal-950 text-white shadow-2xl relative overflow-hidden group min-h-[320px] flex flex-col justify-between">
          <Sun className="absolute -right-12 -top-12 text-gold-500 opacity-10 w-64 h-64 group-hover:rotate-45 group-hover:scale-110 transition-all duration-1000 ease-out" />
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
               <div className="p-2 bg-gold-600 rounded-lg shadow-lg shadow-gold-600/20">
                 <Zap className="text-white" size={20} fill="currentColor" />
               </div>
               <span className="text-[10px] font-black text-gold-400 tracking-[0.3em] uppercase">
                 Automatic Transition Trigger
               </span>
            </div>
            <div className="text-5xl font-serif font-black text-white mb-2 tracking-tight">
              {sunrise.monthsRemaining} <span className="text-2xl text-royal-300 font-medium">Months Left</span>
            </div>
            <p className="text-royal-400 font-medium max-w-sm text-sm">Countdown until full 50/50 Shared Parenting & Joint Custody becomes the permanent family standard.</p>
          </div>

          <div className="mt-12 space-y-4 relative z-10">
            <div className="flex justify-between items-end">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-royal-300">Phase Completion Rate</span>
              <span className="text-4xl font-mono font-black text-gold-500">{sunrise.percentage}%</span>
            </div>
            <div className="h-4 bg-royal-900 rounded-full overflow-hidden border border-white/5 shadow-inner">
              <div 
                className="h-full bg-gradient-to-r from-gold-700 via-gold-500 to-gold-400 transition-all duration-1000 ease-out relative"
                style={{ width: `${sunrise.percentage}%` }}
              >
                  <div className="absolute right-0 top-0 bottom-0 w-1 bg-white opacity-40 shadow-[0_0_15px_white] animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-10 rounded-[2.5rem] border border-slate-100 bg-white shadow-xl shadow-royal-900/5 flex flex-col justify-between group overflow-hidden relative">
           <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-full -translate-y-16 translate-x-16 transition-transform group-hover:scale-110 duration-700"></div>
           <div className="relative z-10">
              <div className="flex items-center gap-2 mb-6 text-slate-400">
                 <TrendingDown size={20} className="text-emerald-500" />
                 <span className="text-[10px] font-black uppercase tracking-[0.3em]">Jubilee Grace Value</span>
              </div>
              <div className="text-5xl font-serif font-black text-slate-900 tracking-tighter">
                 ${jubilee.remaining.toLocaleString()}
              </div>
              <div className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-2">
                 Remaining Legal Debt
              </div>
           </div>
           
           <div className="mt-10 pt-10 border-t border-slate-100 relative z-10">
              <div className="flex justify-between items-center mb-1">
                 <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">Equity Earned</span>
                 <span className="font-mono font-black text-emerald-600">+${jubilee.earned.toLocaleString()}</span>
              </div>
              <p className="text-[9px] text-slate-400 font-medium">Value of legal fees waived through verified compliance to date.</p>
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         <div className="p-8 rounded-3xl border border-slate-100 bg-white shadow-lg flex items-center gap-6 group hover:border-emerald-200 transition-all">
            <div className={`p-5 rounded-2xl transition-all duration-500 ${janeBlock.isComplete ? 'bg-emerald-100 text-emerald-600 rotate-12' : 'bg-royal-100 text-royal-600'}`}>
               {janeBlock.isComplete ? <ShieldCheck size={32} /> : <Clock size={32} />}
            </div>
            <div className="flex-1 space-y-3">
               <div className="flex justify-between items-center">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Jane Block Protocol</span>
                  <span className={`text-[10px] font-black px-2 py-1 rounded-lg ${janeBlock.isComplete ? 'bg-emerald-500 text-white' : 'bg-royal-900 text-white'}`}>
                    {janeBlock.isComplete ? "COMPLETED" : `${janeBlock.daysRemaining} DAYS`}
                  </span>
               </div>
               <div className="h-2 bg-slate-50 rounded-full overflow-hidden border border-slate-100">
                  <div 
                    className={`h-full transition-all duration-1000 ${janeBlock.isComplete ? 'bg-emerald-500' : 'bg-royal-600'}`} 
                    style={{ width: `${janeBlock.percentage}%` }}
                  />
               </div>
               <p className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">Maternal Autonomy Establishment Phase</p>
            </div>
         </div>

         <div className="p-8 rounded-3xl border border-gold-200 bg-gold-50/50 flex items-center gap-6 group hover:bg-gold-50 transition-all">
            <div className="p-5 rounded-2xl bg-white text-gold-600 border border-gold-200 shadow-lg group-hover:scale-110 transition-transform">
               <Lock size={32} />
            </div>
            <div className="space-y-1">
               <div className="text-[10px] font-black text-gold-600 uppercase tracking-[0.3em]">Current Status</div>
               <div className="text-2xl font-serif font-black text-royal-950 leading-none">Phase 1: Foundation</div>
               <div className="flex items-center gap-2 text-[10px] text-gold-700 font-black uppercase tracking-widest mt-2">
                 <div className="h-1.5 w-1.5 bg-gold-500 rounded-full animate-pulse"></div>
                 Monitoring Active
               </div>
            </div>
            <ChevronRight className="ml-auto text-gold-400" />
         </div>
      </div>
    </div>
  );
};
