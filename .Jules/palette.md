## 2024-05-22 - Perceived Security of Loading States
**Learning:** Instantaneous client-side login (like `alert`) feels insecure and "broken" to users. A simulated delay (e.g., 1.5s) with a loading spinner provides necessary feedback and increases trust in the action.
**Action:** Always add `isLoading` state and visual feedback to critical actions like Login/Submit, even if the backend is mocked or instant.

## 2024-06-25 - Keyboard Navigation Discoverability
**Learning:** Adding keyboard shortcuts (e.g., Arrow Keys) to immersive modes like Reader Mode significantly improves usability but often goes unnoticed. Visual hints (e.g., "Press ←") on primary action buttons bridge the gap between power users and casual explorers.
**Action:** When implementing keyboard navigation for modals or multi-step flows, always include `aria-keyshortcuts` and subtle visual text hints on the corresponding UI controls.
