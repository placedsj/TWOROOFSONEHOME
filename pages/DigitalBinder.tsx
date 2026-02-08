import React, { useState, useEffect } from 'react';
import { 
  Shield, Scale, Users, FileCheck, Heart, Calendar, 
  BookOpen, AlertTriangle, CheckCircle, X, ChevronRight, 
  ChevronLeft, Activity, Bell, Siren, Quote, Scroll, 
  Headphones, StopCircle, PlayCircle, ArrowRight, Info, Sun,
  Lock, PenTool, Check
} from 'lucide-react';

// --- Types & Data ---

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
  { term: "Harper Baseline", definition: "A verified standard where safety is proven by data (The Exhibit Generator), not by hearsay.", pageIndex: 1 },
  { term: "Benchmark of Stability", definition: "Verified sobriety, gambling-free status, and behavioral compliance establishing the father's current standing.", pageIndex: 0 },
  { term: "Circle of Two", definition: "The doctrine that parental authority belongs exclusively to the Mother and Father, excluding extended family from decision-making.", pageIndex: 2 },
  { term: "Parental Primacy", definition: "The exclusive right of the Mother and Father to make parenting decisions, overriding extended family opinions.", pageIndex: 2 },
  { term: "Zero Vote", definition: "The status of extended family members (grandparents, aunts) having no decision-making power.", pageIndex: 2 },
  { term: "Exhibit Generator", definition: "A monthly automated report documenting bio-medical results, meeting logs, and behavioral compliance to verify stability.", pageIndex: 1 },
  { term: "Glass House", definition: "The principle of total transparency where the Father waives privacy rights for screening and attendance to build trust.", pageIndex: 1 },
  { term: "Hire the System", definition: "The Father's voluntary waiver of privacy rights to allow third-party verification of sobriety and conduct.", pageIndex: 1 },
  { term: "Sanctuary Model", definition: "A provision allowing the Mother to stay in a guest suite at the Father's home to support parenting time while maintaining oversight.", pageIndex: 3 },
  { term: "Jane Block", definition: "A mandatory 6-month cooling-off period where the maternal grandmother has zero contact to allow the Mother to establish autonomy.", pageIndex: 2 },
  { term: "Sunrise Clause", definition: "The target date (March 1, 2028) where, upon successful compliance, all monitoring ceases, costs are waived, and 50/50 custody becomes automatic.", pageIndex: 4 },
  { term: "Jubilee Grace", definition: "The waiver of $50,000 in legal costs and cessation of monitoring fees upon reaching the Sunrise date.", pageIndex: 4 },
  { term: "Back-to-Back", definition: "The core philosophy of the parents facing outward to protect the family unit, rather than facing off against each other.", pageIndex: 0 },
];

