## 2024-03-11 - Removed Secret Exposure in Vite Config
**Vulnerability:** The application's `vite.config.ts` used `define` to inject `GEMINI_API_KEY` into `process.env` within the client bundle.
**Learning:** Do not use Vite's `define` configuration to inject secrets (like API keys) into `process.env` within the client bundle, as it exposes server-side secrets in plaintext to the browser.
**Prevention:** Rely on server-side requests or backend infrastructure to handle secrets, and do not expose them via `vite.config.ts` or client-side bundles.