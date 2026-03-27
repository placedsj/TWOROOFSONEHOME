## 2024-05-23 - Vite Define Secrets Exposure
**Vulnerability:** The Gemini API key was being embedded directly into the client bundle via Vite's `define` configuration replacing `process.env.GEMINI_API_KEY` and `process.env.API_KEY` with the plaintext secret.
**Learning:** Vite's `define` config performs static string replacement at build time. Mapping sensitive server-side variables directly into the global scope causes them to be baked directly into the frontend code, risking complete key compromise.
**Prevention:** Never use Vite's `define` for sensitive secrets. Instead, replace it with an empty object polyfill (`'process.env': {}`) to prevent `ReferenceError: process is not defined` while maintaining a secure client scope.
