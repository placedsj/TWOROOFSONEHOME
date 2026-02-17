## 2026-02-17 - Isolate High-Frequency Timers
**Learning:** Performance Strategy: Isolate high-frequency state updates (e.g., timers) into dedicated leaf components to prevent heavy parent components from re-rendering unnecessarily.
**Action:** When working with `setInterval` or frequent updates that only affect a small part of the UI, always extract that logic into a small, dedicated component (e.g., `LiveClock`) rather than managing state in the parent.
