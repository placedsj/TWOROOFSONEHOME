## 2024-05-22 - Perceived Security of Loading States
**Learning:** Instantaneous client-side login (like `alert`) feels insecure and "broken" to users. A simulated delay (e.g., 1.5s) with a loading spinner provides necessary feedback and increases trust in the action.
**Action:** Always add `isLoading` state and visual feedback to critical actions like Login/Submit, even if the backend is mocked or instant.

## 2024-05-23 - Discoverability of Keyboard Navigation
**Learning:** Hidden keyboard shortcuts (like ArrowRight for pagination) are rarely discovered without visual cues. Adding subtle text hints (e.g., [←], [→], (Esc)) directly on the UI controls significantly increases usage and accessibility awareness.
**Action:** Always pair keyboard navigation features with visual indicators on the corresponding primary action buttons.
