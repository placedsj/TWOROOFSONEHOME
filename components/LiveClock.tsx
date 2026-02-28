import React, { useState, useEffect } from 'react';

// ⚡ Bolt: Encapsulating the high-frequency time update in a leaf component
// This prevents the parent component (DigitalBinder) from re-rendering every second.
// Expected impact: Eliminates 1 unnecessary render per second on a very heavy component tree.
export const LiveClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="font-mono flex items-center gap-6">
      <span className="opacity-40">{time.toLocaleDateString()}</span>
      <span className="text-white font-black">{time.toLocaleTimeString()}</span>
    </div>
  );
};