const AGREEMENT_PAGES: AgreementPage[] = [
  {
    id: 'foundation',
    title: 'Part One: The Foundation',
    readableText: "Part One: The Foundation. Section 1.1: The Integrity of Recovery. The Father explicitly rejects the minimization of his past in the Pre-Sentence Report and asks the Court to take Judicial Notice of his 'Benchmark of Stability'. This includes verified sobriety through active monitoring, being 2 years gambling-free, and successful completion of Celebrate Recovery. This is not minimization. This is transformation. Section 1.2: The Mother's Position. The Mother, Emma Elizabeth Ryan, is recognized as a capable, loving parent who deserves independence and autonomy. She is a person whose judgment has been systematically undermined by her family of origin. This agreement is explicitly designed to liberate Emma from external family control and position her as an equal co-architect of Harper's future.",
    content: (
      <div className="space-y-6 text-lg leading-relaxed text-slate-700">
        <h3 className="text-2xl font-serif font-bold text-royal-900">1.1 The Integrity of Recovery</h3>
        <p>The Father explicitly rejects the minimization of his past in the PSR and asks the Court to take Judicial Notice of his "Benchmark of Stability":</p>
        <ul className="list-disc pl-5 space-y-2 font-medium text-slate-800">
          <li>Verified Sobriety (Active Monitoring)</li>
          <li>2 Years Gambling-Free</li>
          <li>Successful navigation of a 129-day administrative separation without breach of peace</li>
          <li>Completion of Celebrate Recovery (spiritual foundation)</li>
        </ul>
        <p>This is not minimization. This is transformation.</p>

        <h3 className="text-2xl font-serif font-bold text-royal-900 mt-8">1.2 The Mother's Position</h3>
        <p>The Mother, Emma Elizabeth Ryan, is recognized as a capable, loving parent who deserves independence and autonomy. She is a person whose judgment has been systematically undermined by her family of origin.</p>
        <p>This agreement is explicitly designed to liberate Emma from external family control and position her as an equal co-architect of Harper's future.</p>
      </div>
    ),
    sidebar: [
      {
        type: 'verse',
        title: "Proverbs 28:13",
        content: "Whoever conceals their sins does not prosper, but the one who confesses and renounces them finds mercy."
      },
      {
        type: 'quote',
        content: "We survived the trauma. We survived the separation. We survived the noise.",
        author: "Dedication"
      }
    ]
  },
  {
    id: 'baseline',
    title: 'The Harper Baseline',
    readableText: "The Harper Baseline. Section 2.1: The Problem Being Addressed. The current state relies on unverified claims about sobriety, reports filled with hearsay, and a system where accusations can be made without evidence. The new standard creates objective, measurable data about safety. A 'Glass House' where both parents' commitment is visible and verifiable. Section 2.3: The 'Glass House' Principle. The Father agrees to 'Hire the System.' He waives privacy rights for all substance screening results, attendance records, and employment verification. This is not punishment. It is transparency that builds trust.",
    content: (
      <div className="space-y-6 text-lg leading-relaxed text-slate-700">
        <h3 className="text-2xl font-serif font-bold text-royal-900">2.1 The Problem Being Addressed</h3>
        <p>Current State: Unverified claims about sobriety, reports filled with hearsay, and a system where accusations can be made without evidence.</p>
        <p>New Standard: Objective, measurable data about safety. A "Glass House" where both parents' commitment is visible and verifiable.</p>

        <h3 className="text-2xl font-serif font-bold text-royal-900 mt-8">2.3 The "Glass House" Principle</h3>
        <p>The Father agrees to "Hire the System." He waives privacy rights for all substance screening results, attendance records, and employment verification.</p>
        <p>This is not punishment. It is transparency that builds trust.</p>
      </div>
    ),
    sidebar: [
      {
        type: 'thought',
        title: "The Logic",
        content: "If you have nothing to hide, hiding nothing proves you have nothing to hide."
      },
      {
        type: 'quote',
        content: "Safety is proven by data, not by hearsay.",
        author: "Core Value"
      }
    ]
  },
  {
    id: 'circle',
    title: 'The Circle of Two',
    readableText: "The Circle of Two. Section 3.1: Parental Primacy. The authority to raise Harper belongs exclusively and equally to Mom and Dad. Extended family, including grandmothers, aunts, and uncles, are loved guests in Harper's life. They have zero vote in parenting decisions. Section 3.3: Breaking the Cycle. The Mother's family of origin have operated as de facto co-parents. This agreement breaks that pattern. Emma is granted Sole Authority over lifestyle decisions and Lead Authority over educational decisions. She has the right to say 'No' to her parents and have that decision be final.",
    content: (
      <div className="space-y-6 text-lg leading-relaxed text-slate-700">
        <h3 className="text-2xl font-serif font-bold text-royal-900">3.1 Parental Primacy</h3>
        <p>The authority to raise Harper belongs exclusively and equally to Mom and Dad. Extended family—grandmothers, aunts, uncles—are loved guests in Harper's life. They have <span className="relative group cursor-help ml-1 font-bold text-red-600 underline decoration-dotted">zero vote<div className="absolute hidden group-hover:block bottom-full left-1/2 -translate-x-1/2 mb-2 p-3 bg-red-700 text-white text-xs rounded-lg shadow-lg whitespace-normal w-48 text-center z-20">No decision-making power on Harper's medical, educational, or routine daily matters.</div></span> in parenting decisions.</p>

        <h3 className="text-2xl font-serif font-bold text-royal-900 mt-8">3.3 Breaking the Cycle</h3>
        <p>The Mother's family of origin have operated as de facto co-parents. This agreement breaks that pattern.</p>
        <p>Emma is granted Sole Authority over lifestyle decisions and Lead Authority over educational decisions. She has the right to say "No" to her parents and have that decision be final.</p>
      </div>
    ),
    sidebar: [
      {
        type: 'quote',
        content: "We, the parents, haven't been told 'No' when we stand together. This document is the architecture of that unity.",
        author: "The Conclusion"
      },
      {
        type: 'thought',
        title: "To Emma",
        content: "You don't have to ask your mother for permission. You can ask Dad. He will be there for you."
      }
    ]
  },
  {
    id: 'phases',
    title: 'The Roadmap (Custody)',
    readableText: "The Roadmap to Custody. Phase 1: Foundation, covering Months 1 to 6. Emma is not relegated to 'supervised access' but is established as a full parent from Day 1. The schedule alternates primary custody week-to-week to practice co-parenting in real-time. The 'Sanctuary Model': If the Mother needs additional support, the Father offers a guest room at his residence for Mother to stay during her overnight time. This allows Mother to be present for Harper while maintaining safety oversight. The message is simple: 'You are not alone in this; Dad is here to support your parenting journey.'",
    content: (
      <div className="space-y-6 text-lg leading-relaxed text-slate-700">
        <h3 className="text-2xl font-serif font-bold text-royal-900">Phase 1: Foundation (Months 1-6)</h3>
        <p>Emma is not relegated to "supervised access" but is established as a full parent from Day 1. The schedule alternates primary custody week-to-week to practice co-parenting in real-time.</p>

        <h3 className="text-2xl font-serif font-bold text-royal-900 mt-8">The "Sanctuary Model"</h3>
        <p>If the Mother needs additional support, the Father offers a guest room at his residence for Mother to stay during her overnight time. This allows Mother to be present for Harper while maintaining safety oversight.</p>
        <p className="italic text-slate-500">Message: "You are not alone in this; Dad is here to support your parenting journey."</p>
      </div>
    ),
    sidebar: [
      {
        type: 'thought',
        title: "The Goal",
        content: "Harper needs her parents as a unified team. Apart, we found we had no control. Together, we are unstoppable."
      }
    ]
  },
  {
    id: 'legacy',
    title: 'The Sunrise Clause',
    readableText: "The Sunrise Clause. Target Date: March 1, 2028. If both parents meet all criteria for 24 consecutive months, the family automatically transitions to 50/50 Shared Parenting and Joint Custody. The Jubilee Grace: On this date, the Father waives $50,000 in accumulated legal costs. All monitoring conditions cease. All costs associated with compliance disappear. No parent bears the burden of the other's probationary past. The family moves forward as equal partners.",
    content: (
      <div className="space-y-6 text-lg leading-relaxed text-slate-700">
        <h3 className="text-2xl font-serif font-bold text-royal-900">March 1, 2028</h3>
        <p>If both parents meet all criteria for 24 consecutive months, the family automatically transitions to 50/50 Shared Parenting and Joint Custody.</p>
        
        <h3 className="text-2xl font-serif font-bold text-royal-900 mt-8">The Jubilee Grace</h3>
        <p>On this date, the Father waives $50,000 in accumulated legal costs. All monitoring conditions cease. All costs associated with compliance disappear.</p>
        <p>No parent bears the burden of the other's probationary past. The family moves forward as equal partners.</p>
      </div>
    ),
    sidebar: [
      {
        type: 'quote',
        content: "We made it. Welcome home, Mom.",
        author: "The Sunrise Message"
      },
      {
        type: 'thought',
        title: "Freedom",
        content: "We earned our way back to each other. We earned our way to freedom."
      }
    ]
  }
];

