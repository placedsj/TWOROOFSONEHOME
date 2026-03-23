## 2025-02-28 - Avoid Exposing Secrets via Vite `define`
**Vulnerability:** Vite configuration exposed `GEMINI_API_KEY` to the client-side JavaScript bundle via the `define` property.
**Learning:** Using `define` in `vite.config.ts` for static string replacement directly embeds the plaintext secret into the client bundle at build time. It maps sensitive server-side environment variables to client-side globals like `process.env`.
**Prevention:** Never use Vite's `define` to inject sensitive server-side environment variables. If a client needs a key, proxy requests through a backend server. If a key is meant to be public, use Vite's `VITE_` prefix system.
