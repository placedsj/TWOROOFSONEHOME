## 2024-04-03 - Exposed API Keys in Vite Config
**Vulnerability:** The `GEMINI_API_KEY` was being hardcoded into the client-side bundle via the Vite `define` configuration.
**Learning:** Vite's `define` configuration replaces variables at build-time. Embedding server-side environment variables into `process.env` directly in `vite.config.ts` causes them to be bundled as plaintext in the client payload.
**Prevention:** Never use Vite's `define` to proxy server-side secrets to the client. Keep secrets on the server and use an API proxy to interact with them securely.
