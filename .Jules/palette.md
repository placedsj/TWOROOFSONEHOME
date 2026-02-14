## 2024-05-22 - Perceived Security of Loading States
**Learning:** Instantaneous client-side login (like `alert`) feels insecure and "broken" to users. A simulated delay (e.g., 1.5s) with a loading spinner provides necessary feedback and increases trust in the action.
**Action:** Always add `isLoading` state and visual feedback to critical actions like Login/Submit, even if the backend is mocked or instant.

## 2024-05-22 - Semantic Elements for Interactivity
**Learning:** Using `div` elements for interactive controls (like pagination dots) forces manual implementation of accessibility features (keyboard support, ARIA roles). Using native `<button>` elements provides these behaviors by default and is more robust.
**Action:** Always refactor interactive `div`s to `button`s and ensure icon-only buttons have explicit `aria-label`s.
