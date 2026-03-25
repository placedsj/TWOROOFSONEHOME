## 2024-11-12 - Isolate Fast-Updating State
**Learning:** In massive views like `DigitalBinder.tsx`, placing a `setInterval` hook for a live clock at the top level causes severe performance degradation by forcing the entire component tree to re-render every second.
**Action:** Always extract high-frequency updating states (like 1-second interval clocks) into their own isolated leaf components to contain the re-render scope, dramatically improving app responsiveness.
