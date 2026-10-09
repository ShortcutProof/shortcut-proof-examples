// Global regular expressions preserve a moving lastIndex.
const assert = require('node:assert/strict');
(async () => {
const re=/a/g; assert.equal(re.test("a"),true); assert.equal(re.test("a"),false);
assert.equal(/a/.test("a"),true);
console.log('PASS: regex-state');
})().catch(error => { console.error(error); process.exitCode = 1; });
