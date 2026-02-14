## 2024-02-14 - Route-Based Code Splitting on Large Components
**Learning:** The `DigitalBinder` component was significantly large (~60KB minified) and eagerly loaded on the Home page, impacting initial load time. Corrupted files (duplicate content) can exist and might pass loose checks but fail strict compilation or behave unexpectedly.
**Action:** Always verify file integrity when encountering syntax errors in existing files. Implement lazy loading for heavy, non-critical routes (like dashboards or complex tools) early to keep the main bundle lean.
