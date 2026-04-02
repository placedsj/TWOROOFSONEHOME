## 2025-02-24 - Client-side Secret Leak via Vite Configuration
**Vulnerability:** The Vite configuration used the `define` block to statically embed the server-side `GEMINI_API_KEY` into the client-side bundle via `process.env.API_KEY` and `process.env.GEMINI_API_KEY`.
**Learning:** Vite's `define` configuration performs static string replacement at build time. Using it to map sensitive server-side environment variables to client-side globals like `process.env` directly embeds the plaintext secret into the client bundle, causing a critical security leak.
**Prevention:** Never use Vite's `define` or similar build-time replacement tools to inject sensitive secrets into the client bundle. Only safe, public variables should be exposed to the client.
