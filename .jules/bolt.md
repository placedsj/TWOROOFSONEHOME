## 2024-04-03 - [Initial]
**Learning:** Found an unnecessary re-render bottleneck in `pages/DigitalBinder.tsx`. A massive component sets an interval that updates its state every 1 second just to render a clock. This causes the entire gigantic component to re-render.
**Action:** Extract the clock to a smaller separate component so only the clock re-renders.
