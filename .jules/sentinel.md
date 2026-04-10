## 2024-05-24 - Weak Cryptographic Hash Generation
**Vulnerability:** The application used `Math.random().toString(16).substr(2, 16)` to generate a "SECURE HASH" in `pages/DigitalBinder.tsx`. `Math.random()` is not a cryptographically secure pseudo-random number generator (CSPRNG), making the resulting hashes predictable and insecure for verification purposes.
**Learning:** Never use `Math.random()` for anything claiming to be a "SECURE HASH", token, or identifier. Predictable RNGs can allow attackers to spoof values, bypass checks, or forge "secure" identifiers.
**Prevention:** Always use the Web Crypto API (`window.crypto.getRandomValues` or `crypto.randomUUID()`) when generating tokens, hashes, or security identifiers in the browser.
