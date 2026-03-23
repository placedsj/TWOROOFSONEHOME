import React, { useState, useEffect } from 'react';

// ⚡ Bolt: Extracting fast-updating state into an isolated component
// 💡 What: Created a standalone LiveClock component that updates every second
// 🎯 Why: To prevent the massive DigitalBinder parent component from re-rendering
// 📊 Impact: Eliminates a full component tree re-render (including 15+ sections, modals, sidebars, and trackers) every second. Performance impact is significant.
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
