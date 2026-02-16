
import React, { useState, useEffect, useRef } from 'react';
import { 
  Shield, Scale, Users, FileCheck, Heart, Calendar, 
  BookOpen, AlertTriangle, CheckCircle, X, ChevronRight, 
  ChevronLeft, Activity, Bell, Siren, Quote, Scroll, 
  Headphones, StopCircle, ArrowRight, Sun,
  Lock, PenTool, Check, Info, Zap, Download, RefreshCw,
  Eye, EyeOff, ShieldCheck, Home as HomeIcon, LayoutDashboard,
  BrainCircuit, Sparkles, MapPin, Fingerprint
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
               aria-label={`${d.title} Domain`}
               title={d.title}
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

// --- Main Application Component ---

export default function DigitalBinder() {
  const [showReader, setShowReader] = useState(false);
  const [readerPage, setReaderPage] = useState(0);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [emmaSigned, setEmmaSigned] = useState(false);
  const [craigSigned, setCraigSigned] = useState(false);
  const [showGlossary, setShowGlossary] = useState(false);
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

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (showReader) {
        if (e.key === 'ArrowRight') {
          setReaderPage(prev => {
            if (prev < AGREEMENT_PAGES.length - 1) {
              document.querySelector('.flex-1.overflow-y-auto')?.scrollTo(0, 0);
              return prev + 1;
            }
            return prev;
          });
        } else if (e.key === 'ArrowLeft') {
          setReaderPage(prev => {
            if (prev > 0) {
              document.querySelector('.flex-1.overflow-y-auto')?.scrollTo(0, 0);
              return prev - 1;
            }
            return prev;
          });
        } else if (e.key === 'Escape') {
          setShowReader(false);
        }
      } else if (showGlossary) {
        if (e.key === 'Escape') {
          setShowGlossary(false);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showReader, showGlossary]);

  const toggleSpeech = () => {
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    } else {
      const utterance = new SpeechSynthesisUtterance(AGREEMENT_PAGES[readerPage].readableText);
      utterance.rate = 0.95;
      utterance.onend = () => setIsSpeaking(false);
      window.speechSynthesis.speak(utterance);
      setIsSpeaking(true);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-gold-200 antialiased">
      {/* Dynamic Top Bar */}
      <div className="bg-royal-950 text-royal-200 py-3 px-8 text-[10px] font-black tracking-[0.5em] uppercase flex justify-between items-center shrink-0 border-b border-white/5 z-50">
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_12px_rgba(16,185,129,0.7)]"></div>
            DIRECTIVE SYSTEM: ONLINE
          </div>
          <div className="hidden lg:flex items-center gap-3 opacity-40 hover:opacity-100 transition-opacity">
             <Shield size={14} /> THE HARPER BASELINE PROTOCOL
          </div>
        </div>
        <div className="font-mono flex items-center gap-6">
          <span className="opacity-40">{time.toLocaleDateString()}</span>
          <span className="text-white font-black">{time.toLocaleTimeString()}</span>
        </div>
      </div>

      {/* Modern Sticky Nav */}
      <header className={`sticky top-0 z-40 transition-all duration-700 ${scrolled ? 'bg-white/80 backdrop-blur-2xl shadow-2xl py-4' : 'bg-white py-12'}`}>
        <div className="container mx-auto px-8 flex justify-between items-center gap-6">
          <div className="group cursor-pointer flex items-center gap-6">
            <div className="p-4 bg-royal-900 text-white rounded-[1.5rem] transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 shadow-xl shadow-royal-900/20">
              <Shield size={28} />
            </div>
            <div>
              <h1 className="text-4xl font-display font-black text-royal-950 tracking-tighter leading-none">
                Harper Baseline
              </h1>
              <p className="text-[11px] text-slate-400 font-black uppercase tracking-[0.4em] mt-2">Directive FDSJ-739-2024</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <HeartbeatHeader />
            <div className="h-10 w-px bg-slate-200 mx-2"></div>
            <button 
               onClick={() => setShowGlossary(true)} 
               className="hidden md:flex px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all items-center gap-3 border border-slate-200 active:scale-95"
            >
              <BookOpen size={18} /> Lexicon
            </button>
            <button 
               onClick={() => setShowReader(true)} 
               className="px-8 py-4 bg-royal-950 hover:bg-royal-900 text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-2xl shadow-royal-900/20 flex items-center gap-3 active:scale-95 transition-all"
            >
              <Scroll size={22} /> <span className="hidden sm:inline">Open Directive</span>
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-8 py-20 space-y-32">
        {/* Immersive Hero */}
        <section className="max-w-6xl mx-auto text-center space-y-12 animate-in fade-in slide-in-from-top-12 duration-1000">
           <div className="flex justify-center gap-6 mb-8">
              <StatusBadge label="Directives Active" active />
              <StatusBadge label="Monitoring Guard" active />
           </div>
           <h2 className="text-7xl md:text-9xl font-serif font-black text-royal-950 leading-[0.95] tracking-tighter">
             "Only the <span className="text-gold-500 italic relative inline-block">truth. <div className="absolute -bottom-2 left-0 w-full h-2 bg-gold-200 -z-10 rotate-[-1deg]"></div></span> What <span className="underline decoration-gold-400 underline-offset-12 decoration-8">God would do.</span>"
           </h2>
           <p className="text-3xl text-slate-400 font-serif italic max-w-4xl mx-auto leading-relaxed">
             A transition from facing off to standing <span className="text-royal-900 font-black not-italic border-b-4 border-gold-500/30">Back-to-Back</span> to protect the child born 11-12-2024.
           </p>
        </section>

        {/* Modular Grid System */}
        <section className="grid lg:grid-cols-12 gap-10">
           <div className="lg:col-span-8 bg-white p-16 rounded-[4rem] shadow-2xl shadow-royal-950/5 border border-slate-100/50 animate-in fade-in zoom-in duration-1000 delay-200">
              <RoadmapTracker />
           </div>
           <div className="lg:col-span-4 space-y-10 animate-in fade-in slide-in-from-right-12 duration-1000 delay-400">
              <InteractiveExhibit />
              <div className="bg-gradient-to-br from-pink-500 to-pink-600 p-12 rounded-[3.5rem] text-white shadow-2xl flex flex-col justify-between h-[340px] group overflow-hidden relative shadow-pink-500/20 hover:shadow-pink-500/40 transition-all duration-700">
                 <Heart size={200} className="absolute -bottom-16 -right-16 opacity-10 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-1000" />
                 <div className="relative z-10">
                    <h4 className="text-[11px] font-black uppercase tracking-[0.4em] mb-6 opacity-70">Sovereignty Shield</h4>
                    <p className="text-4xl font-serif font-black leading-tight tracking-tight">Protected Autonomy for Emma Ryan</p>
                 </div>
                 <div className="relative z-10 flex items-center gap-3 text-[10px] font-black uppercase tracking-widest mt-8 bg-white/10 w-fit px-6 py-3 rounded-full backdrop-blur-xl border border-white/20">
                   <Shield size={16} /> Directive Active
                 </div>
              </div>
           </div>
        </section>

        {/* Modules Slider Title */}
        <section className="space-y-12">
           <div className="flex items-end justify-between border-b border-slate-200 pb-10">
              <div>
                 <h3 className="text-xs font-black text-gold-600 uppercase tracking-[0.6em] mb-4">Agreement Modules</h3>
                 <h2 className="text-6xl font-serif font-black text-royal-950 tracking-tighter">The Directive Core</h2>
              </div>
           </div>
           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {AGREEMENT_PAGES.map((page, idx) => (
                <div key={page.id} onClick={() => { setReaderPage(idx); setShowReader(true); }} className="bg-white p-12 rounded-[3.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 cursor-pointer group flex flex-col justify-between h-[420px] relative overflow-hidden">
                   <div className="absolute top-0 right-0 w-48 h-48 bg-royal-50 rounded-full translate-x-12 -translate-y-12 opacity-0 group-hover:opacity-100 transition-all duration-1000 group-hover:translate-x-4 group-hover:-translate-y-4"></div>
                   <div className="relative z-10">
                     <div className="p-6 bg-royal-50 rounded-[2rem] group-hover:bg-royal-900 group-hover:text-white transition-all duration-500 inline-block mb-10 shadow-inner">
                        <FileCheck size={36} />
                     </div>
                     <h4 className="text-3xl font-serif font-black text-royal-950 mb-6 leading-none group-hover:text-royal-900 transition-colors tracking-tighter">{page.title}</h4>
                     <p className="text-sm text-slate-400 font-bold leading-relaxed opacity-60">Verified Directive regarding the protocol for {page.id}.</p>
                   </div>
                   <div className="relative z-10 text-[11px] font-black text-gold-600 tracking-[0.4em] uppercase flex items-center gap-4 mt-6 group-hover:gap-8 transition-all">
                      DEPLOY MODULE <ArrowRight size={20} />
                   </div>
                </div>
              ))}
           </div>
        </section>

        {/* Shared Signature Oath */}
        <section className="py-32 border-y-2 border-slate-100 text-center space-y-20 bg-white rounded-[6rem] shadow-2xl relative overflow-hidden shadow-royal-950/5">
           <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-royal-950 via-gold-500 to-royal-950 opacity-10"></div>
           <div className="max-w-4xl mx-auto px-8">
              <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.8em] mb-8">The Unified Oath of Baseline</h3>
              <h2 className="text-6xl font-serif font-black text-royal-950 leading-[1.05] tracking-tighter">"This document is the <span className="text-gold-500 italic">architecture of unity</span>. We stand as the final authority."</h2>
           </div>

           <div className="flex flex-col xl:flex-row items-center justify-center gap-24 px-12">
              <div className="space-y-6">
                 <button 
                   onClick={() => setEmmaSigned(!emmaSigned)}
                   className={`w-96 h-48 rounded-[3rem] border-4 transition-all duration-1000 flex flex-col items-center justify-center gap-4 overflow-hidden relative group ${emmaSigned ? 'bg-emerald-50 border-emerald-500 shadow-[0_40px_80px_rgba(16,185,129,0.2)]' : 'bg-white border-slate-100 hover:border-pink-300 hover:shadow-2xl'}`}
                 >
                   {emmaSigned ? (
                     <>
                       <div className="absolute top-0 right-0 p-6 opacity-5"><Check size={120}/></div>
                       <PenTool size={28} className="text-emerald-500 mb-2" />
                       <span className="font-serif italic text-royal-950 text-4xl font-black">Emma Elizabeth Ryan</span>
                       <span className="text-[10px] font-black text-emerald-600 tracking-[0.4em] uppercase">Identity Authenticated</span>
                     </>
                   ) : (
                     <div className="flex flex-col items-center gap-5">
                        <div className="p-5 bg-slate-50 rounded-[2rem] group-hover:bg-pink-50 transition-colors">
                           <Lock size={32} className="text-slate-300 group-hover:text-pink-400" />
                        </div>
                        <span className="text-[11px] font-black text-slate-400 tracking-[0.5em]">ATTEST AS MOTHER</span>
                     </div>
                   )}
                 </button>
              </div>

              <div className="hidden xl:flex flex-col items-center gap-4">
                 <div className="h-24 w-1 bg-slate-100"></div>
                 <Heart size={32} className={`transition-all duration-1000 ${emmaSigned && craigSigned ? 'text-pink-500 scale-150 animate-pulse' : 'text-slate-100'}`} />
                 <div className="h-24 w-1 bg-slate-100"></div>
              </div>

              <div className="space-y-6">
                 <button 
                   onClick={() => setCraigSigned(!craigSigned)}
                   className={`w-96 h-48 rounded-[3rem] border-4 transition-all duration-1000 flex flex-col items-center justify-center gap-4 overflow-hidden relative group ${craigSigned ? 'bg-emerald-50 border-emerald-500 shadow-[0_40px_80px_rgba(16,185,129,0.2)]' : 'bg-white border-slate-100 hover:border-royal-300 hover:shadow-2xl'}`}
                 >
                   {craigSigned ? (
                     <>
                       <div className="absolute top-0 right-0 p-6 opacity-5"><Check size={120}/></div>
                       <PenTool size={28} className="text-emerald-500 mb-2" />
                       <span className="font-serif italic text-royal-950 text-4xl font-black">Craig Alexander Schulz</span>
                       <span className="text-[10px] font-black text-emerald-600 tracking-[0.4em] uppercase">Identity Authenticated</span>
                     </>
                   ) : (
                     <div className="flex flex-col items-center gap-5">
                        <div className="p-5 bg-slate-50 rounded-[2rem] group-hover:bg-royal-50 transition-colors">
                           <Lock size={32} className="text-slate-300 group-hover:text-royal-400" />
                        </div>
                        <span className="text-[11px] font-black text-slate-400 tracking-[0.5em]">ATTEST AS FATHER</span>
                     </div>
                   )}
                 </button>
              </div>
           </div>

           {emmaSigned && craigSigned && (
             <div className="text-emerald-600 font-black text-4xl animate-in zoom-in fade-in duration-1000 flex items-center justify-center gap-8 bg-emerald-50 py-12 border-y-2 border-emerald-100 tracking-tighter shadow-inner">
                <ShieldCheck size={54} /> DIRECTIVE PROTOCOL SEALED • CASE CONCLUDED
             </div>
           )}
        </section>
      </main>

      {/* Footer Branding */}
      <footer className="bg-royal-950 py-40 text-center relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
         <div className="container mx-auto px-8 space-y-16">
           <div className="flex flex-col items-center gap-10">
              <div className="p-10 bg-white/5 rounded-[4rem] border border-white/5 backdrop-blur-2xl shadow-inner group">
                 <Heart className="text-pink-500 animate-pulse group-hover:scale-125 transition-transform duration-700" size={80} />
              </div>
              <div className="space-y-6">
                 <p className="text-white text-sm font-black uppercase tracking-[0.8em]">Two Roofs • One Heart • One Blueprint</p>
                 <div className="flex flex-wrap items-center justify-center gap-12 text-[11px] font-black text-royal-500 tracking-[0.4em]">
                    <span className="flex items-center gap-3"><Check size={16}/> RADICAL TRUTH</span>
                    <span className="flex items-center gap-3"><Check size={16}/> BEST INTEREST</span>
                    <span className="flex items-center gap-3"><Check size={16}/> DIVINE ORDER</span>
                 </div>
              </div>
           </div>
           <div className="pt-20 border-t border-white/5 max-w-2xl mx-auto">
              <p className="text-royal-600 text-[10px] font-mono leading-loose uppercase tracking-widest opacity-60">
                 INTERNAL DIRECTIVE • NB CASE FDSJ-739-2024 • QUISPAMSIS JURISDICTION • UNAUTHORIZED MODIFICATION TRIGGERS AUTOMATIC AUDIT RECORD.
              </p>
           </div>
         </div>
      </footer>

      {/* Reader Mode Layout */}
      {showReader && (
        <div className="fixed inset-0 z-[60] flex flex-col bg-white animate-in fade-in slide-in-from-bottom-24 duration-1000">
          <nav className="bg-royal-950 text-white px-12 py-8 flex justify-between items-center shadow-2xl relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-r from-royal-900 to-transparent opacity-50"></div>
             <div className="flex items-center gap-10 relative z-10">
                <div className="p-6 bg-royal-800 rounded-[2rem] shadow-inner border border-white/5"><Scroll size={48} className="text-gold-400" /></div>
                <div>
                   <h2 className="font-serif font-black text-4xl tracking-tighter">Parenting Directive</h2>
                   <div className="flex items-center gap-4 mt-2">
                      <span className="text-[11px] font-black text-royal-400 uppercase tracking-[0.4em]">Module {readerPage + 1} // Primary</span>
                      <div className="h-1.5 w-1.5 bg-royal-700 rounded-full"></div>
                      <span className="text-[11px] font-mono text-royal-500 uppercase tracking-widest">Protocol: FDSJ-739</span>
                   </div>
                </div>
             </div>
             <div className="flex gap-6 relative z-10">
                <button 
                   onClick={toggleSpeech} 
                   className={`flex items-center gap-4 px-10 py-5 rounded-3xl font-black text-xs uppercase tracking-[0.2em] transition-all duration-500 ${isSpeaking ? 'bg-red-500 animate-pulse shadow-[0_0_40px_rgba(239,68,68,0.4)]' : 'bg-royal-800 hover:bg-royal-700 border border-white/10'}`}
                >
                   {isSpeaking ? <><StopCircle size={24}/> Deactivate</> : <><Headphones size={24}/> Voice Feed</>}
                </button>
                <button 
                   onClick={() => setShowReader(false)} 
                   aria-label="Close Reader Mode"
                   className="p-5 bg-royal-800 hover:bg-red-500 rounded-3xl transition-all border border-white/10 active:scale-95 shadow-xl"
                >
                   <X size={36} />
                </button>
             </div>
          </nav>

          <div className="flex-1 overflow-hidden flex flex-col lg:flex-row">
             <div className="flex-1 overflow-y-auto p-16 lg:p-32 bg-white shadow-inner custom-scrollbar scroll-smooth">
                <div className="max-w-5xl mx-auto space-y-24 animate-in fade-in slide-in-from-bottom-12 duration-1000">
                   <div className="border-b border-slate-100 pb-16 flex justify-between items-end">
                      <div className="space-y-4">
                         <span className="text-[11px] font-black text-gold-500 uppercase tracking-[0.6em]">System Architecture</span>
                         <h2 className="text-8xl font-serif font-black text-royal-950 tracking-tighter leading-none">{AGREEMENT_PAGES[readerPage].title}</h2>
                      </div>
                      <div className="hidden sm:block text-right pb-2">
                         <div className="text-[10px] font-black text-slate-300 uppercase tracking-[0.4em] mb-2">Internal Clearance</div>
                         <div className="text-emerald-500 text-xs font-black uppercase tracking-widest bg-emerald-50 px-4 py-2 rounded-xl">Deployment Ready</div>
                      </div>
                   </div>
                   <div className="text-slate-700 font-medium text-2xl leading-relaxed">
                      {AGREEMENT_PAGES[readerPage].content}
                   </div>
                   
                   <div className="pt-32 opacity-10 hover:opacity-50 transition-opacity duration-1000">
                      <div className="h-[2px] w-full bg-slate-200"></div>
                      <div className="flex justify-between py-10 font-mono text-[10px] uppercase tracking-widest font-black">
                         <span>SECURE HASH: 0x{Math.random().toString(16).substr(2, 16).toUpperCase()}</span>
                         <span>PAGE AUTHENTICATION {readerPage + 1} of {AGREEMENT_PAGES.length}</span>
                      </div>
                   </div>
                </div>
             </div>
             
             <aside className="w-full lg:w-[600px] bg-slate-50 border-l border-slate-100 p-16 overflow-y-auto space-y-12 shadow-[-40px_0_80px_rgba(0,0,0,0.03)] z-10 custom-scrollbar">
                <div className="flex items-center gap-4 mb-16">
                   <div className="h-3 w-3 bg-gold-500 rounded-full shadow-[0_0_10px_rgba(245,158,11,0.5)]"></div>
                   <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.5em]">Contextual Analysis</h3>
                </div>
                {AGREEMENT_PAGES[readerPage].sidebar.map((item, idx) => (
                  <SidebarCard key={idx} item={item} />
                ))}
             </aside>
          </div>

          {/* Reader Control Dock */}
          <div className="bg-white border-t border-slate-100 p-10 flex justify-between items-center px-24 shadow-[0_-20px_60px_rgba(0,0,0,0.05)] relative z-20">
             <button 
               onClick={() => {
                 setReaderPage(p => Math.max(0, p - 1));
                 document.querySelector('.flex-1.overflow-y-auto')?.scrollTo(0, 0);
               }} 
               disabled={readerPage === 0} 
               className="flex items-center gap-4 px-16 py-6 rounded-3xl font-black text-xs uppercase tracking-widest border-2 border-slate-100 hover:bg-slate-50 transition-all disabled:opacity-20 active:scale-95 group"
             >
                <ChevronLeft size={24} className="transition-transform group-hover:-translate-x-2" /> Previous
             </button>
             <div className="flex gap-6">
               {AGREEMENT_PAGES.map((_, i) => (
                 <div 
                   key={i} 
                   onClick={() => setReaderPage(i)}
                   className={`h-3 rounded-full cursor-pointer transition-all duration-1000 ${i === readerPage ? 'bg-royal-950 w-24 shadow-2xl' : 'bg-slate-200 w-6 hover:bg-slate-300'}`}
                 ></div>
               ))}
             </div>
             <button 
               onClick={() => {
                 setReaderPage(p => Math.min(AGREEMENT_PAGES.length - 1, p + 1));
                 document.querySelector('.flex-1.overflow-y-auto')?.scrollTo(0, 0);
               }} 
               disabled={readerPage === AGREEMENT_PAGES.length - 1} 
               className="flex items-center gap-4 px-16 py-6 bg-royal-950 text-white rounded-3xl font-black text-xs uppercase tracking-widest hover:bg-royal-900 transition-all shadow-2xl active:scale-95 group"
             >
                Continue <ChevronRight size={24} className="transition-transform group-hover:translate-x-2" />
             </button>
          </div>
        </div>
      )}

      {/* Lexicon / Glossary Modal */}
      {showGlossary && (
        <div className="fixed inset-0 z-[70] flex justify-end">
          <div className="absolute inset-0 bg-royal-950/70 backdrop-blur-2xl transition-opacity" onClick={() => setShowGlossary(false)}></div>
          <div className="relative w-full max-w-2xl bg-white h-full shadow-2xl p-20 overflow-y-auto animate-in slide-in-from-right duration-700 flex flex-col custom-scrollbar">
            <div className="flex justify-between items-center mb-24">
              <div>
                <h3 className="text-[11px] font-black text-gold-600 uppercase tracking-[0.6em] mb-4">Directives Glossary</h3>
                <h2 className="text-6xl font-serif font-black text-royal-950 tracking-tighter">Agreement Lexicon</h2>
              </div>
              <button 
                onClick={() => setShowGlossary(false)} 
                aria-label="Close Glossary"
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
