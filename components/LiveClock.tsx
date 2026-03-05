import React, { useState, useEffect } from 'react';

export const LiveClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // ⚡ Bolt: Encapsulating the high-frequency 1-second interval here
    // prevents the entire parent component from re-rendering every second.
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
