## 2024-03-31 - [Extract frequent state updates]
**Learning:** Having a fast-updating state (like a clock ticking every second) in a large parent component (`DigitalBinder`) causes the entire massive component tree to re-render constantly.
**Action:** Isolate the clock state into its own small sub-component (`Clock`) so only that tiny part of the UI re-renders.
