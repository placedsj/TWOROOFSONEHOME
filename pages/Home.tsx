import React from 'react';
import { useLocation } from 'wouter';

function Home() {
  const [, setLocation] = useLocation();

  const handleGoToBinder = () => {
    setLocation('/binder');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-royal-900 to-royal-800 text-white flex flex-col items-center justify-center p-8 text-center">
      <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 animate-in fade-in slide-in-from-top-4 duration-500">
        Welcome to The Harper Baseline
      </h1>
      <p className="text-xl md:text-2xl text-royal-200 mb-10 max-w-2xl leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
        An interactive presentation of the parenting agreement for Harper June Elizabeth Ryan-Schulz.
      </p>
      <button 
        onClick={handleGoToBinder} 
        className="px-8 py-4 bg-gold-600 text-white text-lg font-bold rounded-full shadow-lg hover:bg-gold-500 transition-all duration-300 transform hover:scale-105 animate-in fade-in duration-700 delay-200"
      >
        View Digital Binder
      </button>
      <p className="mt-8 text-sm text-royal-400">
        CASE: FDSJ-739-2024 • QUISPAMSIS, NB
      </p>
    </div>
  );
}

export default Home;
