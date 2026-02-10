import React, { useState, useEffect } from 'react';

/**
 * LiveClock component extracts the clock logic to prevent
 * the parent component (DigitalBinder) from re-rendering every second.
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
