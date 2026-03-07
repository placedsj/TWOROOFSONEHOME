import React, { useState, useEffect } from 'react';

// ⚡ Bolt Optimization:
// Isolate high-frequency state updates (1-second timer) into this dedicated leaf component.
// This prevents the parent `DigitalBinder` (and all its children) from unnecessarily
// re-rendering every second, significantly reducing React rendering overhead.
export const LiveClock = () => {
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
};
