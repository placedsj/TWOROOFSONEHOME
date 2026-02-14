## 2024-05-22 - Perceived Security of Loading States
**Learning:** Instantaneous client-side login (like `alert`) feels insecure and "broken" to users. A simulated delay (e.g., 1.5s) with a loading spinner provides necessary feedback and increases trust in the action.
**Action:** Always add `isLoading` state and visual feedback to critical actions like Login/Submit, even if the backend is mocked or instant.

## 2024-05-23 - Keyboard Navigation in Reader Modes
**Learning:** For long-form content reading experiences (like legal agreements), users expect keyboard navigation (Arrow keys). Visual hints on buttons significantly improve the discoverability of these shortcuts without requiring a help modal.
**Action:** Always implement `keydown` listeners for ArrowLeft/Right in reader/slider components and add small visual hints (e.g. 'Press →') to the primary navigation buttons.
