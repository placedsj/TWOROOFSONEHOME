## 2025-03-01 - Missing Content Security Policy in index.html
**Vulnerability:** The application was missing a Content Security Policy (CSP) <meta> tag, exposing it to Cross-Site Scripting (XSS) risks.
**Learning:** Due to the project's architecture using a CDN-based Tailwind configuration and an esm.sh import map instead of a traditional bundler, a very specific CSP is required to allow external sources like `cdn.tailwindcss.com`, `esm.sh`, and `fonts.googleapis.com` while maintaining Vite HMR compatibility (`ws:`, `wss:`).
**Prevention:** Always ensure the CSP is explicitly defined in `index.html` and accounts for external CDN dependencies and Vite development workflows.
