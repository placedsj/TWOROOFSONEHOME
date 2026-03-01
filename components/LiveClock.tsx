import React, { useState, useEffect, memo } from 'react';

// LiveClock encapsulates the 1-second interval to prevent
// unnecessary re-renders in parent components (e.g., DigitalBinder)
export const LiveClock = memo(() => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <span className="opacity-40">{time.toLocaleDateString()}</span>
      <span className="text-white font-black">{time.toLocaleTimeString()}</span>
    </>
  );
});

LiveClock.displayName = 'LiveClock';
