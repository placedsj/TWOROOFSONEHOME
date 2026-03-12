## 2024-03-24 - [CRITICAL] Fix API Key Exposure via Vite Config
**Vulnerability:** GEMINI_API_KEY was being injected into `process.env` in the client bundle using Vite's `define` property.
**Learning:** Using `define` in Vite config exposes server-side secrets in plaintext to the browser context, making them accessible to anyone inspecting the application.
**Prevention:** Never use Vite's `define` configuration to inject secrets (like API keys) into `process.env` within the client bundle. Use a backend service or proxy for secure API access.
