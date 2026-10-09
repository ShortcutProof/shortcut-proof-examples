// forEach does not await promises returned by its callback.
const assert = require('node:assert/strict');
(async () => {
let release; const gate=new Promise(r=>release=r); const events=[];
await [1,2].forEach(async n=>{await gate; events.push(n);});
assert.deepEqual(events,[]); release(); await gate; await Promise.resolve();
assert.deepEqual(events,[1,2]);
const results=await Promise.all([1,2].map(async n=>n*2));
assert.deepEqual(results,[2,4]);
console.log('PASS: await-foreach');
})().catch(error => { console.error(error); process.exitCode = 1; });
