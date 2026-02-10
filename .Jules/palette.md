## 2024-05-22 - Perceived Security of Loading States
**Learning:** Instantaneous client-side login (like `alert`) feels insecure and "broken" to users. A simulated delay (e.g., 1.5s) with a loading spinner provides necessary feedback and increases trust in the action.
**Action:** Always add `isLoading` state and visual feedback to critical actions like Login/Submit, even if the backend is mocked or instant.
