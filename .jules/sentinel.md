## 2025-03-17 - Insecure Randomness for ID Generation
**Vulnerability:** Found `Math.random().toString(36).substr(2, 9)` being used for generating IDs in `DigitalBinder.tsx`.
**Learning:** `Math.random()` is not cryptographically secure and can lead to predictable identifiers or collisions, which could become a vulnerability if used for sensitive tracking or session handling.
**Prevention:** Always use `crypto.randomUUID()` or a secure library like `uuid` or `nanoid` (backed by secure RNG) when generating unique identifiers or tokens.