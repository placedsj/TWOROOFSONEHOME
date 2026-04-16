## 2023-10-27 - Added Content-Security-Policy (CSP) Header
**Vulnerability:** Missing Content-Security-Policy (CSP) headers in `index.html`.
**Learning:** Modern web applications require CSP to mitigate XSS (Cross-Site Scripting) and data injection attacks by restricting the sources from which content can be loaded. In a Vite/React environment, specific directives are needed to ensure Hot Module Replacement (HMR) and inline styles/scripts function correctly during development.
**Prevention:** Always implement a strict CSP by default in new projects, adjusting directives as necessary for development environments (`unsafe-inline`, `unsafe-eval`, `ws:`, `wss:`) while aiming for stricter policies in production.
