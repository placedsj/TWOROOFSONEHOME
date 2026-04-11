## 2025-04-11 - Isolate Frequent State Updates
**Learning:** Having a timer interval update state every second in the top-level application component triggers unnecessary re-renders of the entire application structure.
**Action:** Extract rapidly updating state, like clocks or timers, into their own isolated components to contain re-renders to just that portion of the DOM.
