## 2024-05-24 - Extracting fast-updating state to prevent massive re-renders
**Learning:** Storing a `setInterval` that updates state every second at the top level of a large component causes continuous, unnecessary full-page re-renders.
**Action:** Always extract high-frequency state updates (like clocks) into isolated, leaf-level components.
