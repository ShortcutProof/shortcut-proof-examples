# JavaScript sort: fail, fix, prove

Run with Node22 or newer:

```sh
node sort-contract-short.cjs
node sort-contract-long.cjs
```

Both files use only the built-in node:assert/strict module. The long file contains ten independently scoped executed scenes: immediate comparator repair, sign results, an insufficient happy-path test, all six input permutations, boundary cases, argument-swap property, shallow array copying, stable ties and strict finite-number validation.

Broken boolean-comparator outputs are not portable between engines; these failure assertions reproduce our Node22.19.0 fixtures. Array copying does not deep-clone objects. The finite-number helper intentionally rejects numeric strings, NaN, undefined and sparse slots. No benchmark or production correctness guarantee.

English videos scheduled16October2026 Europe/Sofia:
- Short15:30: https://www.youtube.com/shorts/ObxhGWP9fyU
- Full lesson17:30: https://www.youtube.com/watch?v=2kl9HkDCYAw

Original graphics with separately executed Node output, Cedar AI narration.

References:
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSorted
