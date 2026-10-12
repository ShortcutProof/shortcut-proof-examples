# Code Proof — runnable JavaScript examples

Real code. Clear proof. Original examples accompanying [Code Proof on YouTube](https://www.youtube.com/channel/UCZ7RnkFL10tRoHMoto4__ug).

## Run locally

Node.js 22 or newer. No dependencies, account, API key or installation script required.

```sh
npm test
node shallow-copy.cjs
```

The short examples use assertions. A passing test run prints PASS. These are small teaching demonstrations, not production libraries. Cancellation examples use deterministic gates rather than fragile timer races.

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

Watch the first long pilot: [Why await forEach Doesn't Wait](https://www.youtube.com/watch?v=frTiaTL9ZMQ). The second pilot is uploaded and scheduled for 13 October 2026 at 20:00 Europe/Sofia. Complete runnable demonstrations:

- [Async loops and completion](async-loops-long.mjs): `node async-loops-long.mjs`
- [Shallow copies and deep clones](shallow-deep-copy-long.mjs): `node shallow-deep-copy-long.mjs`

Both scripts run independent assertion-backed examples with Node.js 22.19.0.

## Release calendar

Times use Europe/Sofia. Regex, Set, sparse-map and Unicode videos were verified public on 12 October; later dates remain scheduled and may be private until release.

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



## Long-video scene exercises

Run `node test-long-cards.cjs` to check all21 standalone programs against the exact outputs shown in the videos. Each numbered card can also run directly, for example `node event-loop-00.mjs`. These bounded Node fixtures illustrate the stated behavior; they do not claim universal callback ordering across all browser/Node APIs.

- event-loop: [1](event-loop-00.mjs), [2](event-loop-01.mjs), [3](event-loop-02.mjs), [4](event-loop-03.mjs), [5](event-loop-04.mjs), [6](event-loop-05.mjs), [7](event-loop-06.mjs).
- closures: [1](closures-00.mjs), [2](closures-01.mjs), [3](closures-02.mjs), [4](closures-03.mjs), [5](closures-04.mjs), [6](closures-05.mjs), [7](closures-06.mjs).
- code-review-this: [1](code-review-this-00.mjs), [2](code-review-this-01.mjs), [3](code-review-this-02.mjs), [4](code-review-this-03.mjs), [5](code-review-this-04.mjs), [6](code-review-this-05.mjs), [7](code-review-this-06.mjs).

## Review Lab discount test

[Watch the public Short](https://www.youtube.com/shorts/ZYpd2f4QS4k) · [Runnable proof](review-discount.cjs) · [Free practice task](https://payhip.com/b/Ph0TY). The exercise rounds discounted cents with Math.round; this is a stated exercise contract, not a universal accounting policy.

## New tested practice previews

These have verified runnable code; their videos are not finished or published yet.
- [036-sort-mutates](036-sort-mutates.cjs)
- [037-first-duplicate](037-first-duplicate.cjs)
- [038-nan-validation](038-nan-validation.cjs)

## Interview lesson: two meanings of first duplicate

Run `node first-repeat-long.cjs` for eight original executed scenes: contracts, counterexamples, Set trace, empty-string IDs, nonmutation and operation counts. [Complete source](first-repeat-long.cjs).

The7:08 lesson is ready locally and intended for25October2026 at20:00 Europe/Sofia. It is not uploaded yet because of the channel upload limit. String IDs are a precondition; no universal Set timing guarantee.
