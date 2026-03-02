import React, { useState, useEffect } from 'react';

/**
 * ⚡ Bolt Optimization:
 * Isolated the high-frequency 1-second interval state update into this leaf component.
 * Previously, this state lived in the parent DigitalBinder component, causing
 * the entire massive component tree to re-render every single second.
 * This change significantly reduces unnecessary re-renders.
 */
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
