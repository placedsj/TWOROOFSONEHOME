import React, { useState, useEffect } from 'react';

// 💡 What: Extracting the live clock into its own component
// 🎯 Why: To prevent the entire massive DigitalBinder page from re-rendering every second
// 📊 Impact: Drastically reduces React reconciliation overhead and improves main thread performance
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
