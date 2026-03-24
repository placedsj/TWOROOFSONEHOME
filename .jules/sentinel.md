## 2024-05-24 - Vite Define Secret Exposure
**Vulnerability:** API keys mapped to `process.env` in Vite's `define` config are statically injected into the client bundle, exposing them in plaintext.
**Learning:** Vite's `define` does static string replacement at build time. Server-side environment variables must never be mapped this way.
**Prevention:** Remove sensitive mappings from `define` and polyfill `process.env` (e.g., `define: { 'process.env': {} }`) if libraries require it to prevent `ReferenceError: process is not defined`.