// Promise.race settles its result without cancelling the other operation.
const assert = require('node:assert/strict');
(async () => {
let release;const gate=new Promise(r=>release=r);const events=[];
const slow=gate.then(()=>events.push("slow completed"));
assert.equal(await Promise.race([Promise.resolve("fast"),slow]),"fast");
assert.deepEqual(events,[]);release();await slow;assert.deepEqual(events,["slow completed"]);
console.log('PASS: race-keeps-running');
})().catch(error => { console.error(error); process.exitCode = 1; });
