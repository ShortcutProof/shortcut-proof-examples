// A return (or throw) inside finally can replace the earlier completion.
// MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch
const assert = require('node:assert/strict');

function suppressed() {
  try { throw Error('failed'); }
  finally { return 'ok'; }
}
assert.equal(suppressed(), 'ok');

let cleanupCount = 0;
function cleanup() { cleanupCount += 1; }
function corrected() {
  try { throw Error('failed'); }
  finally { cleanup(); }
}
assert.throws(corrected, /failed/);
assert.equal(cleanupCount, 1);

function replaced() {
  try { throw Error('original'); }
  finally { throw Error('cleanup'); }
}
assert.throws(replaced, /cleanup/);

// Real cleanup can fail too; decide how to preserve or report both failures.
console.log('PASS: finally-return');
