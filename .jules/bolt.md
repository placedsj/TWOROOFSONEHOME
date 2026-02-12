## 2024-05-22 - [Isolating High-Frequency Updates]
**Learning:** Large page components (`DigitalBinder`) re-rendering on high-frequency timers (1s clock) cause significant performance overhead for the entire subtree.
**Action:** Isolate such updates into small, dedicated leaf components (`LiveClock`) to prevent parent re-renders.

## 2024-05-22 - [Legacy JS Artifacts]
**Learning:** The presence of legacy `.js` files (e.g., `App.js`) alongside source `.tsx` files can confuse build tools (Vite/Rollup) and cause import errors.
**Action:** Ensure build artifacts or legacy files are cleaned up before attempting builds in a mixed TS/JS environment.
