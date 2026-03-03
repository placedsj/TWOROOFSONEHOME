## 2024-03-24 - Isolate high-frequency timers to prevent unnecessary re-renders
**Learning:** Heavy top-level components with 1-second intervals (like clocks) cause the entire component tree to unnecessarily re-render 60 times a minute.
**Action:** Isolate high-frequency state updates into dedicated leaf components (like `LiveClock`) so only the smallest necessary DOM node updates on each tick.
