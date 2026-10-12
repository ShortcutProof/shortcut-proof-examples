// Code Proof: eight tested interview scenes. Node22+.
// String IDs are a precondition; core helpers do not validate types.
{
// CHAPTER 1
console.log('CHAPTER 1');
const ids = ['B', 'A', 'A', 'B'];
console.log('INPUT', ids.join(','));

}

{
// CHAPTER 2
console.log('CHAPTER 2');
function firstRepeat(ids) {
  const seen = new Set();
  for (const id of ids) {
    if (seen.has(id)) return id;
    seen.add(id);
  }
  return null;
}
function earliestOriginal(ids) {
  const counts = new Map();
  for (const id of ids)
    counts.set(id, (counts.get(id) ?? 0) + 1);
  return ids.find(id => counts.get(id) > 1) ?? null;
}
const ids = ['B','A','A','B'];
console.log('SCAN', firstRepeat(ids));
console.log('ORIGINAL POSITION', earliestOriginal(ids));

}

{
// CHAPTER 3
console.log('CHAPTER 3');
function firstRepeat(ids) {
  const seen = new Set();
  for (const id of ids) {
    if (seen.has(id)) return id;
    seen.add(id);
  }
  return null;
}
function earliestOriginal(ids) {
  const counts = new Map();
  for (const id of ids)
    counts.set(id, (counts.get(id) ?? 0) + 1);
  return ids.find(id => counts.get(id) > 1) ?? null;
}
const ids = ['B','A','A','B'];
const actual = earliestOriginal(ids);
console.log('EXPECTED SCAN', firstRepeat(ids));
console.log('COUNTS THEN FIND', actual);

}

{
// CHAPTER 4
console.log('CHAPTER 4');
const seen = new Set();
for (const id of ['B','A','A','B']) {
  console.log(id, seen.has(id) ? 'REPEAT' : 'NEW');
  if (seen.has(id)) break;
  seen.add(id);
}

}

{
// CHAPTER 5
console.log('CHAPTER 5');
function firstRepeat(ids) {
  const seen = new Set();
  for (const id of ids) {
    if (seen.has(id)) return id;
    seen.add(id);
  }
  return null;
}
const assert = require('node:assert/strict');
assert.equal(firstRepeat([]), null);
assert.equal(firstRepeat(['A','B']), null);
assert.equal(firstRepeat(['','']), '');
assert.equal(firstRepeat(['B','B','A']), 'B');
console.log('EMPTY', JSON.stringify(firstRepeat([])));
console.log('EMPTY STRING ID', JSON.stringify(firstRepeat(['',''])));
console.log('BOUNDARIES PASS');

}

{
// CHAPTER 6
console.log('CHAPTER 6');
function firstRepeat(ids) {
  const seen = new Set();
  for (const id of ids) {
    if (seen.has(id)) return id;
    seen.add(id);
  }
  return null;
}
const ids = ['B','B','A','A'];
console.log('SCAN', firstRepeat(ids));
console.log('SORTED SCAN', firstRepeat([...ids].sort()));
console.log('INPUT UNCHANGED', ids.join(','));

}

{
// CHAPTER 7
console.log('CHAPTER 7');
const ids = Array.from({length:100}, (_,i) => String(i));
let comparisons = 0;
for (let i=0; i<ids.length; i++)
  for (let j=0; j<i; j++) {
    comparisons++;
    if (ids[i] === ids[j]) throw Error('fixture');
  }
const seen = new Set();
let membership = 0, additions = 0;
for (const id of ids) {
  membership++;
  if (seen.has(id)) break;
  seen.add(id); additions++;
}
console.log('NAIVE COMPARISONS', comparisons);
console.log('SET HAS CALLS', membership);
console.log('SET ADD CALLS', additions);

}

{
// CHAPTER 8
console.log('CHAPTER 8');
function firstRepeat(ids) {
  const seen = new Set();
  for (const id of ids) {
    if (seen.has(id)) return id;
    seen.add(id);
  }
  return null;
}
function earliestOriginal(ids) {
  const counts = new Map();
  for (const id of ids)
    counts.set(id, (counts.get(id) ?? 0) + 1);
  return ids.find(id => counts.get(id) > 1) ?? null;
}
const assert = require('node:assert/strict');
const input = ['B','A','A','B'];
const copy = [...input];
assert.equal(firstRepeat(input), 'A');
assert.equal(earliestOriginal(input), 'B');
assert.deepEqual(input, copy);
assert.equal(firstRepeat([]), null);
assert.equal(firstRepeat(['','']), '');
console.log('CONTRACTS AND NONMUTATION PASS');

}