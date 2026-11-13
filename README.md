# tinycalc

Small numeric helpers, one function per file in `src/`. Each module exports its function as the default
export and the documented `examples` (arguments and the expected result).

- `npm test` runs the unit tests (`test/`).
- `npm run check:examples` checks every documented example.

CI (`.github/workflows/ci.yml`) runs both on every push to main and on pull requests.
