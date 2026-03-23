import React, { useState, useEffect } from 'react';

// 💡 What: Extract fast-updating state (clock updated every second) into an isolated component.
// 🎯 Why: Prevents the massive top-level DigitalBinder component from re-rendering every second.
// 📊 Impact: Significantly reduces React reconciliation overhead and prevents full-page re-renders.
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
