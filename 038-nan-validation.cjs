const assert = require('node:assert/strict');
const bad = x => !(x < 0 || x > 100);
const good = x => Number.isFinite(x) && x >= 0 && x <= 100;
console.log('BAD NaN', bad(NaN));
console.log('FIXED NaN', good(NaN));
for (const x of [NaN, Infinity, -Infinity, '50', null, undefined, -1, 101]) assert.equal(good(x), false);
for (const x of [0, 50, 100]) assert.equal(good(x), true);
console.log('BOUNDARIES', good(0), good(100));
console.log('PASS');
