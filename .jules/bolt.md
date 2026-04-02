## 2025-03-03 - Isolated Clock component to fix massive re-renders
**Learning:** Found a performance bottleneck where a `setInterval` updating a clock state every second was placed inside a massive top-level page component (`DigitalBinder`), causing the entire DOM tree to re-render needlessly every second.
**Action:** Extract frequently updating state (like a clock tick) into its own isolated sub-component so that only that specific node re-renders.
