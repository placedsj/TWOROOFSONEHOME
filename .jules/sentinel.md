## 2025-04-02 - Vite Define Secret Exposure
**Vulnerability:** Vite's `define` configuration was mapping sensitive server-side environment variables (`env.GEMINI_API_KEY`) to `process.env` globals, exposing the plain-text secret directly in the client bundle.
**Learning:** Vite's `define` performs static string replacement at build time. It should never be used to map backend secrets to the frontend.
**Prevention:** Avoid blindly mapping `env` properties into `define`. Only expose variables prefixed with `VITE_` using `import.meta.env` for safe client-side configurations.
