import assert from 'node:assert/strict';
function counter() { let n = 0; return () => ++n; }
const first = counter(), second = counter();
assert.equal(first(), 1);
assert.equal(first(), 2);
assert.equal(second(), 1);
console.log('PASS: one instance retains state');
console.log('PASS: second instance is independent');
