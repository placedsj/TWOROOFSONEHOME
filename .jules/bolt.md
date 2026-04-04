## 2025-04-04 - React setInterval Re-render Trap
**Learning:** Placing a high-frequency state update like a `setInterval` clock at the root level of a massive component (like `DigitalBinder.tsx`) causes severe performance degradation, as it forces the entire component tree and all its expensive children to unnecessarily re-render every second.
**Action:** Always isolate high-frequency UI updates into dedicated, lightweight child components (e.g., `LiveClock`) to localize the re-renders and protect the larger component tree.
