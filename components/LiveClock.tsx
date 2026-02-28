import React, { useState, useEffect } from 'react';

// ⚡ Bolt: Extracted LiveClock component to isolate high-frequency state updates.
// By moving the 1-second `setInterval` out of the massive `DigitalBinder` component,
// we prevent the entire page (and its children) from re-rendering every second.
// Expected Impact: Drastic reduction in unnecessary renders, saving CPU and battery.
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
