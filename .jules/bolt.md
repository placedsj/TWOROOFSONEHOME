## 2024-10-24 - Isolate high-frequency state updates
**Learning:** A 1-second `setInterval` placed in a large parent component (`DigitalBinder.tsx`) forces unnecessary re-renders of the entire massive component tree every second, significantly hurting performance.
**Action:** Isolate high-frequency state updates (like timers/clocks) into dedicated leaf components (like `LiveClock`) to strictly scope re-renders and prevent performance bottlenecks in heavy parent components.
