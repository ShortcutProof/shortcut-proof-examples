// fill reuses the same object reference.
const assert = require('node:assert/strict');
(async () => {
const rows=Array(3).fill({n:0}); rows[0].n=7;
assert.deepEqual(rows.map(x=>x.n),[7,7,7]);
const independent=Array.from({length:3},()=>({n:0})); independent[0].n=7;
assert.deepEqual(independent.map(x=>x.n),[7,0,0]);
console.log('PASS: fill-shared');
})().catch(error => { console.error(error); process.exitCode = 1; });
