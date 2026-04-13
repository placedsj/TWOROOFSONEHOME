## 2024-04-13 - Isolate rapidly updating state
**Learning:** Placing rapidly updating state like a 1-second `setInterval` clock inside the top-level `DigitalBinder` layout causes unnecessary full-tree re-renders, significantly degrading performance.
**Action:** Always isolate rapidly updating state into dedicated, localized child components to restrict re-renders to the smallest possible sub-tree.
