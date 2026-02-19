## 2024-05-23 - Component Isolation for Timers
**Learning:** High-frequency timers (like clocks) in root page components force the entire page tree to re-render. Isolating them into leaf components (e.g., `LiveClock`) eliminates this overhead.
**Action:** Always extract `setInterval` driven UI updates into small, dedicated components.

## 2024-05-23 - Legacy JS Conflict
**Learning:** The project contains legacy `.js` files mirroring `.tsx` files, causing Vite to fail with module export errors.
**Action:** Always check for and remove corresponding `.js` files when working with `.tsx` components.
