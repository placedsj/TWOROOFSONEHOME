import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { 
  Shield, Scale, Users, FileCheck, Heart, Calendar, 
  BookOpen, AlertTriangle, CheckCircle, X, ChevronRight, 
  ChevronLeft, Activity, Bell, Siren, Quote, Scroll, 
  Headphones, StopCircle, ArrowRight, Sun,
  Lock, PenTool, Check, Info, Zap, RefreshCw,
  Home as HomeIcon, Sparkles, MapPin, Fingerprint, ShieldCheck
} from 'lucide-react';
import { RoadmapTracker } from '../components/RoadmapTracker';

// --- Types & Data ---

type SidebarItem = {
  type: 'verse' | 'quote' | 'thought' | 'letter';
  title?: string;
  content: string;
  author?: string;
};

type AgreementPage = {
  id: string;
  title: string;
  content: React.ReactNode;
  readableText: string;
  sidebar: SidebarItem[];
};

type Section = {
  id: string;
  title: string;
  icon: React.ReactNode;
  shortDesc: string;
  fullContent: React.ReactNode;
  category: 'foundation' | 'custody' | 'safety' | 'legacy';
};

type AlertEntry = {
  id: string;
  trigger: string;
  timestamp: string;
  recipients: string[];
  link: string;
};

const GLOSSARY_TERMS = [
  { term: "Harper Baseline", definition: "A verified standard where safety is proven by data (The Exhibit Generator), not by hearsay." },
  { term: "Benchmark of Stability", definition: "Verified sobriety, gambling-free status, and behavioral compliance establishing the father's current standing." },
  { term: "Circle of Two", definition: "The doctrine that parental authority belongs exclusively to the Mother and Father, excluding extended family." },
  { term: "Zero Vote", definition: "The status of extended family members having no decision-making power in the parental circle." },
  { term: "Exhibit Generator", definition: "A monthly automated report documenting bio-medical results, meeting logs, and behavioral compliance." },
  { term: "Sunrise Clause", definition: "The target date (March 1, 2028) for automatic transition to 50/50 shared parenting." },
  { term: "Glass House", definition: "The principle of total transparency where privacy is waived for the sake of verification and trust." },
  { term: "Jubilee Grace", definition: "The waiver of $50,000 in legal costs upon successful completion of the roadmap." },
];

// --- Specialized Interactive Components ---

const SanctuaryLayout = () => {
  return (
    <div className="relative bg-slate-900 rounded-[2rem] p-8 overflow-hidden border border-slate-800 shadow-2xl group">
      <div className="flex justify-between items-center mb-8 relative z-10">
        <div>
           <h4 className="text-gold-500 font-black text-[10px] uppercase tracking-[0.3em] mb-1">Architectural Provision</h4>
           <h3 className="text-white text-2xl font-serif font-bold">The Sanctuary Suite</h3>
        </div>
        <div className="p-3 bg-white/5 rounded-2xl border border-white/10 text-royal-400">
           <HomeIcon size={24} />
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row gap-8 items-center relative z-10">
        <div className="w-full md:w-1/2 aspect-square bg-slate-800/50 rounded-3xl border border-slate-700/50 p-6 relative">
           {/* Simple Isometric Representation of a Suite */}
           <div className="w-full h-full border-2 border-royal-500/30 rounded-xl relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 opacity-10">
                 {[...Array(16)].map((_, i) => <div key={i} className="border-[0.5px] border-royal-400"></div>)}
              </div>
              <div className="w-3/4 h-3/4 bg-royal-900/40 border-2 border-gold-500/40 rounded-lg transform rotate-[-15deg] flex flex-col items-center justify-center text-center p-4">
                 <Heart size={24} className="text-pink-400 mb-2 animate-pulse" />
                 <span className="text-[10px] font-black uppercase text-gold-500 tracking-widest">Guest Suite</span>
                 <p className="text-[9px] text-royal-300 mt-1">Dedicated Sanctuary Space for Maternal Support</p>
              </div>
           </div>
           <div className="absolute -bottom-2 -right-2 bg-royal-900 px-3 py-1.5 rounded-full border border-royal-700 text-[9px] font-bold text-white shadow-xl">
             PHASE 1 DEPLOYMENT
           </div>
        </div>
        <div className="w-full md:w-1/2 space-y-4">
           <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
              <div className="text-[10px] font-black text-gold-500 uppercase mb-1">Privacy Protocol</div>
              <p className="text-xs text-royal-200">Independent living area within the home to support parenting while maintaining oversight.</p>
           </div>
           <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
              <div className="text-[10px] font-black text-emerald-500 uppercase mb-1">Safety Lock</div>
              <p className="text-xs text-royal-200">Immediate access to Harper while Father provides secondary support.</p>
           </div>
           <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
              <div className="text-[10px] font-black text-royal-400 uppercase mb-1">Philosophy</div>
              <p className="text-xs italic text-royal-200">"Not supervision, but structural strength."</p>
           </div>
        </div>
      </div>
      
      {/* Visual Decor */}
      <div className="absolute -top-12 -right-12 w-32 h-32 bg-gold-600/5 blur-[60px] rounded-full"></div>
    </div>
  );
};

