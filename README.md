# Code Proof — runnable JavaScript examples

Real code. Clear proof. Original examples accompanying [Code Proof on YouTube](https://www.youtube.com/channel/UCZ7RnkFL10tRoHMoto4__ug).

## Run locally

Node.js 22 or newer. No dependencies, account, API key or installation script required.

```sh
npm test
node shallow-copy.cjs
```

Every example uses assertions. A passing run prints PASS. These are small teaching demonstrations, not production libraries. Cancellation examples use deterministic gates rather than fragile timer races.

## Examples

- [map-parseint](map-parseint.cjs) — map passes an index as the second callback argument.
- [fill-shared](fill-shared.cjs) — fill reuses the same object reference.
- [await-foreach](await-foreach.cjs) — forEach does not await promises returned by its callback.
- [regex-state](regex-state.cjs) — Global regular expressions preserve a moving lastIndex.
- [set-objects](set-objects.cjs) — Set compares object references, not matching fields.
- [sparse-map](sparse-map.cjs) — map skips empty slots; an explicit undefined is an entry.
- [unicode-length](unicode-length.cjs) — UTF-16 code units, code points and grapheme clusters are different counts.
- [safe-integers](safe-integers.cjs) — Number cannot distinguish every consecutive integer outside the safe range.
- [zero-default](zero-default.cjs) — Logical OR replaces every falsy value; nullish coalescing replaces null and undefined.
- [shallow-copy](shallow-copy.cjs) — Object spread creates a shallow copy; nested references can remain shared.
- [numeric-sort](numeric-sort.cjs) — Default sort compares string forms; use a comparator for finite numbers.
- [race-keeps-running](race-keeps-running.cjs) — Promise.race settles its result without cancelling the other operation.
- [async-filter](async-filter.cjs) — Async callbacks return truthy promises; resolve checks before filtering by their results.
- [json-undefined](json-undefined.cjs) — JSON omits undefined object properties but preserves array positions as null.
- [finally-return](finally-return.cjs) — A finally return can suppress an error; cleanup can also replace a failure if it throws.

## Watch the published examples

- [map(parseInt)](https://www.youtube.com/shorts/bzKu0d2PLLY)
- [Shared objects with fill](https://www.youtube.com/shorts/Ntf-ClLq-i4)
- [Async forEach](https://www.youtube.com/shorts/IO7EWHcozDs)

## Long-form pilot demonstrations

The pilot videos are in preparation; these complete code demonstrations are already available:

- [Async loops and completion](async-loops-long.mjs): `node async-loops-long.mjs`
- [Shallow copies and deep clones](shallow-deep-copy-long.mjs): `node shallow-deep-copy-long.mjs`

Both scripts run independent assertion-backed examples with Node.js 22.19.0.

## Scheduled examples

The videos below are scheduled, not yet confirmed public here. Times use Europe/Sofia; a scheduled video may remain private until its release time.

- [Stateful regex](https://www.youtube.com/shorts/BP3uo9Av0u4) — 10 October 2026, 13:00; [runnable example](regex-state.cjs).
- [Set and objects](https://www.youtube.com/shorts/gx1wEFskPyE) — 10 October 2026, 19:00; [runnable example](set-objects.cjs).
- [Sparse array map](https://www.youtube.com/shorts/qCdFWq79avg) — 11 October 2026, 13:00; [runnable example](sparse-map.cjs).
- [Unicode length](https://www.youtube.com/shorts/D1KNM6dVNH0) — 11 October 2026, 19:00; [runnable example](unicode-length.cjs).
- [Safe integers](https://www.youtube.com/shorts/AkyvLra9DiE) — 12 October 2026, 13:00; [runnable example](safe-integers.cjs).
- [Zero is not missing](https://www.youtube.com/shorts/KAocpxoEa5Q) — 12 October 2026, 19:00; [runnable example](zero-default.cjs).
- [Async filter](https://www.youtube.com/shorts/aKyO8XM_Jlo) — 13 October 2026, 13:00; [runnable example](async-filter.cjs).
- [Shallow copy](https://www.youtube.com/shorts/d2tCp1HAlQo) — 14 October 2026, 13:00; [runnable example](shallow-copy.cjs).
- [JSON undefined](https://www.youtube.com/shorts/nddAP3wKQhI) — 15 October 2026, 13:00; [runnable example](json-undefined.cjs).
- [Finally return](https://www.youtube.com/shorts/heRAvUHIyE0) — 16 October 2026, 13:00; [runnable example](finally-return.cjs).
- [Promise.race keeps running](https://www.youtube.com/shorts/wZY_1O5G5mI) — 17 October 2026, 13:00; [runnable example](race-keeps-running.cjs).
- [Numeric sort](https://www.youtube.com/shorts/mRe2H4b0LZo) — 18 October 2026, 13:00; [runnable example](numeric-sort.cjs).

## Practical boundaries

These examples isolate one behavior at a time. For real applications, handle rejected asynchronous checks and control concurrency; keep the input stable while matching checks by index. An API contract determines what missing and explicit null mean. Cleanup error handling needs an explicit policy if both the operation and cleanup fail.

