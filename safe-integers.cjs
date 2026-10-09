// Number cannot distinguish every consecutive integer outside the safe range.
const assert = require('node:assert/strict');
(async () => {
const n=Number.MAX_SAFE_INTEGER;assert.equal(n+1,n+2);
assert.notEqual(BigInt(n)+1n,BigInt(n)+2n);
console.log('PASS: safe-integers');
})().catch(error => { console.error(error); process.exitCode = 1; });
