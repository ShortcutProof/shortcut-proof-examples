import assert from 'node:assert/strict';
const trace = [];
queueMicrotask(() => trace.push('microtask'));
Promise.resolve().then(() => trace.push('promise'));
trace.push('sync');
await new Promise(r => setTimeout(r, 20));
assert.deepEqual(trace, ['sync', 'microtask', 'promise']);
console.log('PASS: controlled trace matches');
