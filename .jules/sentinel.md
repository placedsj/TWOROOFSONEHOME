## 2025-03-21 - Vite define API Key Leak

**Vulnerability:** Sensitive API keys (`GEMINI_API_KEY`) were being injected directly into the client-side JavaScript bundle using Vite's `define` configuration.
**Learning:** Using Vite's `define` to inject server-side environment variables embed them in plaintext within the compiled client-side JavaScript bundle. Any client-side references to `process.env` should be refactored or polyfilled, otherwise the browser will throw a `ReferenceError: process is not defined`.
**Prevention:** Avoid using Vite's `define` configuration for sensitive server-side environment variables. Use `VITE_` prefixed variables only for safe, public configuration.