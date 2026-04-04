## 2024-04-04 - React Component Re-render Optimization
**Learning:** Placing a `setInterval` that updates state every second at the root of a large, complex component (like `DigitalBinder`) causes the entire component tree to unnecessarily re-render every second, severely degrading performance.
**Action:** Always extract frequently updating state (like a live clock or timer) into its own small, isolated component (`LiveClock`) to constrain re-renders to only the elements that actually change.
