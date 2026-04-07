## 2024-04-07 - Refactored Live Clock Component to Prevent App Re-renders
**Learning:** Found a full-page re-render bottleneck caused by a global `setInterval` hook updating the time every second in `DigitalBinder.tsx`. The entire large component re-renders just for a tiny clock display.
**Action:** Isolate stateful features like live clocks that update frequently into their own isolated components so they only trigger local re-renders, protecting the parent application performance.
