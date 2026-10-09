// map passes an index as the second callback argument.
const assert = require('node:assert/strict');
(async () => {
assert.deepEqual(["1","2","3"].map(parseInt), [1,NaN,NaN]);
assert.deepEqual(["1","2","3"].map(s=>parseInt(s,10)),[1,2,3]);
console.log('PASS: map-parseint');
})().catch(error => { console.error(error); process.exitCode = 1; });
