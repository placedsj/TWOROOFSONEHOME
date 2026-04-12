## 2025-04-12 - Prevent API Key Exposure in Vite Config
**Vulnerability:** The `vite.config.ts` file was injecting `GEMINI_API_KEY` into the frontend build via Vite's `define` option, exposing a sensitive secret to the client.
**Learning:** Using `define` for secrets makes them visible in the browser-delivered bundle.
**Prevention:** Never inject secret API keys into client-side bundles using Vite's `define` or environment variable prefixing. Unused `process.env.*` keys should be safely stubbed to `'undefined'` instead of fully removed to avoid `ReferenceError` exceptions in the browser.
