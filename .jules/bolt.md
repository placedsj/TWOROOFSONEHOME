## 2024-05-22 - Duplicate Component Files
**Learning:** The project contains duplicate component files at the root (e.g., `DigitalBinder.tsx`) and in `pages/`. The root versions appear to be older or different.
**Action:** Always check `App.tsx` imports to determine which file is the source of truth. Prefer `pages/` directory for page components.
