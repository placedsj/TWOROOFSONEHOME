import React, { useState, useEffect } from 'react';

export const LiveClock = () => {
  // ⚡ Bolt Optimization: Extracted live clock state into isolated component
  // to prevent unnecessary 1-second re-renders of the entire DigitalBinder parent
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
