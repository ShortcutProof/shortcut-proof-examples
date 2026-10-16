const assert=require("node:assert/strict");
const bad=(a,b)=>a>b;
assert.deepEqual([1,2,3].toSorted(bad),[1,2,3]);
const wrong=[3,1,2].toSorted(bad);
const fixed=[3,1,2].toSorted((a,b)=>a-b);
assert.notDeepEqual(wrong,[1,2,3]);
assert.deepEqual(fixed,[1,2,3]);
console.log("BAD",wrong.join(","));
console.log("FIXED",fixed.join(","));