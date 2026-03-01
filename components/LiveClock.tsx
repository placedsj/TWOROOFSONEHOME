import React, { useState, useEffect } from 'react';

export const LiveClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // Isolate high-frequency time updates to prevent unnecessary re-renders in parent components
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
