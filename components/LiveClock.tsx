import React, { useState, useEffect } from 'react';

export const LiveClock = () => {
  const [time, setTime] = useState(new Date());

  // Performance optimization (Bolt): Encapsulate the 1-second interval update
  // into this isolated leaf component to prevent unnecessary re-renders of the entire
  // parent page component every single second.
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
