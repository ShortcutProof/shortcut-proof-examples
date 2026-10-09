// Set compares object references, not matching fields.
const assert = require('node:assert/strict');
(async () => {
const rows=[{id:1},{id:1}];assert.equal(new Set(rows).size,2);
assert.equal(new Set(rows.map(r=>r.id)).size,1);
console.log('PASS: set-objects');
})().catch(error => { console.error(error); process.exitCode = 1; });
