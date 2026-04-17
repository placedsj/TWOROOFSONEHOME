## 2024-05-24 - Vite Config Secret Exposure
**Vulnerability:** API key injected into frontend bundle via Vite `define`.
**Learning:** Vite's `define` exposes environment variables directly to the client bundle. Removing `process.env` completely causes runtime ReferenceErrors if not polyfilled.
**Prevention:** Never map sensitive keys like `process.env.GEMINI_API_KEY` to client-side bundles. Map `process.env` to `{}` or implement a secure backend proxy.
