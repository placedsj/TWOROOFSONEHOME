# Sentinel's Journal

## 2026-02-20 - Critical API Key Exposure via Vite Config
**Vulnerability:** Hardcoded exposure of `GEMINI_API_KEY` in `vite.config.ts` using `define`. This injected the secret directly into the client-side bundle.
**Learning:** Build tools like Vite's `define` feature replace global constants at compile time. Using this for secrets makes them public.
**Prevention:** Never use `define` for secrets. Use `.env` files for build-time configuration, but ensure secrets are only accessed in server-side code or proxy requests. Client-side code should never contain API keys for paid services.
