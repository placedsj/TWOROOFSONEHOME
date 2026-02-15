## 2024-05-22 - Perceived Security of Loading States
**Learning:** Instantaneous client-side login (like `alert`) feels insecure and "broken" to users. A simulated delay (e.g., 1.5s) with a loading spinner provides necessary feedback and increases trust in the action.
**Action:** Always add `isLoading` state and visual feedback to critical actions like Login/Submit, even if the backend is mocked or instant.

## 2024-05-24 - Modal Keyboard Navigation Expectation
**Learning:** Users instinctively reach for arrow keys in "reader" or "gallery" interfaces. Lack of keyboard support breaks flow and forces mouse/touch interaction. Visual hints (like `←` and `→`) significantly improve discoverability of these shortcuts.
**Action:** Always implement `keydown` listeners (ArrowLeft/Right, Escape) for full-screen modals or carousels and consider adding subtle visual indicators for these shortcuts.
