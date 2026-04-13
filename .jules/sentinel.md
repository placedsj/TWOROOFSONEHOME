## 2024-04-14 - Predictable RNG replacing crypto
**Vulnerability:** Predictable secure hash generation using `Math.random()`
**Learning:** `Math.random()` is not a Cryptographically Secure Pseudo-Random Number Generator (CSPRNG) and shouldn't be used to generate secure identifiers like hashes.
**Prevention:** Use `crypto.randomUUID()` or `window.crypto.getRandomValues()` for security-sensitive random values.
