## 2024-03-23 - Prevent Massive Top-Level Re-Renders from Clocks
**Learning:** Fast-updating state (like a live clock updated via `setInterval` every second) placed at the top level of a large parent component (like `DigitalBinder`) forces the entire component tree—including massive arrays of children, sidebars, modals, and charts—to re-render every second.
**Action:** Always extract `setInterval` state updates like live clocks into their own isolated, small React components rather than leaving them at the top level of a large parent component.
