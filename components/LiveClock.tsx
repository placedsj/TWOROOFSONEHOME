import React, { useState, useEffect } from 'react';

export const LiveClock = () => {
  const [time, setTime] = useState(new Date());

  // ⚡ Bolt Optimization:
  // Isolating this 1-second interval into a leaf component prevents
  // the entire parent tree (DigitalBinder) from re-rendering every second.
  // Expected Impact: Drastically reduces main thread work and unnecessary React reconciliations.
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