// --- Sub-components ---

const SidebarCard: React.FC<{ item: SidebarItem }> = ({ item }) => {
  const bgColors = {
    verse: 'bg-amber-50 border-amber-200 text-amber-900',
    quote: 'bg-royal-50 border-royal-200 text-royal-900',
    thought: 'bg-slate-50 border-slate-200 text-slate-700',
    letter: 'bg-pink-50 border-pink-200 text-pink-900'
  };

  const icons = {
    verse: <BookOpen size={16} className="text-amber-600" />,
    quote: <Quote size={16} className="text-royal-600" />,
    thought: <Sun size={16} className="text-slate-500" />,
    letter: <Heart size={16} className="text-pink-500" />
  };

  return (
    <div className={`p-6 rounded-xl border ${bgColors[item.type]} shadow-sm`}>
      <div className="flex items-center gap-2 mb-3 opacity-70 uppercase tracking-widest text-xs font-bold">
        {icons[item.type]}
        <span>{item.title || item.type}</span>
      </div>
      <div className="font-serif text-lg leading-relaxed mb-3 italic">
        "{item.content}"
      </div>
      {item.author && (
        <div className="text-sm font-bold opacity-60 text-right">— {item.author}</div>
      )}
    </div>
  );
};

const Modal: React.FC<{ isOpen: boolean; onClose: () => void; title: string; children?: React.ReactNode }> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-royal-900/80 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
        <div className="bg-royal-800 p-6 flex justify-between items-center text-white shrink-0">
          <h2 className="text-2xl font-serif font-bold">{title}</h2>
          <button onClick={onClose} className="p-2 hover:bg-royal-700 rounded-full transition-colors">
            <X size={24} />
          </button>
        </div>
        <div className="p-8 overflow-y-auto leading-relaxed text-slate-700 space-y-4">
          {children}
        </div>
        <div className="p-4 border-t border-slate-100 bg-slate-50 flex justify-end shrink-0">
          <button onClick={onClose} className="px-6 py-2 bg-royal-800 text-white rounded-lg hover:bg-royal-700 font-medium transition-colors">
            Close View
          </button>
        </div>
      </div>
    </div>
  );
};

