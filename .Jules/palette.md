## 2024-05-22 - Perceived Security of Loading States
**Learning:** Instantaneous client-side login (like `alert`) feels insecure and "broken" to users. A simulated delay (e.g., 1.5s) with a loading spinner provides necessary feedback and increases trust in the action.
**Action:** Always add `isLoading` state and visual feedback to critical actions like Login/Submit, even if the backend is mocked or instant.

## 2024-05-24 - Keyboard Navigation in Reader Modes
**Learning:** For immersive, full-screen reading experiences (like the Reader Mode), users instinctively reach for arrow keys to navigate. Adding keyboard shortcuts reduces friction and makes the experience feel more "native" and less like a web page.
**Action:** Always implement `ArrowLeft`/`ArrowRight` navigation and `Escape` to close for any full-screen overlay or modal sequence, and hint at these shortcuts in the UI or via ARIA attributes.
