// JSON object properties with undefined are omitted; array entries become null.
// MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
const assert = require('node:assert/strict');

const original = { nickname: undefined };
assert.equal(Object.hasOwn(original, 'nickname'), true);
const encoded = JSON.stringify(original);
assert.equal(encoded, '{}');
assert.equal(Object.hasOwn(JSON.parse(encoded), 'nickname'), false);
// Serialization did not delete anything from the original JavaScript object.
assert.equal(Object.hasOwn(original, 'nickname'), true);
assert.equal(original.nickname, undefined);

assert.equal(JSON.stringify([undefined]), '[null]');
assert.deepEqual(JSON.parse(JSON.stringify([undefined])), [null]);
assert.equal(JSON.stringify({ nickname: null }), '{"nickname":null}');

// Missing and null may mean different things in an API. Null does not
// universally mean deletion: use the value required by that API's contract.
console.log('PASS: json-undefined');
