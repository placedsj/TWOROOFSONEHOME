## 2024-03-31 - [Extract LiveClock from DigitalBinder]
**Learning:** Placing a 1-second setInterval clock at the root of a complex parent component causes massive, unnecessary re-render cycles of the entire component tree.
**Action:** Always extract frequently updating state (like clocks or timers) into isolated, leaf-level components.
