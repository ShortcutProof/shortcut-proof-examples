// filter reads truthiness immediately; it does not await an async callback.
// MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
const assert = require('node:assert/strict');

(async () => {
  const items = [1, 2, 3];
  assert.deepEqual(items.filter(async n => n > 1), [1, 2, 3]);

  const promise = (async () => false)();
  assert.equal(Boolean(promise), true);
  assert.equal(await promise, false);

  // Use a stable dense input, and match each resolved check to its index.
  const checks = await Promise.all(items.map(async n => n > 1));
  assert.deepEqual(checks, [false, true, true]);
  assert.deepEqual(items.filter((_, i) => checks[i]), [2, 3]);

  // Decide how failed checks should be handled; Promise.all can reject.
  await assert.rejects(Promise.all(items.map(async n => {
    if (n === 2) throw Error('check failed');
    return n > 1;
  })), /check failed/);

  // Promise.all provides no concurrency limit. Add one for large workloads.
  console.log('PASS: async-filter');
})().catch(error => { console.error(error); process.exitCode = 1; });
