import React, { useState, useEffect } from 'react';

// ⚡ Bolt Optimization: Isolate high-frequency state updates (1s interval)
// By extracting the clock into its own component, we prevent the entire
// DigitalBinder component (and its many children) from re-rendering every second.
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
