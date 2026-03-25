## 2025-02-12 - Re-renders on Massive Pages
**Learning:** Found an anti-pattern in DigitalBinder.tsx where a global `setInterval` updated `const [time, setTime] = useState(new Date())` every 1 second at the top level of an 800+ line component, causing the entire UI tree to re-evaluate constantly.
**Action:** Always isolate high-frequency state updates (like clocks or timers) into their own smallest-possible leaf components to localize re-renders and save CPU overhead.
