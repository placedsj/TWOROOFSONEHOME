## 2024-05-22 - Perceived Security of Loading States
**Learning:** Instantaneous client-side login (like `alert`) feels insecure and "broken" to users. A simulated delay (e.g., 1.5s) with a loading spinner provides necessary feedback and increases trust in the action.
**Action:** Always add `isLoading` state and visual feedback to critical actions like Login/Submit, even if the backend is mocked or instant.

## 2025-05-23 - Discoverability of Keyboard Shortcuts
**Learning:** Users often miss keyboard shortcuts unless they are visually reinforced near the relevant controls. Adding subtle "Press ←" hints to navigation buttons significantly improves discoverability without cluttering the UI.
**Action:** Always pair keyboard shortcuts with visual hints or tooltips on the corresponding interactive elements.
