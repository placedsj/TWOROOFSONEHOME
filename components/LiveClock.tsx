import React, { useState, useEffect } from 'react';

/**
 * ⚡ Bolt: Extracted LiveClock component to prevent massive parent re-renders.
 * 💡 What: Isolated the `setInterval` clock into its own component.
 * 🎯 Why: Previously, `DigitalBinder.tsx` (a massive top-level component) was re-rendering every second due to this state update.
 * 📊 Impact: Prevents the entire 800+ line DigitalBinder component from unnecessary re-rendering 60 times a minute.
 */
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
