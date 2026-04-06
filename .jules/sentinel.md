## 2024-03-08 - Vite Define Secret Exposure
**Vulnerability:** The Gemini API key (`GEMINI_API_KEY`) was hardcoded directly into the client-side bundle via Vite's `define` configuration.
**Learning:** Using `define` in Vite (or similar build tools) literally text-replaces occurrences in the codebase with the stringified secret, effectively making it accessible to anyone who inspects the bundled JS.
**Prevention:** Never expose API keys or secrets via build-time replacements or environment variables sent to the client. Keep them securely on a backend server or a serverless proxy to securely fetch data.