const StatusCard = ({ label, value, subtext, active, icon: Icon }: { label: string; value: string; subtext: string; active?: boolean; icon?: any }) => (
  <div className={`p-6 rounded-xl border ${active ? 'bg-white border-gold-500 shadow-lg shadow-gold-500/10' : 'bg-slate-50 border-slate-200'} transition-all flex items-center gap-4`}>
    {Icon && <div className={`p-3 rounded-lg ${active ? 'bg-gold-50 text-gold-600' : 'bg-slate-100 text-slate-400'}`}><Icon size={24}/></div>}
    <div>
      <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">{label}</div>
      <div className="text-xl font-serif font-bold text-royal-900 leading-tight">{value}</div>
      <div className="text-[10px] text-slate-400 font-medium uppercase tracking-tighter">{subtext}</div>
    </div>
  </div>
);

// --- Main Component ---

export default function DigitalBinder() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [showReader, setShowReader] = useState(false);
  const [readerPage, setReaderPage] = useState(0);
  const [time, setTime] = useState(new Date());
  const [emmaSigned, setEmmaSigned] = useState(false);
  const [craigSigned, setCraigSigned] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

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

  const sections: Section[] = [
    {
      id: 'foundation',
      title: 'The Foundation',
      category: 'foundation',
      icon: <Scale className="w-8 h-8 text-gold-500" />,
      shortDesc: 'Establishing the "Benchmark of Stability" and transformation over minimization.',
      fullContent: AGREEMENT_PAGES[0].content
    },
    {
      id: 'baseline',
      title: 'Harper Baseline',
      category: 'safety',
      icon: <FileCheck className="w-8 h-8 text-royal-500" />,
      shortDesc: 'The Glass House principle. Hiring the system to prove safety through data.',
      fullContent: AGREEMENT_PAGES[1].content
    },
    {
      id: 'circle',
      title: 'Circle of Two',
      category: 'custody',
      icon: <Users className="w-8 h-8 text-royal-500" />,
      shortDesc: 'Parental Primacy. Zero vote for extended family. Protecting the core unit.',
      fullContent: (
        <div className="space-y-8">
          <div className="flex items-center justify-center p-12 bg-slate-50 rounded-2xl relative overflow-hidden">
             <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute top-0 left-0 w-64 h-64 bg-royal-500 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-gold-500 rounded-full translate-x-1/2 translate-y-1/2"></div>
             </div>
             <div className="relative w-80 h-80 flex items-center justify-center">
                {/* Excluded Ring */}
                <div className="absolute inset-[-40px] border-2 border-dashed border-red-200 rounded-full animate-spin-slow"></div>
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1 bg-red-50 text-red-500 text-[10px] font-bold uppercase tracking-widest rounded-full border border-red-100">The Outer Zone (No Authority)</div>
                
                {/* Parents Ring */}
                <div className="absolute inset-[-10px] border-4 border-gold-400 rounded-full bg-white shadow-xl flex items-center justify-center">
                   <div className="flex flex-col items-center gap-1 font-serif text-gold-800 font-bold">
                      <span className="text-sm">MOM & DAD</span>
                      <span className="text-[10px] uppercase tracking-tighter opacity-70">Unified Authority</span>
                   </div>
                </div>

                {/* Harper Core */}
                <div className="absolute inset-12 border-2 border-royal-900 rounded-full bg-royal-900 text-white flex flex-col items-center justify-center shadow-2xl z-10">
                   <Heart className="mb-2 text-pink-400 fill-pink-400 animate-pulse" size={32} />
                   <span className="font-serif font-bold text-2xl tracking-widest">HARPER</span>
                   <span className="text-[8px] uppercase font-bold tracking-widest opacity-60">The Protected Core</span>
                </div>
             </div>
          </div>
          {AGREEMENT_PAGES[2].content}
        </div>
      )
    },
    {
      id: 'roadmap',
      title: 'The Roadmap',
      category: 'custody',
      icon: <Calendar className="w-8 h-8 text-royal-500" />,
      shortDesc: 'From Month 1 Foundation to the automatic transition of March 2028.',
      fullContent: AGREEMENT_PAGES[3].content
    },
    {
      id: 'sunrise',
      title: 'Sunrise Clause',
      category: 'legacy',
      icon: <Sun className="w-8 h-8 text-gold-500" />,
      shortDesc: 'Jubilee Grace. Total freedom. March 1st, 2028.',
      fullContent: AGREEMENT_PAGES[4].content
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
      {/* Dynamic Status Bar */}
      <div className="bg-royal-950 text-royal-200 py-1.5 px-4 text-[10px] font-bold tracking-[0.2em] uppercase flex justify-between items-center shrink-0">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
            SYSTEM ARMED: MONITORING ACTIVE
          </div>
          <div className="opacity-40">|</div>
          <div>HARPER BASELINE V1.2.4</div>
        </div>
        <div className="font-mono">{time.toLocaleTimeString()} — {time.toLocaleDateString()}</div>
      </div>

      <header className="bg-white border-b border-slate-200 py-6 sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-4 flex justify-between items-end">
          <div className="space-y-1">
            <h1 className="text-3xl font-display font-bold text-royal-900 tracking-tight">The Harper Baseline</h1>
            <p className="text-xs text-slate-500 font-medium uppercase tracking-widest">CASE: FDSJ-739-2024 • Interactive Parenting Directive</p>
          </div>
          <div className="flex gap-2">
            <button onClick={() => setShowReader(true)} className="flex items-center gap-2 px-5 py-2.5 bg-gold-600 hover:bg-gold-500 text-white rounded-lg font-bold transition-all shadow-lg shadow-gold-500/20 active:scale-95">
              <Scroll size={18} />
              Open Binder
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-12 space-y-12">
        {/* Welcome Block */}
        <section className="grid lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2 space-y-6">
             <h2 className="text-5xl font-serif font-bold text-royal-900 leading-[1.15]">
               "Only the truth. What God would do. <br/>
               <span className="text-gold-600 underline decoration-royal-200">In Harper's best interest.</span>"
             </h2>
             <p className="text-lg text-slate-600 max-w-2xl leading-relaxed font-medium italic">
               Standing <span className="text-royal-900 font-bold not-italic">Back-to-Back</span> to protect the future of Harper June Elizabeth Ryan-Schulz.
             </p>
          </div>
          <div className="space-y-4">
             <StatusCard label="Father's Standing" value="Benchmark Meta" subtext="Verified 100%" active icon={Shield} />
             <StatusCard label="Mother's Standing" value="Autonomy Phase" subtext="In Progress 16%" icon={Activity} />
          </div>
        </section>

        {/* Roadmap Visualization */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-display font-bold text-royal-900 uppercase tracking-widest">Roadmap to Sunrise</h3>
            <div className="text-[10px] font-bold text-slate-400">TARGET: MARCH 1, 2028</div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
             <div className="p-5 rounded-2xl border-2 border-gold-500 bg-white shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-2 text-gold-500 opacity-20"><Lock size={40}/></div>
                <div className="text-[10px] font-bold text-gold-600 mb-1">PHASE 1</div>
                <div className="text-lg font-bold text-royal-900 font-serif">Foundation</div>
                <div className="text-xs text-slate-400">Current (Month 1/6)</div>
                <div className="mt-4 h-1 bg-gold-100 rounded-full overflow-hidden">
                   <div className="h-full bg-gold-500 w-[16%]"></div>
                </div>
             </div>
             <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50 opacity-60">
                <div className="text-[10px] font-bold text-slate-400 mb-1">PHASE 2</div>
                <div className="text-lg font-bold text-slate-700 font-serif">Expansion</div>
                <div className="text-xs text-slate-400">Months 7-24</div>
             </div>
             <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50 opacity-60">
                <div className="text-[10px] font-bold text-slate-400 mb-1">PHASE 3</div>
                <div className="text-lg font-bold text-slate-700 font-serif">Near-Equal</div>
                <div className="text-xs text-slate-400">Months 25+</div>
             </div>
             <div className="p-5 rounded-2xl border-2 border-royal-900 bg-royal-950 text-white shadow-2xl group cursor-pointer hover:bg-royal-900 transition-colors">
                <div className="text-[10px] font-bold text-gold-400 mb-1">DESTINATION</div>
                <div className="text-lg font-bold text-white font-serif group-hover:text-gold-400 transition-colors">Sunrise Clause</div>
                <div className="text-xs text-royal-400">March 1, 2028</div>
             </div>
          </div>
        </section>

        {/* Modules Grid */}
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map(s => (
            <div key={s.id} onClick={() => setActiveSection(s.id)} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all cursor-pointer group">
               <div className="mb-6 flex justify-between items-start">
                 <div className="p-4 bg-slate-50 rounded-2xl group-hover:bg-royal-50 transition-colors text-royal-600">{s.icon}</div>
                 <ArrowRight className="text-slate-300 group-hover:text-gold-500 transition-colors" />
               </div>
               <h4 className="text-2xl font-serif font-bold text-royal-900 mb-3">{s.title}</h4>
               <p className="text-slate-500 text-sm leading-relaxed mb-4">{s.shortDesc}</p>
               <div className="text-[10px] font-bold text-gold-600 tracking-widest uppercase">Explore Details</div>
            </div>
          ))}
        </section>

        {/* Interactive Signature Mock */}
        <section className="py-12 border-t border-slate-200 text-center">
           <h3 className="text-xs font-bold text-slate-400 uppercase tracking-[0.3em] mb-12">Digital Attestation of Truth</h3>
           <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-center gap-12">
              <div className="space-y-4">
                 <button 
                  onClick={() => setEmmaSigned(!emmaSigned)}
                  className={`w-64 h-24 rounded-2xl border-2 transition-all flex flex-col items-center justify-center gap-1 ${emmaSigned ? 'bg-emerald-50 border-emerald-500 shadow-lg shadow-emerald-500/10' : 'bg-white border-slate-200 hover:border-royal-300'}`}
                 >
                    {emmaSigned ? (
                      <>
                        <Check className="text-emerald-500 mb-1" size={24}/>
                        <span className="font-serif italic text-royal-900 text-lg">Emma Elizabeth Ryan</span>
                        <span className="text-[8px] font-bold text-emerald-600">SIGNED & VERIFIED</span>
                      </>
                    ) : (
                      <>
                        <PenTool className="text-slate-300 mb-1" size={20}/>
                        <span className="text-xs font-bold text-slate-400">CLICK TO SIGN (MOTHER)</span>
                      </>
                    )}
                 </button>
              </div>
              <div className="flex items-center">
                 <div className="h-px w-12 bg-slate-200 hidden md:block"></div>
                 <div className="p-3 rounded-full bg-slate-100 text-slate-400 border border-slate-200"><Heart size={20}/></div>
                 <div className="h-px w-12 bg-slate-200 hidden md:block"></div>
              </div>
              <div className="space-y-4">
                 <button 
                  onClick={() => setCraigSigned(!craigSigned)}
                  className={`w-64 h-24 rounded-2xl border-2 transition-all flex flex-col items-center justify-center gap-1 ${craigSigned ? 'bg-emerald-50 border-emerald-500 shadow-lg shadow-emerald-500/10' : 'bg-white border-slate-200 hover:border-royal-300'}`}
                 >
                    {craigSigned ? (
                      <>
                        <Check className="text-emerald-500 mb-1" size={24}/>
                        <span className="font-serif italic text-royal-900 text-lg">Craig A.P. Schulz</span>
                        <span className="text-[8px] font-bold text-emerald-600">SIGNED & VERIFIED</span>
                      </>
                    ) : (
                      <>
                        <PenTool className="text-slate-300 mb-1" size={20}/>
                        <span className="text-xs font-bold text-slate-400">CLICK TO SIGN (FATHER)</span>
                      </>
                    )}
                 </button>
              </div>
           </div>
           {emmaSigned && craigSigned && (
             <div className="mt-8 text-emerald-600 font-bold text-sm animate-bounce">
                ESTABLISHING THE UNITY OF THE PARENTS
             </div>
           )}
        </section>
      </main>

      <footer className="bg-slate-100 py-12 border-t border-slate-200 text-center">
         <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Two Roofs • One Home • One Promise</p>
         <p className="mt-2 text-slate-300 text-[10px]">© 2024 Ryan-Schulz Family Trust • Private & Confidential Directive</p>
      </footer>

      {/* Detail Modal */}
      <Modal isOpen={!!activeSection} onClose={() => setActiveSection(null)} title={sections.find(s=>s.id===activeSection)?.title || ''}>
        {sections.find(s=>s.id===activeSection)?.fullContent}
      </Modal>

      {/* Full Reader Overly */}
      {showReader && (
        <div className="fixed inset-0 z-50 flex flex-col bg-slate-50 animate-in fade-in slide-in-from-bottom-8 duration-500">
          <nav className="bg-royal-900 text-white p-5 flex justify-between items-center shadow-xl">
             <div className="flex items-center gap-4">
               <div className="p-2.5 bg-royal-800 rounded-xl"><Scroll size={24}/></div>
               <div>
                 <div className="font-serif font-bold text-xl">The Digital Binder</div>
                 <div className="text-[10px] font-bold text-royal-300 uppercase tracking-widest">Page {readerPage + 1} of {AGREEMENT_PAGES.length} — Verified Copy</div>
               </div>
             </div>
             <div className="flex gap-3">
               <button onClick={toggleSpeech} className={`flex items-center gap-2 px-5 py-2 rounded-full font-bold transition-all ${isSpeaking ? 'bg-red-500 animate-pulse' : 'bg-royal-800 hover:bg-royal-700 border border-royal-700'}`}>
                 {isSpeaking ? <><StopCircle size={18}/> Stop Reading</> : <><Headphones size={18}/> Audio Assist</>}
               </button>
               <button onClick={() => setShowReader(false)} className="p-2.5 bg-royal-800 hover:bg-red-500 rounded-full transition-colors">
                 <X size={24} />
               </button>
             </div>
          </nav>

          <div className="flex-1 overflow-hidden flex flex-col md:flex-row">
            <div className="flex-1 overflow-y-auto bg-white p-8 md:p-20 shadow-inner">
               <div className="max-w-3xl mx-auto space-y-12">
                  <div className="border-b border-slate-100 pb-8 flex justify-between items-end">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.4em]">Section 0{readerPage + 1}</span>
                    <h2 className="text-4xl font-serif font-bold text-royal-900">{AGREEMENT_PAGES[readerPage].title}</h2>
                  </div>
                  <div className="prose prose-royal prose-lg max-w-none">
                    {AGREEMENT_PAGES[readerPage].content}
                  </div>
               </div>
            </div>
            
            <aside className="w-full md:w-[400px] bg-slate-50 border-l border-slate-200 p-8 overflow-y-auto space-y-8">
               <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em]">Parenting Insights</h4>
               {AGREEMENT_PAGES[readerPage].sidebar.map((item, idx) => (
                 <SidebarCard key={idx} item={item} />
               ))}
            </aside>
          </div>

          <div className="bg-white border-t border-slate-200 p-5 flex justify-between items-center px-12 shrink-0">
             <button onClick={() => setReaderPage(p => Math.max(0, p - 1))} disabled={readerPage === 0} className="flex items-center gap-2 px-8 py-3 rounded-xl font-bold hover:bg-slate-100 transition-colors disabled:opacity-30">
                <ChevronLeft size={20}/> Previous
             </button>
             <div className="flex gap-1.5">
               {AGREEMENT_PAGES.map((_, i) => (
                 <div key={i} className={`h-1.5 rounded-full transition-all ${i === readerPage ? 'bg-royal-900 w-8' : 'bg-slate-200 w-3'}`}></div>
               ))}
             </div>
             <button onClick={() => setReaderPage(p => Math.min(AGREEMENT_PAGES.length - 1, p + 1))} disabled={readerPage === AGREEMENT_PAGES.length - 1} className="flex items-center gap-2 px-8 py-3 bg-royal-900 text-white rounded-xl font-bold hover:bg-royal-800 transition-all shadow-lg">
                Next <ChevronRight size={20}/>
             </button>
          </div>
        </div>
      )}
    </div>
  );
}