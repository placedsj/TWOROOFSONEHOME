import React, { useState, useEffect, useRef } from 'react';
import { 
  Shield, 
  Scale, 
  Users, 
  FileCheck, 
  Heart, 
  Calendar, 
  Lock, 
  Sun, 
  BookOpen, 
  AlertTriangle, 
  CheckCircle,
  X,
  ChevronRight,
  ChevronLeft,
  Activity,
  Bell,
  Siren,
  Quote,
  Scroll,
  Headphones,
  StopCircle,
  PlayCircle,
  ArrowRight,
  Info // Added Info icon import
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
  { term: "Breaking the Cycle", definition: "The intentional shift away from intergenerational family patterns that undermine parental autonomy.", pageIndex: 2 },
  { term: "Sole/Lead Authority", definition: "The Mother's designated decision-making power in lifestyle (Sole) and educational (Lead) matters.", pageIndex: 2 },
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
        <p>The authority to raise Harper belongs exclusively and equally to Mom and Dad. Extended family—grandmothers, aunts, uncles—are loved guests in Harper's life. They have <span className="relative group cursor-help ml-1"><span className="font-bold text-red-600">zero vote</span><Info size={14} className="inline-block ml-1 text-red-400" /><div className="absolute hidden group-hover:block bottom-full left-1/2 -translate-x-1/2 mb-2 p-3 bg-red-700 text-white text-xs rounded-lg shadow-lg whitespace-normal w-48 text-center z-20">No decision-making power on Harper's medical, educational, or routine daily matters.</div></span> in parenting decisions.</p>

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
  },
  {
    id: 'letters',
    title: 'Letters to Harper',
    readableText: "Letters to Harper. From Dad: 'You are the reason your father is sober. You are the reason your mother is free. The world said No to us many times. But the three of us together never accepted that answer. I'm proud of you for being born to two people who loved you enough to change.' From Mom: 'I had to learn to say No to people I loved so I could say Yes to being your mom. Your dad stood beside me during that journey. You have two parents who are imperfect but committed. That is enough. That is everything.'",
    content: (
      <div className="space-y-8 text-lg leading-relaxed text-slate-700">
        <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
          <h4 className="font-bold text-royal-900 mb-2">From Dad</h4>
          <p className="italic">"You are the reason your father is sober. You are the reason your mother is free. The world said 'No' to us many times. But the three of us together never accepted that answer. I'm proud of you for being born to two people who loved you enough to change."</p>
        </div>
        
        <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
          <h4 className="font-bold text-royal-900 mb-2">From Mom</h4>
          <p className="italic">"I had to learn to say 'No' to people I loved so I could say 'Yes' to being your mom. Your dad stood beside me during that journey. You have two parents who are imperfect but committed. That is enough. That is everything."</p>
        </div>
      </div>
    ),
    sidebar: [
      {
        type: 'quote',
        content: "Two roofs. One home. One promise.",
        author: "The Architects' Pledge"
      },
      {
        type: 'letter',
        content: "Be brave. Be independent. Be loved.",
        author: "Mom"
      }
    ]
  }
];

// --- Components ---

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
      <div className="font-serif text-lg leading-relaxed mb-3">
        "{item.content}"
      </div>
      {item.author && (
        <div className="text-sm font-bold opacity-60 text-right">— {item.author}</div>
      )}
    </div>
  );
};

const Modal = ({ isOpen, onClose, title, children }: { isOpen: boolean; onClose: () => void; title: string; children?: React.ReactNode }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-royal-900/80 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col animate-in fade-in zoom-in duration-200">
        <div className="bg-royal-800 p-6 flex justify-between items-center text-white shrink-0">
          <h2 className="text-2xl font-serif font-bold">{title}</h2>
          <button onClick={onClose} aria-label="Close modal" className="p-2 hover:bg-royal-700 rounded-full transition-colors">
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
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClick(); } }}
      aria-label={`View ${title} details`}
      className={`relative flex-1 p-4 rounded-lg border-2 cursor-pointer transition-all hover:-translate-y-1 ${colors[status]} group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-royal-500`}
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

export default function App() {
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

  const handleTriggerAlert = (trigger: string) => {
    const newAlert: AlertEntry = {
      id: Math.random().toString(36).substr(2, 9),
      trigger,
      timestamp: new Date().toLocaleString(),
      recipients: ["Parenting Coordinator", "Mother's Counsel", "Father's Counsel"],
      link: "#redline"
    };
    setAlerts(prev => [newAlert, ...prev]);
    alert(`SYSTEM ALERT TRIGGERED: ${trigger}\nRecipients Notified: ${newAlert.recipients.join(', ')}`);
  };

  const sections: Section[] = [
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
              aria-label="Alert Log"
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
              aria-label="Read Agreement"
              className="flex items-center gap-2 px-3 md:px-4 py-2 bg-gold-600 hover:bg-gold-500 rounded-lg transition-colors text-white font-medium border border-gold-500 shadow-lg shadow-gold-500/20"
            >
              <Scroll size={18} />
              <span className="hidden md:inline">Read Agreement</span>
            </button>
            <button 
              onClick={() => setShowGlossary(true)}
              aria-label="Glossary"
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
                role="button"
                tabIndex={0}
                onClick={() => setActiveSection(section.id)}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setActiveSection(section.id); } }}
                aria-label={`View ${section.title} details`}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer border border-slate-100 group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-royal-500"
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
               <button onClick={() => setShowReader(false)} aria-label="Close reader" className="p-2 hover:bg-royal-800 rounded-full">
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
                 <div 
                   key={idx} 
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
              <button onClick={() => setShowAuditLog(false)} aria-label="Close audit log" className="p-2 hover:bg-slate-100 rounded-full">
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
          <div className="relative w-full max-w-md bg-white h-full shadow-2xl p-8 overflow-y-auto animate-in slide-in-from-right duration-300">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-serif font-bold text-royal-900">Key Terms Glossary</h2>
              <button onClick={() => setShowGlossary(false)} aria-label="Close glossary" className="p-2 hover:bg-slate-100 rounded-full">
                <X size={24} />
              </button>
            </div>
            <div className="space-y-6">
              {GLOSSARY_TERMS.map((item, idx) => (
                <div key={idx} className="pb-4 border-b border-slate-100 last:border-0 group">
                  <h4 className="font-bold text-royal-800 mb-1 flex justify-between items-center">
                    {item.term}
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed mb-2">{item.definition}</p>
                  <button 
                    onClick={() => {
                      setShowReader(true);
                      setReaderPage(item.pageIndex);
                      setShowGlossary(false);
                    }}
                    className="text-xs font-bold text-gold-600 hover:text-gold-800 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    View in Context <ArrowRight size={12} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}