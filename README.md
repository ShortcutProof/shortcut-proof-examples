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

## Watch the published examples

- [map(parseInt)](https://www.youtube.com/shorts/bzKu0d2PLLY)
- [Shared objects with fill](https://www.youtube.com/shorts/Ntf-ClLq-i4)
- [Async forEach](https://www.youtube.com/shorts/IO7EWHcozDs)

Additional videos will be linked after publication.

