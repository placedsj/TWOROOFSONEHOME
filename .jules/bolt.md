## 2024-03-27 - Extract high-frequency state updates
**Learning:** Placing a 1-second `setInterval` directly at the top level of a large parent component (`DigitalBinder.tsx`) causes massive, unnecessary full-page re-renders of the entire component tree, including heavy children like `RoadmapTracker`.
**Action:** Always extract fast-updating state (like live clocks or timers) into isolated, small React components to prevent massive re-renders of static or unrelated parent components.
