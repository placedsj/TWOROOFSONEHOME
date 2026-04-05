## 2024-03-24 - Unnecessary main component re-renders
**Learning:** Found a `setInterval` in `pages/DigitalBinder.tsx` that updates a `time` state every second. Since this state is at the top level of the massive `DigitalBinder` component (847 lines), it causes the entire complex component tree to re-render every second.
**Action:** Extract small, frequently updating UI elements (like live clocks) into their own isolated components so their state updates don't trigger unnecessary re-renders of the parent component tree.
