## 2024-04-07 - React Interval Memory Leaks & Re-renders

**Learning:**
The application utilizes `setInterval` directly within `useEffect` hooks in components like `DigitalBinder` and `RoadmapTracker` to render the current time/date continuously. While standard, in `DigitalBinder.tsx`, a whole page component re-renders every 1000ms just to update a small clock in the header. This is a performance bottleneck in a large page component since it causes unnecessary frequent React render cycles for the entire application tree.

**Action:**
Extract real-time clocks and other high-frequency interval-based elements into their own isolated small components (e.g. `LiveClock`). This prevents the whole parent component (like `DigitalBinder`) from re-rendering every second.
