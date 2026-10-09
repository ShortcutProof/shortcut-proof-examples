// Object spread creates a shallow copy; nested references can remain shared.
const assert = require('node:assert/strict');
(async () => {
const a={stats:{n:1}},b={...a};b.stats.n=9;assert.equal(a.stats.n,9);
const c={stats:{n:1}},d={...c,stats:{...c.stats}};d.stats.n=9;assert.equal(c.stats.n,1);
console.log('PASS: shallow-copy');
})().catch(error => { console.error(error); process.exitCode = 1; });
