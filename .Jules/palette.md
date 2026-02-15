## 2024-05-22 - Perceived Security of Loading States
**Learning:** Instantaneous client-side login (like `alert`) feels insecure and "broken" to users. A simulated delay (e.g., 1.5s) with a loading spinner provides necessary feedback and increases trust in the action.
**Action:** Always add `isLoading` state and visual feedback to critical actions like Login/Submit, even if the backend is mocked or instant.

## 2024-05-22 - Keyboard Shortcut Discoverability
**Learning:** Hidden keyboard shortcuts (like Arrow keys for navigation) are often missed by users. Adding visible, albeit subtle, text hints (e.g., `(←)`) directly on the controls significantly improves discoverability without cluttering the UI.
**Action:** When implementing keyboard navigation for any feature (modals, sliders, readers), always append a visual text hint to the primary control button.
