## 2024-03-15 - Vite Config Secret Injection
**Vulnerability:** Injecting server-side secrets (like GEMINI_API_KEY) via Vite's `define` configuration exposes them in plaintext to the browser client bundle.
**Learning:** The frontend application does not inherently rely on `process.env` for accessing environment variables in local files.
**Prevention:** Never use Vite's `define` configuration to inject secrets into the client bundle, as it exposes server-side secrets in plaintext to the browser. Use environment variables with prefixes (e.g., `VITE_`) only for public keys.
