## 2024-03-17 - Isolate Fast-Updating State in Heavy Components
**Learning:** The 800-line `DigitalBinder` component was re-rendering entirely every single second because it held a `setInterval` clock state at the top level. This is a massive performance bottleneck for complex React trees.
**Action:** Always extract fast-updating state (like live clocks or progress bars) into tiny, isolated child components so they re-render independently without dragging down the parent component.
