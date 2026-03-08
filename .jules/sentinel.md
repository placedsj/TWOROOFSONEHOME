## 2025-03-08 - Prevent secret exposure in Vite config
**Vulnerability:** The Vite configuration used `define` to inject `env.GEMINI_API_KEY` into the client-side bundle, exposing sensitive credentials to users.
**Learning:** Vite's `define` creates global text replacements, effectively baking the raw API key directly into the compiled JavaScript. Environment variables starting with `VITE_` are naturally exposed, but manually mapping backend secrets into `define` circumvents intended separation.
**Prevention:** Never use Vite `define` to inject server-side or sensitive environment variables. Always proxy sensitive external API requests through a secured backend service rather than making them directly from the client.
