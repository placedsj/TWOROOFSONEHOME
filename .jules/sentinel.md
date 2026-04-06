## 2024-04-06 - Vite Config Secret Exposure
**Vulnerability:** The Gemini API key was exposed to the client-side build via Vite's `define` configuration.
**Learning:** Using `define` in Vite statically replaces matching variables globally in the client build, effectively leaking server-side secrets or API keys if referenced, which represents a critical risk even if currently unused.
**Prevention:** Never use Vite's `define` to pass sensitive environment variables. Always implement a secure backend proxy for handling requests requiring sensitive API keys.
