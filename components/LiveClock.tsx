import React, { useState, useEffect } from 'react';

// ⚡ Bolt Optimization: Isolate high-frequency state updates (1s timer)
// into a dedicated leaf component to prevent the parent (DigitalBinder)
// from re-rendering the entire DOM tree every second.
// Impact: Reduces heavy parent component re-renders by ~100%.
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