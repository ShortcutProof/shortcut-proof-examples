// Logical OR replaces every falsy value; nullish coalescing replaces null and undefined.
const assert = require('node:assert/strict');
(async () => {
assert.equal(0||10,10);assert.equal(0??10,0);assert.equal(null??10,10);
console.log('PASS: zero-default');
})().catch(error => { console.error(error); process.exitCode = 1; });
