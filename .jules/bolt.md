## 2024-03-24 - Isolate Rapidly Changing State
**Learning:** Placing a 1-second `setInterval` state update at the root of a large component tree (like `DigitalBinder.tsx` which contains complex SVGs and modals) forces massive, unnecessary re-renders of the entire page every second, severely degrading performance.
**Action:** Always extract rapidly changing state (e.g., live clocks, progress bars) into small, isolated components. This restricts the frequent re-renders to only the isolated DOM nodes, leaving the rest of the heavy UI tree unaffected.
