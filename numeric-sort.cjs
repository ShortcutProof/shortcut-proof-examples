// Default sort compares string forms; use a comparator for finite numbers.
const assert = require('node:assert/strict');
(async () => {
assert.deepEqual([3,20,100].sort(),[100,20,3]);
assert.deepEqual([3,20,100].sort((a,b)=>a-b),[3,20,100]);
const a=[20,3,100];const b=a.toSorted((x,y)=>x-y);
assert.deepEqual(a,[20,3,100]);assert.deepEqual(b,[3,20,100]);
console.log('PASS: numeric-sort');
})().catch(error => { console.error(error); process.exitCode = 1; });
