## 2025-02-26 - Add Content Security Policy
**Vulnerability:** Missing security headers (CSP)
**Learning:** In a Vite environment, the CSP must explicitly allow 'unsafe-inline' and 'unsafe-eval' for scripts, and ws/wss for HMR, to prevent breaking local development.
**Prevention:** Always implement a baseline CSP that restricts sources while allowing necessary development and asset connections.
