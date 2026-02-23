## 2024-05-23 - High Frequency Updates in Heavy Components
**Learning:** The `DigitalBinder` component is large and complex. Keeping a 1-second timer state at the top level caused the entire component tree to re-render every second, likely impacting performance and battery life.
**Action:** Isolate high-frequency updates (like clocks or progress bars) into dedicated leaf components (e.g., `LiveClock`) to localize re-renders.
