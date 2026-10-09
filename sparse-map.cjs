// map skips empty slots; an explicit undefined is an entry.
const assert = require('node:assert/strict');
(async () => {
let calls=0;Array(3).map(()=>++calls);assert.equal(calls,0);
assert.deepEqual(Array.from({length:3},()=>1),[1,1,1]);
assert.deepEqual([undefined].map(()=>1),[1]);
console.log('PASS: sparse-map');
})().catch(error => { console.error(error); process.exitCode = 1; });
