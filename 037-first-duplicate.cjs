const assert = require('node:assert/strict');
function firstRepeat(ids) {
  const seen = new Set();
  for (const id of ids) {
    if (seen.has(id)) return id;
    seen.add(id);
  }
  return null;
}
assert.equal(firstRepeat(['B','A','A','B']), 'A');
assert.equal(firstRepeat([]), null);
assert.equal(firstRepeat(['A','B']), null);
assert.equal(firstRepeat(['0','0']), '0');
console.log('SCAN REPEAT', firstRepeat(['B','A','A','B']));
console.log('EMPTY', firstRepeat([]));
console.log('PASS');
