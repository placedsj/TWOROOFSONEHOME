import React, { useState, useEffect } from 'react';

// ⚡ Bolt: Extracted LiveClock component to prevent full-page re-renders.
// By moving the fast-updating `time` state (updated every 1s via setInterval)
// into this isolated component, we prevent the massive parent DigitalBinder
// component from re-rendering every single second.
// Impact: Reduces massive DOM tree reconciliation and improves overall UI responsiveness.
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
