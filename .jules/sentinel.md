## 2024-03-20 - Exposed Environment Variables via Vite define
**Vulnerability:** Server-side environment variables (`GEMINI_API_KEY`) were explicitly injected into the client bundle via Vite's `define` configuration (`'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY)`).
**Learning:** Using Vite's `define` with `JSON.stringify` directly embeds the plaintext value of sensitive server-side variables into the compiled client-side JavaScript, exposing API keys to anyone who inspects the frontend code.
**Prevention:** Never use Vite's `define` to inject sensitive server-side environment variables. Only expose configuration intended for public client consumption by prefixing the variable with `VITE_` and accessing it via `import.meta.env`.