const MaternalDirectiveControl = () => {
  const [activeDomain, setActiveDomain] = useState('lifestyle');

  const domains = [
    { id: 'lifestyle', title: 'Lifestyle', authority: 'SOLE', icon: <Sparkles size={16} />, desc: 'Choice of clothing, social activities, and core household routine.' },
    { id: 'education', title: 'Educational', authority: 'LEAD', icon: <BookOpen size={16} />, desc: 'Primary consultant on schools, tutors, and developmental paths.' },
    { id: 'spiritual', title: 'Spiritual', authority: 'JOINT', icon: <MapPin size={16} />, desc: 'Collaborative development of a faith-based foundation.' }
  ];

  return (
    <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-xl space-y-8">
      <div className="flex justify-between items-center">
        <div>
           <h4 className="text-pink-600 font-black text-[10px] uppercase tracking-[0.3em] mb-1">Parental Authority matrix</h4>
           <h3 className="text-royal-950 text-3xl font-serif font-bold tracking-tight">Maternal Directives</h3>
        </div>
        <div className="flex gap-2">
           {domains.map(d => (
             <button 
               key={d.id}
               onClick={() => setActiveDomain(d.id)}
               className={`p-3 rounded-2xl transition-all ${activeDomain === d.id ? 'bg-royal-900 text-white shadow-lg' : 'bg-slate-50 text-slate-400 hover:bg-slate-100'}`}
             >
               {d.icon}
             </button>
           ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="space-y-6">
           <div className="animate-in fade-in slide-in-from-left duration-500">
              <div className="flex items-center gap-3 mb-2">
                 <span className="px-3 py-1 bg-pink-100 text-pink-600 rounded-full text-[9px] font-black tracking-widest uppercase">
                   {domains.find(d => d.id === activeDomain)?.authority} AUTHORITY
                 </span>
                 <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">{activeDomain} Domain</span>
              </div>
              <p className="text-slate-600 leading-relaxed font-medium">
                {domains.find(d => d.id === activeDomain)?.desc}
              </p>
           </div>
           
           <div className="p-6 bg-royal-50/50 rounded-2xl border border-royal-100 italic text-royal-900 text-sm">
             "Emma is liberated from external family patterns to act as the primary architect of Harper's growth."
           </div>
        </div>

        <div className="relative flex items-center justify-center p-8 bg-slate-50 rounded-[2rem] overflow-hidden">
           <div className="absolute inset-0 bg-gradient-to-br from-pink-100/20 to-royal-100/20"></div>
           <div className="relative z-10 w-40 h-40 flex items-center justify-center">
              <div className={`absolute inset-0 border-4 rounded-full transition-all duration-1000 ${activeDomain === 'lifestyle' ? 'border-pink-500 scale-110 shadow-[0_0_30px_rgba(236,72,153,0.3)]' : 'border-slate-200'}`}></div>
              <div className={`absolute inset-4 border-4 rounded-full transition-all duration-1000 ${activeDomain === 'education' ? 'border-royal-600 scale-110 shadow-[0_0_30px_rgba(37,99,235,0.3)]' : 'border-slate-200'}`}></div>
              <div className={`absolute inset-8 border-4 rounded-full transition-all duration-1000 ${activeDomain === 'spiritual' ? 'border-gold-500 scale-110 shadow-[0_0_30px_rgba(245,158,11,0.3)]' : 'border-slate-200'}`}></div>
              <div className="bg-white p-4 rounded-full shadow-2xl">
                 <Heart size={32} className="text-pink-500 fill-pink-500" />
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

// --- Main Components ---

const AGREEMENT_PAGES: AgreementPage[] = [
  {
    id: 'foundation',
    title: 'The Foundation',
    readableText: "Section 1: The Foundation. The Father, Craig Schulz, asks the Court to take Judicial Notice of his 'Benchmark of Stability'. This includes verified sobriety, being gambling-free, and successful transformation. The Mother, Emma Ryan, is recognized as a capable parent whose autonomy is protected from intergenerational family patterns.",
    content: (
      <div className="space-y-12">
        <section className="relative p-8 bg-royal-50/50 rounded-[3rem] border border-royal-100">
          <div className="absolute -top-3 left-10 px-4 py-1 bg-royal-900 text-white text-[10px] font-bold uppercase tracking-widest rounded-full">Directive 1.1</div>
          <h3 className="text-3xl font-serif font-bold text-royal-900 mb-6">Benchmark of Stability</h3>
          <p className="text-lg leading-relaxed text-slate-700 mb-8">The Father explicitly rejects the minimization of his past and provides a standard of verification that transforms his status from "probationary" to "foundational."</p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li className="flex items-center gap-4 p-5 bg-white rounded-2xl shadow-sm border border-slate-100">
              <div className="p-2 bg-emerald-100 text-emerald-600 rounded-xl"><CheckCircle size={24} /></div>
              <span className="text-sm font-bold text-royal-950">Verified Continuous Sobriety</span>
            </li>
            <li className="flex items-center gap-4 p-5 bg-white rounded-2xl shadow-sm border border-slate-100">
              <div className="p-2 bg-emerald-100 text-emerald-600 rounded-xl"><CheckCircle size={24} /></div>
              <span className="text-sm font-bold text-royal-950">2 Years Gambling-Free</span>
            </li>
            <li className="flex items-center gap-4 p-5 bg-white rounded-2xl shadow-sm border border-slate-100">
              <div className="p-2 bg-emerald-100 text-emerald-600 rounded-xl"><CheckCircle size={24} /></div>
              <span className="text-sm font-bold text-royal-950">Separation Integrity Maintained</span>
            </li>
            <li className="flex items-center gap-4 p-5 bg-white rounded-2xl shadow-sm border border-slate-100">
              <div className="p-2 bg-emerald-100 text-emerald-600 rounded-xl"><CheckCircle size={24} /></div>
              <span className="text-sm font-bold text-royal-950">Spiritual Base Confirmed</span>
            </li>
          </ul>
        </section>
        
        <MaternalDirectiveControl />
      </div>
    ),
    sidebar: [
      { type: 'verse', title: "Proverbs 28:13", content: "Whoever conceals their sins does not prosper, but the one who confesses and renounces them finds mercy." },
      { type: 'quote', content: "Safety is proven by data, not by hearsay.", author: "The Harper Baseline" }
    ]
  },
  {
    id: 'baseline',
    title: 'The Harper Baseline',
    readableText: "Section 2: The Harper Baseline. We replace hearsay with The Exhibit Generator. This is a monthly automated report of sobriety screens, meeting logs, and compliance results. Transparency builds the trust needed for our daughter's safety.",
    content: (
      <div className="space-y-12">
        <h3 className="text-4xl font-serif font-black text-royal-950 tracking-tight leading-tight">Objective Data vs. Subjective Hearsay</h3>
        <p className="text-xl text-slate-500 leading-relaxed font-serif">The current legal standard relies on unverified claims and intergenerational bias. We replace this with the <span className="text-gold-600 font-bold italic underline decoration-gold-200">Glass House Protocol.</span></p>
        
        <div className="grid grid-cols-1 gap-8">
          <div className="bg-slate-900 text-slate-300 p-12 rounded-[3.5rem] border border-slate-800 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-1000">
              <Activity size={180} className="text-royal-500 animate-pulse" />
            </div>
            <div className="relative z-10 flex flex-col gap-8">
               <div className="flex items-center gap-4">
                  <div className="p-3 bg-gold-600 rounded-2xl">
                     <RefreshCw size={24} className="text-royal-950 animate-spin-slow" />
                  </div>
                  <div>
                    <h4 className="text-gold-500 font-black uppercase tracking-[0.4em] text-xs">Live Integrity Stream</h4>
                    <p className="text-xs text-royal-400 font-mono">ENCRYPTED DATA FEED FDSJ-739</p>
                  </div>
               </div>

               <div className="space-y-6">
                  <div className="flex justify-between items-end border-b border-slate-800 pb-4 group/item">
                    <span className="text-xs uppercase font-bold tracking-widest text-slate-500 group-hover/item:text-gold-500 transition-colors">Bio-Medical Monitoring</span>
                    <span className="text-emerald-400 font-mono text-xl font-black">ACTIVE / PASS</span>
                  </div>
                  <div className="flex justify-between items-end border-b border-slate-800 pb-4 group/item">
                    <span className="text-xs uppercase font-bold tracking-widest text-slate-500 group-hover/item:text-gold-500 transition-colors">Behavioral Threshold</span>
                    <span className="text-emerald-400 font-mono text-xl font-black">STABLE / 0 INCIDENTS</span>
                  </div>
                  <div className="flex justify-between items-end border-b border-slate-800 pb-4 group/item">
                    <span className="text-xs uppercase font-bold tracking-widest text-slate-500 group-hover/item:text-gold-500 transition-colors">Spiritual Attendance</span>
                    <span className="text-gold-400 font-mono text-xl font-black">100% VERIFIED</span>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    ),
    sidebar: [
      { type: 'thought', content: "Hiring the system means the truth doesn't need a lawyer." }
    ]
  },
  {
    id: 'circle',
    title: 'The Circle of Two',
    readableText: "Section 3: The Circle of Two. Parental authority belongs exclusively to Mom and Dad. Extended family members, including grandmothers, have a Zero Vote. Harper is protected by her parents standing back-to-back.",
    content: (
      <div className="space-y-12">
        <div className="flex items-center justify-center p-20 bg-slate-100 rounded-[4rem] relative overflow-hidden min-h-[500px] border border-slate-200/50">
           <div className="relative w-96 h-96 flex items-center justify-center">
              {/* External Ring: Noise and Interference */}
              <div className="absolute inset-[-100px] border-2 border-dashed border-red-200 rounded-full animate-spin-slow opacity-30"></div>
              <div className="absolute -top-32 left-1/2 -translate-x-1/2 flex flex-col items-center">
                 <span className="px-5 py-2 bg-red-50 text-red-500 text-[11px] font-black uppercase rounded-full border border-red-100 mb-2 shadow-sm">External Noise Layer</span>
                 <div className="flex gap-4 opacity-40">
                    <span className="text-[10px] text-red-400 uppercase font-black tracking-widest">Grandparents</span>
                    <span className="text-[10px] text-red-400 uppercase font-black tracking-widest">•</span>
                    <span className="text-[10px] text-red-400 uppercase font-black tracking-widest">Interference</span>
                 </div>
              </div>
              
              {/* Shield Ring: Parental Unity */}
              <div className="absolute inset-[-20px] border-8 border-gold-400 rounded-full bg-white shadow-[0_30px_90px_rgba(245,158,11,0.25)] flex flex-col items-center justify-center z-10 p-12 text-center group transition-all duration-1000 hover:scale-105 hover:rotate-3">
                 <div className="text-[11px] uppercase font-black text-gold-600 tracking-[0.4em] mb-3">One Unified Home</div>
                 <span className="font-serif font-black text-royal-950 text-5xl mb-2 tracking-tighter">MOM & DAD</span>
                 <p className="text-[10px] text-slate-400 font-bold max-w-[180px] leading-relaxed">Authority ends here. External opinions carry zero weight in the decision core.</p>
                 
                 <div className="absolute -left-20 top-1/2 -translate-y-1/2 px-5 py-2 bg-royal-900 text-white text-[10px] font-black rounded-full rotate-[-90deg] shadow-xl">EMMA ELIZABETH RYAN</div>
                 <div className="absolute -right-20 top-1/2 -translate-y-1/2 px-5 py-2 bg-royal-900 text-white text-[10px] font-black rounded-full rotate-[90deg] shadow-xl">CRAIG ALEXANDER SCHULZ</div>
              </div>

              {/* Core Interest: Harper */}
              <div className="absolute inset-24 border-4 border-royal-950 rounded-full bg-royal-950 text-white flex flex-col items-center justify-center shadow-2xl z-20 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-700 overflow-hidden">
                 <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-transparent"></div>
                 <Heart className="text-pink-400 fill-pink-400 animate-pulse-slow mb-2 relative z-10" size={48} />
                 <span className="font-serif font-black text-3xl tracking-[0.2em] relative z-10">HARPER</span>
                 <span className="text-[9px] text-royal-400 font-black tracking-[0.4em] uppercase relative z-10">Protected Core</span>
              </div>
           </div>
        </div>
        <p className="text-center italic text-slate-500 font-serif text-xl px-12 leading-relaxed">
          "The three of us together never accepted the answer 'No'. We face outward as a shield, back-to-back, so Harper grows up in peace."
        </p>
      </div>
    ),
    sidebar: [
      { type: 'quote', content: "Two parents standing back-to-back to protect one child.", author: "Parental Directive" }
    ]
  },
  {
    id: 'roadmap',
    title: 'Sanctuary & Growth',
    readableText: "Section 4: Sanctuary and Growth. The Sanctuary Model provides Emma with support, not control. Phase 1 establishes the Foundation with week-to-week transitions and structural oversight.",
    content: (
      <div className="space-y-12">
        <SanctuaryLayout />
        
        <div className="p-10 bg-emerald-50/50 rounded-[3rem] border border-emerald-100 flex flex-col md:flex-row gap-10 items-center">
           <div className="p-6 bg-white rounded-3xl shadow-xl border border-emerald-100 flex-shrink-0 animate-bounce-slow">
              <ShieldCheck size={64} className="text-emerald-500" />
           </div>
           <div className="space-y-4">
              <h4 className="text-emerald-900 text-2xl font-serif font-black">Support-First Monitoring</h4>
              <p className="text-slate-600 leading-relaxed font-medium">Unlike traditional "supervised access," the Baseline establishes structural strength. Emma is given the suite at Craig's home to ensure Harper's safety is verified by presence, while Emma maintains full parental identity.</p>
              <div className="flex gap-4">
                 <div className="px-4 py-2 bg-emerald-100 text-emerald-700 text-[10px] font-black rounded-xl uppercase tracking-widest">Active Phase 1</div>
                 <div className="px-4 py-2 bg-white text-slate-400 text-[10px] font-black rounded-xl uppercase tracking-widest border border-slate-100">Verified Provision</div>
              </div>
           </div>
        </div>
      </div>
    ),
    sidebar: [
      { type: 'thought', content: "Presence is the highest form of verification." }
    ]
  }
];

// --- Sub-components ---

const StatusBadge = ({ label, active }: { label: string; active?: boolean }) => (
  <div className={`flex items-center gap-3 px-4 py-2 rounded-full text-[10px] font-black tracking-widest uppercase border ${active ? 'bg-emerald-50 text-emerald-600 border-emerald-200' : 'bg-slate-50 text-slate-400 border-slate-200'}`}>
    <div className={`w-2 h-2 rounded-full ${active ? 'bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]' : 'bg-slate-300'}`}></div>
    {label}
  </div>
);

const HeartbeatHeader = () => {
  return (
    <div className="flex items-center gap-4 py-2 px-6 bg-royal-950/40 backdrop-blur-md border border-white/5 rounded-2xl shadow-2xl">
      <div className="flex items-center gap-2">
        <Activity size={16} className="text-emerald-500 animate-pulse" />
        <span className="text-[9px] font-black text-royal-200 uppercase tracking-[0.3em]">Truth Feed: Live</span>
      </div>
      <div className="h-4 w-px bg-white/10"></div>
      <div className="flex items-center gap-2">
        <Fingerprint size={16} className="text-gold-500" />
        <span className="text-[9px] font-black text-royal-200 uppercase tracking-[0.3em]">Encrypted Access</span>
      </div>
    </div>
  );
};

const InteractiveExhibit = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);

  const generate = () => {
    setIsGenerating(true);
    setProgress(0);
    setLogs(["Initializing verification engine...", "Scanning bio-medical records...", "Checking meeting attendance logs..."]);
    
    let current = 0;
    const interval = setInterval(() => {
      current += Math.random() * 15;
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        setTimeout(() => {
          setIsGenerating(false);
          setLogs(prev => [...prev, "✓ VERIFICATION COMPLETE", "Exhibit Generated for Case FDSJ-739"]);
        }, 1000);
      }
      setProgress(current);
      if (current > 40 && logs.length === 3) setLogs(prev => [...prev, "External records match provided data..."]);
      if (current > 75 && logs.length === 4) setLogs(prev => [...prev, "Applying Benchmark of Stability filter..."]);
    }, 200);
  };

  return (
    <div className="bg-royal-950 text-royal-100 p-10 rounded-[3rem] border border-white/5 shadow-2xl space-y-8 relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-64 h-64 bg-royal-800/20 blur-[100px] rounded-full"></div>
      <div className="flex justify-between items-center relative z-10">
        <div>
           <h3 className="text-2xl font-display font-black text-white uppercase tracking-widest leading-none">Exhibit Generator</h3>
           <p className="text-[10px] text-royal-500 font-mono tracking-[0.4em] mt-1">AUTOMATED COMPLIANCE MONITORING</p>
        </div>
        <button 
          onClick={generate}
          disabled={isGenerating}
          className={`group flex items-center gap-3 px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-widest transition-all ${isGenerating ? 'bg-royal-800 text-royal-500 cursor-not-allowed' : 'bg-gold-600 text-royal-950 hover:bg-gold-500 active:scale-95 shadow-xl shadow-gold-500/20'}`}
        >
          {isGenerating ? <RefreshCw className="animate-spin" size={18} /> : <Zap size={18} className="group-hover:animate-bounce" />}
          {isGenerating ? 'VERIFYING...' : 'RUN VERIFICATION'}
        </button>
      </div>

      <div className="space-y-4 font-mono text-[11px] h-48 overflow-y-auto bg-black/40 p-6 rounded-[2rem] border border-white/5 custom-scrollbar relative z-10">
         {logs.map((log, i) => (
           <div key={i} className={`${log.startsWith('✓') ? 'text-emerald-400 font-black' : 'text-royal-400'} animate-in fade-in slide-in-from-left-2 duration-300`}>
             <span className="opacity-20 mr-2">[{new Date().toLocaleTimeString()}]</span>
             {`> ${log}`}
           </div>
         ))}
         {isGenerating && <div className="text-gold-500 animate-pulse ml-2">_ BLINKING CURSOR ...</div>}
         {logs.length === 0 && <div className="text-royal-800 text-center mt-12 italic">STANDING BY FOR DIRECTIVE ...</div>}
      </div>

      <div className="space-y-3 relative z-10">
         <div className="flex justify-between text-[11px] font-black uppercase text-royal-500 tracking-[0.4em]">
            <span>System Integrity</span>
            <span className={isGenerating ? 'text-gold-500' : 'text-royal-700'}>{Math.round(progress)}%</span>
         </div>
         <div className="h-2 bg-royal-900/50 rounded-full overflow-hidden border border-white/5 shadow-inner">
            <div className={`h-full bg-gradient-to-r from-emerald-600 to-emerald-400 transition-all duration-300 relative ${isGenerating ? 'opacity-100' : 'opacity-20'}`} style={{ width: `${progress}%` }}>
               <div className="absolute top-0 right-0 bottom-0 w-4 bg-white/20 blur-md"></div>
            </div>
         </div>
      </div>
    </div>
  );
};

const SidebarCard: React.FC<{ item: SidebarItem }> = ({ item }) => {
  const bgColors = {
    verse: 'bg-amber-50/50 border-amber-200 text-amber-900',
    quote: 'bg-royal-50/50 border-royal-200 text-royal-900',
    thought: 'bg-slate-50/50 border-slate-200 text-slate-700',
    letter: 'bg-pink-50/50 border-pink-200 text-pink-900'
  };

  const icons = {
    verse: <BookOpen size={20} className="text-amber-600" />,
    quote: <Quote size={20} className="text-royal-600" />,
    thought: <Sun size={20} className="text-slate-500" />,
    letter: <Heart size={20} className="text-pink-500" />
  };

  return (
    <div className={`p-10 rounded-[2.5rem] border backdrop-blur-sm ${bgColors[item.type]} shadow-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group relative overflow-hidden`}>
      <div className="absolute -top-6 -right-6 opacity-5 group-hover:scale-110 transition-transform duration-1000">
         {icons[item.type]}
      </div>
      <div className="flex items-center gap-3 mb-6 opacity-60 uppercase tracking-[0.3em] text-[11px] font-black">
        {icons[item.type]}
        <span>{item.title || item.type}</span>
      </div>
      <div className="font-serif text-2xl leading-relaxed mb-6 italic group-hover:text-royal-950 transition-colors">
        "{item.content}"
      </div>
      {item.author && (
        <div className="text-xs font-black opacity-30 text-right uppercase tracking-widest">— {item.author}</div>
      )}
    </div>
  );
};

const Modal = ({ isOpen, onClose, title, children }: { isOpen: boolean; onClose: () => void; title: string; children?: React.ReactNode }) => {
  if (!isOpen) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-royal-900/80 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col animate-in fade-in zoom-in duration-200">
        <div className="bg-royal-800 p-6 flex justify-between items-center text-white shrink-0">
          <h2 id="modal-title" className="text-2xl font-serif font-bold">{title}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-royal-700 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        </div>
        <div className="p-8 overflow-y-auto leading-relaxed text-slate-700 space-y-4">
          {children}
        </div>
        <div className="p-4 border-t border-slate-100 bg-slate-50 flex justify-end shrink-0">
          <button onClick={onClose} className="px-6 py-2 bg-royal-800 text-white rounded-lg hover:bg-royal-700 font-medium transition-colors">
            Close Review
          </button>
        </div>
      </div>
    </div>
  );
};

const StatusCard = ({ label, value, subtext, active }: { label: string; value: string; subtext: string; active?: boolean }) => (
  <div className={`p-6 rounded-xl border ${active ? 'bg-white border-gold-500 shadow-lg shadow-gold-500/10' : 'bg-slate-50 border-slate-200'} transition-all`}>
    <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">{label}</div>
    <div className="text-3xl font-serif font-bold text-royal-900 mb-1">{value}</div>
    <div className="text-xs text-slate-400 font-medium">{subtext}</div>
  </div>
);

const TimelinePhase = ({ phase, title, time, status, onClick }: { phase: string, title: string, time: string, status: 'completed' | 'current' | 'future', onClick: () => void }) => {
  const colors = {
    completed: 'bg-emerald-500 text-white border-emerald-500',
    current: 'bg-gold-500 text-white border-gold-500 shadow-lg shadow-gold-500/30',
    future: 'bg-slate-100 text-slate-400 border-slate-200'
  };

  return (
    <div
      onClick={onClick}
      className={`relative flex-1 p-4 rounded-lg border-2 cursor-pointer transition-all hover:-translate-y-1 ${colors[status]} group`}
    >
      <div className="text-xs font-bold uppercase tracking-widest opacity-80 mb-1">{phase}</div>
      <div className="font-serif font-bold text-lg mb-2">{title}</div>
      <div className="text-xs font-medium opacity-90">{time}</div>
      {status === 'current' && (
        <div className="absolute -top-3 -right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse">
          ACTIVE
        </div>
      )}
    </div>
  );
};

// --- Main Application Component ---

export default function DigitalBinder() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [showGlossary, setShowGlossary] = useState(false);
  const [showAuditLog, setShowAuditLog] = useState(false);
  const [showReader, setShowReader] = useState(false);
  const [readerPage, setReaderPage] = useState(0);
  const [alerts, setAlerts] = useState<AlertEntry[]>([]);

  // Audio state
  const [isSpeaking, setIsSpeaking] = useState(false);
  const synth = window.speechSynthesis;

  // Cleanup audio on unmount or view change
  useEffect(() => {
    return () => {
      synth.cancel();
      setIsSpeaking(false);
    };
  }, []);

  // Stop audio when page changes
  useEffect(() => {
    if (isSpeaking) {
      synth.cancel();
      setIsSpeaking(false);
    }
  }, [readerPage, showReader]);

  const toggleSpeech = () => {
    if (isSpeaking) {
      synth.cancel();
      setIsSpeaking(false);
    } else {
      const text = AGREEMENT_PAGES[readerPage].readableText;
      const utterance = new SpeechSynthesisUtterance(text);

      // Optional: adjust voice settings
      utterance.rate = 0.9; // Slightly slower for gravity
      utterance.pitch = 1.0;

      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);

      synth.speak(utterance);
      setIsSpeaking(true);
    }
  };

  const [time, setTime] = useState(new Date());
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => {
      clearInterval(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleTriggerAlert = useCallback((trigger: string) => {
    const newAlert: AlertEntry = {
      id: Math.random().toString(36).slice(2, 11),
      trigger,
      timestamp: new Date().toLocaleString(),
      recipients: ["Parenting Coordinator", "Mother's Counsel", "Father's Counsel"],
      link: "#redline"
    };
    setAlerts(prev => [newAlert, ...prev]);
    alert(`SYSTEM ALERT TRIGGERED: ${trigger}\nRecipients Notified: ${newAlert.recipients.join(', ')}`);
  }, []);

  const sections: Section[] = useMemo(() => {
    return [
    {
      id: 'baseline',
      title: 'The Harper Baseline',
      category: 'foundation',
      icon: <Scale className="w-8 h-8 text-gold-500" />,
      shortDesc: 'A verified standard where safety is proven by data, not hearsay.',
      fullContent: (
        <div className="space-y-6">
          <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
            <h3 className="text-xl font-bold text-royal-900 mb-4">Rejection of Hearsay</h3>
            <p>This Parenting Agreement rejects the standard adversarial model. Instead, it establishes a verified standard where safety is proven by data ("The Exhibit Generator"), not by hearsay. It prioritizes Harper's right to a stable, sober father and an autonomous mother.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-lg mb-2 flex items-center gap-2"><X className="text-red-500" /> What Exists Now</h4>
              <ul className="list-disc pl-5 space-y-2 text-slate-600">
                <li>Unverified claims about sobriety</li>
                <li>Reports filled with hearsay/bias</li>
                <li>Accusations without evidence</li>
                <li>Minimized transformation</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2 flex items-center gap-2"><CheckCircle className="text-emerald-500" /> What We Create</h4>
              <ul className="list-disc pl-5 space-y-2 text-slate-600">
                <li>Objective, measurable safety data</li>
                <li>A "Glass House" of transparency</li>
                <li>Evidence-backed claims</li>
                <li>Empowered decision making</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'custody',
      title: 'The Roadmap (Custody)',
      category: 'custody',
      icon: <Calendar className="w-8 h-8 text-royal-500" />,
      shortDesc: 'Visual tracking of parenting time phases and compliance progress.',
      fullContent: (
        <div className="space-y-8">
           {/* Header */}
           <div className="flex items-center justify-between p-4 bg-royal-50 border border-royal-100 rounded-xl">
             <div>
               <div className="text-xs font-bold uppercase tracking-widest text-royal-500 mb-1">Current Status</div>
               <div className="text-2xl font-serif font-bold text-royal-900">Phase 1: Foundation</div>
               <div className="text-sm text-slate-600">Month 1 of 6</div>
             </div>
             <div className="h-16 w-16 rounded-full bg-white border-4 border-royal-500 flex items-center justify-center shadow-sm">
                <span className="font-bold text-royal-900">16%</span>
             </div>
           </div>

           <div className="grid md:grid-cols-2 gap-6">
             {/* Father's Progress */}
             <div className="border border-slate-200 rounded-xl overflow-hidden">
                <div className="bg-slate-50 p-4 border-b border-slate-100 flex justify-between items-center">
                   <h4 className="font-bold text-slate-800">Father's Compliance</h4>
                   <span className="px-2 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold rounded">VERIFIED</span>
                </div>
                <div className="p-6 space-y-6">
                   <div>
                      <div className="flex justify-between text-sm mb-2">
                         <span className="font-medium text-slate-700">Sobriety (Continuous)</span>
                         <span className="font-bold text-royal-600">100%</span>
                      </div>
                      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                         <div className="h-full bg-emerald-500 w-full rounded-full"></div>
                      </div>
                   </div>
                   <div>
                      <div className="flex justify-between text-sm mb-2">
                         <span className="font-medium text-slate-700">Gambling-Free</span>
                         <span className="font-bold text-royal-600">2 Years+</span>
                      </div>
                      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                         <div className="h-full bg-emerald-500 w-full rounded-full"></div>
                      </div>
                   </div>
                    <div className="grid grid-cols-2 gap-2 mt-4">
                       <div className="flex items-center gap-2 text-sm text-slate-600">
                          <CheckCircle size={16} className="text-emerald-500" /> No Police Contact
                       </div>
                       <div className="flex items-center gap-2 text-sm text-slate-600">
                          <CheckCircle size={16} className="text-emerald-500" /> Gainful Employment
                       </div>
                    </div>
                </div>
             </div>

             {/* Mother's Progress */}
              <div className="border border-slate-200 rounded-xl overflow-hidden">
                <div className="bg-slate-50 p-4 border-b border-slate-100 flex justify-between items-center">
                   <h4 className="font-bold text-slate-800">Mother's Progress</h4>
                   <span className="px-2 py-1 bg-gold-100 text-gold-700 text-xs font-bold rounded">IN PROGRESS</span>
                </div>
                <div className="p-6 space-y-6">
                   <div>
                      <div className="flex justify-between text-sm mb-2">
                         <span className="font-medium text-slate-700">Jane Block (No Contact)</span>
                         <span className="font-bold text-gold-600">Month 1/6</span>
                      </div>
                      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                         <div className="h-full bg-gold-500 w-[16%] rounded-full relative">
                            <div className="absolute right-0 top-0 bottom-0 w-1 bg-white/50 animate-pulse"></div>
                         </div>
                      </div>
                   </div>
                   <div>
                      <div className="flex justify-between text-sm mb-2">
                         <span className="font-medium text-slate-700">Autonomy Establishment</span>
                         <span className="font-bold text-gold-600">Initiated</span>
                      </div>
                      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                         <div className="h-full bg-gold-500 w-[25%] rounded-full"></div>
                      </div>
                   </div>
                    <div className="grid grid-cols-2 gap-2 mt-4">
                       <div className="flex items-center gap-2 text-sm text-slate-600">
                          <CheckCircle size={16} className="text-gold-500" /> Housing Secure
                       </div>
                       <div className="flex items-center gap-2 text-sm text-slate-600">
                          <div className="h-4 w-4 rounded-full border-2 border-slate-300"></div> Counseling Setup
                       </div>
                    </div>
                </div>
             </div>
           </div>
        </div>
      )
    },
    {
      id: 'exhibit',
      title: 'The Exhibit Generator',
      category: 'safety',
      icon: <FileCheck className="w-8 h-8 text-royal-500" />,
      shortDesc: 'Monthly automated reporting on bio-medical, meeting, and behavioral data.',
      fullContent: (
        <div className="space-y-6">
          <p className="italic text-slate-500 border-l-4 border-gold-500 pl-4">"If you have nothing to hide, hiding nothing proves you have nothing to hide."</p>

          <div className="border rounded-xl overflow-hidden">
            <div className="bg-slate-100 p-4 font-mono text-sm border-b font-bold text-slate-600">SAMPLE REPORT OUTPUT (Monthly by 3rd)</div>
            <div className="p-6 space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-2 rounded text-blue-700"><Activity size={20}/></div>
                <div>
                  <div className="font-bold text-royal-900">Bio-Medical Verification</div>
                  <div className="text-sm text-slate-600">13-panel drug/alcohol screen results (Date/Time/Facility).</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 p-2 rounded text-purple-700"><Users size={20}/></div>
                <div>
                  <div className="font-bold text-royal-900">Meeting Logs</div>
                  <div className="text-sm text-slate-600">Celebrate Recovery (Weekly), Kings Church (2x/mo), Therapy sessions.</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-2 rounded text-green-700"><Shield size={20}/></div>
                <div>
                  <div className="font-bold text-royal-900">Behavioral Compliance</div>
                  <div className="text-sm text-slate-600">No police contact, employment status, housing stability confirmed.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'autonomy',
      title: 'The Autonomy Invitation',
      category: 'foundation',
      icon: <Heart className="w-8 h-8 text-pink-500" />,
      shortDesc: 'Acknowledging Mother’s strengths while protecting her from external family pressure.',
      fullContent: (
        <div className="space-y-6">
          <h3 className="text-xl font-bold font-serif text-royal-900">To Emma Ryan</h3>
          <p>This document is an invitation to the Mother. It acknowledges her strengths and current probationary status, and provides the legal structure she needs to assert Parental Primacy.</p>

          <div className="bg-royal-50 p-6 rounded-xl">
            <h4 className="font-bold text-royal-800 mb-2">The "Support & Strength" Pledge</h4>
            <p className="italic text-royal-700 mb-4">"Emma, I know who you really are. You are not the conflict, and you are not the control of others. I am safe. I am sober. And I am here to help you be the woman I know you can be."</p>
            <div className="grid grid-cols-2 gap-4 text-sm">
               <div className="bg-white p-3 rounded shadow-sm">
                 <span className="font-bold block text-royal-900">Emergency Support</span>
                 Emma calls Craig first, not her parents.
               </div>
               <div className="bg-white p-3 rounded shadow-sm">
                 <span className="font-bold block text-royal-900">Consultation</span>
                 Craig is available for support, not control.
               </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'circle',
      title: 'The Circle of Two',
      category: 'custody',
      icon: <Users className="w-8 h-8 text-royal-500" />,
      shortDesc: 'Decisions are made by Mom and Dad. Not by extended family.',
      fullContent: (
        <div className="space-y-6">
           <div className="flex items-center justify-center p-8 bg-slate-50 rounded-xl">
              <div className="relative w-80 h-80"> {/* Increased size for better visual impact */}
                {/* Outermost Ring: Excluded Zone (static, dashed, red) */}
                <div className="absolute inset-[-60px] border-4 border-dashed border-red-300 rounded-full flex items-center justify-center opacity-60 animate-spin-slow">
                   <span className="absolute -top-10 text-sm font-bold text-red-600 uppercase tracking-wide px-4 py-1 rounded-full bg-red-50/70 backdrop-blur-sm">The Excluded Zone</span>
                </div>

                {/* Middle Ring: Mom & Dad Unified (static, solid, gold, protective) */}
                <div className="absolute inset-[-20px] border-4 border-gold-500 rounded-full flex items-center justify-center z-0 shadow-lg shadow-gold-500/20">
                   {/* Visual separation with labels */}
                   <div className="absolute w-full h-full flex flex-col justify-center items-center">
                     <span className="absolute top-[calc(50%-40px)] left-1/2 -translate-x-1/2 -translate-y-full text-gold-900 font-bold text-sm bg-gold-100/70 px-2 py-1 rounded-full whitespace-nowrap">Mother's Sole Authority</span>
                     <span className="absolute bottom-[calc(50%-40px)] left-1/2 -translate-x-1/2 translate-y-full text-gold-900 font-bold text-sm bg-gold-100/70 px-2 py-1 rounded-full whitespace-nowrap">Father's Joint Responsibility</span>
                   </div>
                   <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white bg-gold-600 px-4 py-2 rounded-full font-bold text-lg whitespace-nowrap">Mom & Dad Unified</span>
                </div>

                {/* Inner Circle: HARPER Protected Core */}
                <div className="absolute inset-0 border-4 border-royal-900 rounded-full flex items-center justify-center z-10 bg-white">
                  <div className="text-center">
                    <div className="font-bold text-3xl text-royal-900">HARPER</div>
                    <div className="text-sm text-slate-500">Protected Core</div>
                  </div>
                </div>
              </div>
           </div>

           <div className="grid md:grid-cols-2 gap-6">
             <div className="border border-red-200 bg-red-50 p-4 rounded-lg group hover:border-red-400 transition-colors"> {/* Added group and hover effect */}
               <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2">
                 <X size={20} /> Excluded
                 <span className="relative cursor-help ml-1"> {/* This span triggers the Info tooltip */}
                   <span className="font-bold text-red-600">Zero Vote</span>
                   <Info size={14} className="inline-block ml-1 text-red-400 group-hover:text-red-600 transition-colors" /> {/* Emphasize Info icon on group hover */}
                   <div className="absolute hidden group-hover:block bottom-full left-1/2 -translate-x-1/2 mb-2 p-3 bg-red-700 text-white text-xs rounded-lg shadow-lg whitespace-normal w-64 text-center z-20">
                     No decision-making power on Harper's medical care, schooling, daily routine, or extracurricular activities.
                   </div>
                 </span>
               </h4>

               <div className="space-y-3">
                 <div className="flex items-start gap-3 p-2 bg-white/60 rounded border border-red-100 group-hover:border-red-300 transition-colors">
                   <div className="bg-red-100 p-1 rounded text-red-600 mt-0.5"><Users size={14} /></div>
                   <div>
                     <span className="font-bold text-red-900 text-sm block">Grandparents</span>
                     <span className="text-xs text-red-700">Love without authority. Not decision-makers.</span>
                   </div>
                 </div>

                 <div className="flex items-start gap-3 p-2 bg-white/60 rounded border border-red-100 group-hover:border-red-300 transition-colors">
                    <div className="bg-red-100 p-1 rounded text-red-600 mt-0.5"><Users size={14} /></div>
                   <div>
                     <span className="font-bold text-red-900 text-sm block">Aunts & Uncles</span>
                     <span className="text-xs text-red-700">Support without interference. Opinions are welcome only when asked.</span>
                   </div>
                 </div>

                 <div className="flex items-start gap-3 p-2 bg-white/60 rounded border border-red-100 group-hover:border-red-300 transition-colors">
                    <div className="bg-red-100 p-1 rounded text-red-600 mt-0.5"><Users size={14} /></div>
                   <div>
                     <span className="font-bold text-red-900 text-sm block">Extended Kin</span>
                     <span className="text-xs text-red-700">Guests in Harper's life, not architects of it.</span>
                   </div>
                 </div>
               </div>
             </div>
             <div className="border border-royal-200 bg-royal-50 p-4 rounded-lg">
               <h4 className="font-bold text-royal-800 mb-3">The "Jane Block"</h4>
               <p className="text-sm text-royal-700 mb-4">A mandatory 6-month cooling-off period where the maternal grandmother has zero contact. Designed to allow Emma to establish her independent parenting identity and autonomy.</p>

               <div className="flex justify-between text-sm mb-2">
                  <span className="font-medium text-slate-700">Progress</span>
                  <span className="font-bold text-gold-600">Month 1/6</span>
               </div>
               <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-gold-500 w-[16.6%] rounded-full relative">
                     <div className="absolute right-0 top-0 bottom-0 w-1 bg-white/50 animate-pulse"></div>
                  </div>
               </div>
             </div>
           </div>
        </div>
      )
    },
    {
      id: 'redline',
      title: 'Red Line Protocols',
      category: 'safety',
      icon: <AlertTriangle className="w-8 h-8 text-red-500" />,
      shortDesc: 'Immediate suspension triggers for substance use or violence.',
      fullContent: (
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-red-700 border-b border-red-200 pb-2">Non-Negotiable Safety Triggers</h3>
          <div className="space-y-4">
             <div className="flex items-start gap-3">
               <div className="min-w-[4px] h-full bg-red-500 rounded-full"></div>
               <div>
                 <div className="font-bold text-slate-900">Positive Substance Screen</div>
                 <p className="text-slate-600 text-sm">Any drug or non-prescribed alcohol. Automatic 48-hour suspension pending investigation.</p>
               </div>
             </div>
             <div className="flex items-start gap-3">
               <div className="min-w-[4px] h-full bg-red-500 rounded-full"></div>
               <div>
                 <div className="font-bold text-slate-900">Police Contact (Violence)</div>
                 <p className="text-slate-600 text-sm">Any verified police contact involving violence, weapons, or threats triggers immediate suspension.</p>
               </div>
             </div>
             <div className="flex items-start gap-3">
               <div className="min-w-[4px] h-full bg-red-500 rounded-full"></div>
               <div>
                 <div className="font-bold text-slate-900">Child Endangerment</div>
                 <p className="text-slate-600 text-sm">Automatic permanent suspension pending legal clearance.</p>
               </div>
             </div>
          </div>

          <div className="mt-8 p-6 bg-red-50 border border-red-200 rounded-xl">
            <h4 className="font-bold text-red-900 mb-4 flex items-center gap-2">
                <Siren className="w-5 h-5 animate-pulse" />
                System Simulation: Trigger Event
            </h4>
            <div className="grid gap-3 md:grid-cols-2">
                <button 
                    onClick={() => handleTriggerAlert('Positive Substance Screen')}
                    className="p-3 bg-white border border-red-300 text-red-700 rounded-lg hover:bg-red-600 hover:text-white transition-all font-medium text-sm text-left flex items-center justify-between group"
                >
                    <span>Simulate Positive Screen</span>
                    <AlertTriangle size={16} className="opacity-50 group-hover:opacity-100" />
                </button>
                <button 
                    onClick={() => handleTriggerAlert('Police Contact (Verified)')}
                    className="p-3 bg-white border border-red-300 text-red-700 rounded-lg hover:bg-red-600 hover:text-white transition-all font-medium text-sm text-left flex items-center justify-between group"
                >
                    <span>Simulate Police Contact</span>
                    <AlertTriangle size={16} className="opacity-50 group-hover:opacity-100" />
                </button>
            </div>
            <p className="text-xs text-red-500 mt-3">* Clicking these will generate an audit log entry and simulate notification dispatch to designated parties.</p>
          </div>
        </div>
      )
    },
    {
      id: 'legacy',
      title: 'Sunrise & Legacy',
      category: 'legacy',
      icon: <Sun className="w-8 h-8 text-gold-500" />,
      shortDesc: 'The path to March 1, 2028: Cost elimination and full freedom.',
      fullContent: (
        <div className="space-y-6">
          <div className="text-center p-6 bg-gradient-to-br from-royal-900 to-royal-800 text-white rounded-xl">
             <Sun className="w-16 h-16 mx-auto text-gold-500 mb-4" />
             <h2 className="text-3xl font-serif font-bold mb-2">March 1, 2028</h2>
             <div className="text-gold-400 font-bold tracking-widest uppercase mb-4">The Sunrise Clause</div>
             <p className="text-royal-100 max-w-lg mx-auto">"We made it. Welcome home, Mom."</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
             <div className="p-4 border border-gold-200 bg-gold-50 rounded-lg">
               <h4 className="font-bold text-gold-800 mb-2">The Jubilee Grace</h4>
               <p className="text-sm text-slate-700">Father waives $50,000 in accumulated legal costs. All monitoring costs cease.</p>
             </div>
             <div className="p-4 border border-slate-200 bg-white rounded-lg">
               <h4 className="font-bold text-slate-800 mb-2">Automatic Transition</h4>
               <p className="text-sm text-slate-700">If criteria met: 50/50 Shared Parenting, Joint Custody, Elimination of all special conditions.</p>
             </div>
          </div>
        </div>
      )
    }
  ];
  }, [handleTriggerAlert]);

  const activeModalContent = sections.find(s => s.id === activeSection);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-20">

      {/* Header */}
      <header className="bg-royal-900 text-white py-6 sticky top-0 z-40 shadow-xl">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl md:text-3xl font-serif font-bold text-white tracking-wide">The Harper Baseline</h1>
            <div className="text-xs md:text-sm text-royal-100 opacity-70 font-mono">CASE: FDSJ-739-2024 • QUISPAMSIS, NB</div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setShowAuditLog(true)}
              className="flex items-center gap-2 px-3 md:px-4 py-2 bg-royal-800 hover:bg-royal-700 rounded-lg transition-colors border border-royal-700 relative"
            >
              <Bell size={18} />
              <span className="hidden md:inline">Alert Log</span>
              {alerts.length > 0 && (
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold">
                  {alerts.length}
                </span>
              )}
            </button>
            <button
              onClick={() => setShowReader(true)}
              className="flex items-center gap-2 px-3 md:px-4 py-2 bg-gold-600 hover:bg-gold-500 rounded-lg transition-colors text-white font-medium border border-gold-500 shadow-lg shadow-gold-500/20"
            >
              <Scroll size={18} />
              <span className="hidden md:inline">Read Agreement</span>
            </button>
            <button
              onClick={() => setShowGlossary(true)}
              className="flex items-center gap-2 px-3 md:px-4 py-2 bg-royal-800 hover:bg-royal-700 rounded-lg transition-colors border border-royal-700"
            >
              <BookOpen size={18} />
              <span className="hidden md:inline">Glossary</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero / Dashboard Top */}
      <div className="bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2 space-y-6">
               <div className="inline-block px-3 py-1 bg-gold-100 text-gold-700 rounded-full text-xs font-bold tracking-widest uppercase mb-2">
                 Active Status: Verified
               </div>
               <h2 className="text-4xl md:text-5xl font-serif font-bold text-royal-900 leading-tight">
                 "Only the truth. What God would do. In Harper's best interest."
               </h2>
               <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
                 A transition from facing off to standing <span className="font-bold text-royal-800">Back-to-Back</span>.
                 This dashboard monitors the "Glass House" verification system protecting Harper June Elizabeth Ryan-Schulz.
               </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
               <StatusCard
                  label="Verification Status"
                  value="Active Monitoring"
                  subtext="Subject to Exhibit Generator Review"
                  active={true}
                />
               <StatusCard
                  label="Mother's Status"
                  value="Phase 1"
                  subtext="Foundation & Shared Parenting"
                />
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-2xl font-serif font-bold text-royal-900">The Roadmap to Sunrise</h3>
          <span className="text-sm font-medium text-slate-500">Current Phase: Foundation</span>
        </div>

        <div className="flex flex-col md:flex-row gap-4 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-slate-200 -z-10 transform -translate-y-1/2"></div>

          <TimelinePhase
            phase="Phase 1"
            title="Foundation"
            time="Months 1-6"
            status="current"
            onClick={() => setActiveSection('custody')}
          />
           <TimelinePhase
            phase="Phase 2"
            title="Expansion"
            time="Months 7-24"
            status="future"
            onClick={() => setActiveSection('custody')}
          />
           <TimelinePhase
            phase="Phase 3"
            title="Near-Equal"
            time="Month 25+"
            status="future"
            onClick={() => setActiveSection('custody')}
          />
           <TimelinePhase
            phase="Destination"
            title="Sunrise Clause"
            time="March 1, 2028"
            status="future"
            onClick={() => setActiveSection('legacy')}
          />
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="bg-slate-100 py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 mb-8">
             <div className="h-8 w-1 bg-gold-500 rounded-full"></div>
             <h3 className="text-2xl font-serif font-bold text-royal-900">Core Agreement Modules</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((section) => (
              <div
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer border border-slate-100 group"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-slate-50 rounded-lg group-hover:bg-royal-50 transition-colors">
                    {section.icon}
                  </div>
                  <ChevronRight className="text-slate-300 group-hover:text-gold-500 transition-colors" />
                </div>
                <h4 className="text-xl font-bold text-royal-900 mb-2 font-serif">{section.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{section.shortDesc}</p>
                <span className="text-xs font-bold text-gold-600 uppercase tracking-widest group-hover:underline">View Details</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer / Signatures Visual */}
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-2xl mx-auto space-y-8">
           <Heart className="w-12 h-12 text-royal-900 mx-auto opacity-20" />
           <p className="text-slate-500 italic font-serif text-lg">
             "We, the parents, haven't been told 'No' when we stand together. This document is the architecture of that unity."
           </p>
           <div className="flex justify-center gap-8 pt-8 border-t border-slate-200">
              <div className="text-left">
                <div className="h-px w-32 bg-slate-900 mb-2"></div>
                <div className="text-xs uppercase font-bold text-slate-400">Emma Elizabeth Ryan</div>
              </div>
              <div className="text-left">
                <div className="h-px w-32 bg-slate-900 mb-2"></div>
                <div className="text-xs uppercase font-bold text-slate-400">Craig Alexander Paul Schulz</div>
              </div>
           </div>
        </div>
      </div>

      {/* Details Modal */}
      <Modal
        isOpen={!!activeSection}
        onClose={() => setActiveSection(null)}
        title={activeModalContent?.title || ''}
      >
        {activeModalContent?.fullContent}
      </Modal>

      {/* Full Agreement Reader Mode */}
      {showReader && (
        <div className="fixed inset-0 z-50 flex flex-col bg-slate-100">
          <div className="bg-royal-900 text-white p-4 shadow-lg flex justify-between items-center shrink-0">
             <div className="flex items-center gap-3">
               <div className="p-2 bg-royal-800 rounded-lg"><Scroll size={20}/></div>
               <div>
                 <h2 className="font-serif font-bold text-lg">Full Agreement Reader</h2>
                 <div className="text-xs text-royal-300">Page {readerPage + 1} of {AGREEMENT_PAGES.length}</div>
               </div>
             </div>
             
             <div className="flex items-center gap-3">
               <button
                 onClick={toggleSpeech}
                 className={`flex items-center gap-2 px-4 py-2 rounded-full font-bold transition-all ${
                   isSpeaking
                     ? 'bg-red-500 text-white animate-pulse'
                     : 'bg-royal-800 border border-royal-700 hover:bg-royal-700'
                 }`}
               >
                 {isSpeaking ? (
                   <>
                     <StopCircle size={18} /> Stop
                   </>
                 ) : (
                   <>
                     <Headphones size={18} /> Listen
                   </>
                 )}
               </button>
               <button onClick={() => setShowReader(false)} className="p-2 hover:bg-royal-800 rounded-full">
                 <X size={24} />
               </button>
             </div>
          </div>

          <div className="flex-1 overflow-hidden flex flex-col md:flex-row">
            {/* Left: Main Content */}
            <div className="flex-1 overflow-y-auto p-8 md:p-12 bg-white max-w-4xl mx-auto shadow-xl my-4 md:my-8 rounded-lg md:mr-4">
               <div className="mb-8 pb-4 border-b border-slate-100 flex justify-between items-end">
                 <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">Section {readerPage + 1}</span>
                 <h1 className="text-3xl font-serif font-bold text-royal-900">{AGREEMENT_PAGES[readerPage].title}</h1>
               </div>
               <div className="prose prose-lg prose-slate max-w-none">
                 {AGREEMENT_PAGES[readerPage].content}
               </div>
            </div>

            {/* Right: Sidebar */}
            <div className="w-full md:w-96 bg-slate-100 p-6 overflow-y-auto border-l border-slate-200 shrink-0">
               <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-6">Related Notes</h3>
               <div className="space-y-6">
                 {AGREEMENT_PAGES[readerPage].sidebar.map((item, idx) => (
                   <SidebarCard key={idx} item={item} />
                 ))}
               </div>
            </div>
          </div>

          {/* Bottom Nav */}
          <div className="bg-white border-t border-slate-200 p-4 flex justify-between items-center shrink-0">
             <button 
               onClick={() => setReaderPage(p => Math.max(0, p - 1))}
               disabled={readerPage === 0}
               className="flex items-center gap-2 px-6 py-3 rounded-lg font-bold disabled:opacity-30 hover:bg-slate-100 transition-colors"
             >
               <ChevronLeft size={20} /> Previous
             </button>

             <div className="flex gap-1">
               {AGREEMENT_PAGES.map((_, idx) => (
                 <button
                   key={idx}
                   onClick={() => setReaderPage(idx)}
                   aria-label={`Go to page ${idx + 1}`}
                   className={`h-2 w-2 rounded-full transition-all ${idx === readerPage ? 'bg-royal-900 w-6' : 'bg-slate-300'}`}
                 />
               ))}
             </div>

             <button 
               onClick={() => setReaderPage(p => Math.min(AGREEMENT_PAGES.length - 1, p + 1))}
               disabled={readerPage === AGREEMENT_PAGES.length - 1}
               className="flex items-center gap-2 px-6 py-3 bg-royal-900 text-white rounded-lg font-bold disabled:opacity-30 hover:bg-royal-800 transition-colors shadow-lg"
             >
               Next <ChevronRight size={20} />
             </button>
          </div>
        </div>
      )}

      {/* Audit Log Drawer */}
      {showAuditLog && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm transition-opacity" onClick={() => setShowAuditLog(false)}></div>
          <div className="relative w-full max-w-md bg-white h-full shadow-2xl p-8 overflow-y-auto animate-in slide-in-from-right duration-300 flex flex-col">
            <div className="flex justify-between items-center mb-6 shrink-0">
              <div className="flex items-center gap-3">
                 <div className="bg-red-100 p-2 rounded-full text-red-600">
                    <Siren size={24} />
                 </div>
                 <h2 className="text-2xl font-serif font-bold text-royal-900">Audit Log</h2>
              </div>
              <button onClick={() => setShowAuditLog(false)} className="p-2 hover:bg-slate-100 rounded-full">
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto space-y-4">
              {alerts.length === 0 ? (
                <div className="text-center py-12 text-slate-400">
                   <CheckCircle className="w-12 h-12 mx-auto mb-3 opacity-20" />
                   <p>No system alerts triggered.</p>
                   <p className="text-sm">Monitoring is active and quiet.</p>
                </div>
              ) : (
                alerts.map((alert) => (
                  <div key={alert.id} className="p-4 border border-red-100 bg-red-50/50 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                       <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500">{alert.timestamp}</span>
                       <span className="px-2 py-0.5 bg-red-100 text-red-700 text-[10px] font-bold rounded uppercase">Critical</span>
                    </div>
                    <h4 className="font-bold text-red-900 mb-1">{alert.trigger}</h4>
                    <div className="text-xs text-slate-600 mb-3">
                       <span className="font-bold">Notified:</span> {alert.recipients.join(', ')}
                    </div>
                    <button
                      onClick={() => { setShowAuditLog(false); setActiveSection('redline'); }}
                      className="text-xs font-bold text-red-600 hover:text-red-800 hover:underline flex items-center gap-1"
                    >
                      View Protocol <ChevronRight size={10} />
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}

      {/* Glossary Drawer */}
      {showGlossary && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm transition-opacity" onClick={() => setShowGlossary(false)}></div>
          <div className="relative w-full max-w-2xl bg-white h-full shadow-2xl p-20 overflow-y-auto animate-in slide-in-from-right duration-700 flex flex-col custom-scrollbar">
            <div className="flex justify-between items-center mb-24">
              <div>
                <h3 className="text-[11px] font-black text-gold-600 uppercase tracking-[0.6em] mb-4">Directives Glossary</h3>
                <h2 className="text-6xl font-serif font-black text-royal-950 tracking-tighter">Agreement Lexicon</h2>
              </div>
              <button 
                onClick={() => setShowGlossary(false)} 
                className="p-4 bg-slate-100 hover:bg-red-50 hover:text-red-500 rounded-3xl transition-all active:scale-90"
              >
                <X size={48} />
              </button>
            </div>
            <div className="space-y-12 flex-1">
              {GLOSSARY_TERMS.map((item, idx) => (
                <div key={idx} className="pb-12 border-b border-slate-100 last:border-0 group animate-in fade-in slide-in-from-bottom-8 duration-700" style={{ animationDelay: `${idx * 100}ms` }}>
                  <h4 className="font-black text-royal-950 text-3xl mb-4 flex justify-between items-center group-hover:text-gold-600 transition-colors tracking-tighter">
                    {item.term}
                    <div className="h-px flex-1 mx-6 bg-slate-100 group-hover:bg-gold-100 transition-colors"></div>
                  </h4>
                  <p className="text-slate-500 text-xl leading-relaxed font-medium">{item.definition}</p>
                </div>
              ))}
            </div>
            <div className="mt-32 pt-16 border-t border-slate-100">
               <div className="bg-royal-50 p-10 rounded-[3rem] border border-royal-100">
                  <div className="flex items-center gap-4 mb-6">
                     <Info className="text-royal-400" size={32} />
                     <h5 className="font-black text-royal-900 uppercase text-xs tracking-[0.4em]">Internal Security Protocol</h5>
                  </div>
                  <p className="text-sm text-royal-700 font-medium leading-relaxed opacity-60 uppercase tracking-widest">These terms constitute the legal and emotional framework of NB Directive FDSJ-739. Any ambiguity must be resolved through a collaborative audit involving both architects of the Baseline.</p>
               </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
