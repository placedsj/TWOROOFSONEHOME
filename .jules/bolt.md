## 2024-05-18 - Isolated Ticking Clock State
**Learning:** Top-level ticking clocks in React applications cause whole-page re-renders every second, significantly impacting performance and battery life, especially when complex child components are present.
**Action:** Isolate ticking clock state into dedicated, small components to limit re-renders to only the elements displaying the time.
