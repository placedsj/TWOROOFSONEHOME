import React, { useState, useEffect } from 'react';

// ⚡ Bolt Optimization: Component Isolation
// Extracts high-frequency state updates (1-second tick) into a dedicated leaf component.
// This prevents the massive `DigitalBinder` root component and all its children
// from unnecessarily re-rendering every second, significantly reducing CPU load.
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
