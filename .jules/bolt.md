## 2026-02-16 - Isolated Clock Update
**Learning:** `DigitalBinder.tsx` was re-rendering every second due to a `time` state hook in the root of the component. This caused massive unnecessary re-renders of the entire heavy page.
**Action:** Extracted the clock logic into a dedicated `<LiveClock />` component. This isolates the high-frequency state updates to a tiny leaf component, preventing the expensive parent from re-rendering.
