import React from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient"; 
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "./components/ui/toaster";
import { TooltipProvider } from "./components/ui/tooltip";
import NotFound from "./pages/not-found";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import DigitalBinder from "./pages/DigitalBinder";

function Router() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-royal-900/80 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col animate-in fade-in zoom-in duration-200">
        <div className="bg-royal-800 p-6 flex justify-between items-center text-white shrink-0">
          <h2 className="text-2xl font-serif font-bold">{title}</h2>
          <button onClick={onClose} className="p-2 hover:bg-royal-700 rounded-full transition-colors" aria-label="Close modal">
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
    <button
      type="button"
      onClick={onClick}
      className={`relative flex-1 p-4 rounded-lg border-2 cursor-pointer transition-all hover:-translate-y-1 w-full text-left ${colors[status]} group`}
      onClick={onClick}
      aria-current={status === 'current' ? 'step' : undefined}
      className={`relative flex-1 w-full text-left p-4 rounded-lg border-2 cursor-pointer transition-all hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-royal-500 focus-visible:ring-offset-2 ${colors[status]} group`}
      onClick={onClick}
      className={`relative flex-1 p-4 rounded-lg border-2 cursor-pointer transition-all hover:-translate-y-1 ${colors[status]} group text-left w-full focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-royal-500 outline-none`}
      aria-label={`View details for ${title} (${phase}), status: ${status}`}
    <div 
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClick(); } }}
      aria-label={`View ${title} details`}
      className={`relative flex-1 p-4 rounded-lg border-2 cursor-pointer transition-all hover:-translate-y-1 ${colors[status]} group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-royal-500`}
    >
      <span className="block text-xs font-bold uppercase tracking-widest opacity-80 mb-1">{phase}</span>
      <span className="block font-serif font-bold text-lg mb-2">{title}</span>
      <span className="block text-xs font-medium opacity-90">{time}</span>
      {status === 'current' && (
        <span className="absolute -top-3 -right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse">
          ACTIVE
        </span>
      )}
    </button>
  );
};
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/dashboard/:tab" component={Dashboard} />
      <Route path="/binder" component={DigitalBinder} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
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
              aria-label="View alert log"
              aria-label="View Alert Log"
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
              aria-label="Read agreement"
              aria-label="Read Agreement"
              className="flex items-center gap-2 px-3 md:px-4 py-2 bg-gold-600 hover:bg-gold-500 rounded-lg transition-colors text-white font-medium border border-gold-500 shadow-lg shadow-gold-500/20"
            >
              <Scroll size={18} />
              <span className="hidden md:inline">Read Agreement</span>
            </button>
            <button 
              onClick={() => setShowGlossary(true)}
              aria-label="View glossary"
              aria-label="View Glossary"
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
              <button
                key={section.id}
                type="button"
                onClick={() => setActiveSection(section.id)}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer border border-slate-100 group w-full text-left"
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
              </button>
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
                 aria-label={isSpeaking ? "Stop reading" : "Start reading"}
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
               <button onClick={() => setShowReader(false)} aria-label="Close reader mode" className="p-2 hover:bg-royal-800 rounded-full">
               <button onClick={() => setShowReader(false)} className="p-2 hover:bg-royal-800 rounded-full" aria-label="Close reader">
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
              <button onClick={() => setShowAuditLog(false)} className="p-2 hover:bg-slate-100 rounded-full" aria-label="Close audit log">
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
              <button onClick={() => setShowGlossary(false)} className="p-2 hover:bg-slate-100 rounded-full" aria-label="Close glossary">
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
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}