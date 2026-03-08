## 2025-03-05 - Isolate High-Frequency State & Throttle Scroll
**Learning:** High-frequency state updates like a 1-second interval or an unthrottled `scroll` listener trigger continuous full-page re-renders in large components like `DigitalBinder`, severely degrading performance.
**Action:** Isolate high-frequency updates into dedicated leaf components (e.g. `<LiveClock />`) to restrict re-render scope, and strictly wrap high-frequency DOM listeners (like `scroll`) with `requestAnimationFrame` using a 'ticking' flag to batch visual updates.
