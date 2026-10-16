// Code Proof: independently scoped executed lesson fixtures.
// Node22.19.0. Broken comparator behavior can differ across engines.

{ // scene 0
const assert=require("node:assert/strict");
const input=[3,1,2];
const bad=input.toSorted((a,b)=>a>b);
const good=input.toSorted((a,b)=>a-b);
console.log("BAD",bad.join(","));
console.log("FIXED",good.join(","));
assert.notDeepEqual(bad,[1,2,3]);
assert.deepEqual(good,[1,2,3]);
}

{ // scene 1
const assert=require("node:assert/strict");
const good=(a,b)=>a-b,bad=(a,b)=>a>b;
const pairs=[[1,3],[2,2],[3,1]];
const a=pairs.map(p=>good(...p));
const b=pairs.map(p=>Number(bad(...p)));
console.log("GOOD",a.join(","));
console.log("BOOLEAN",b.join(","));
assert.deepEqual(a,[-2,0,2]);
assert.deepEqual(b,[0,0,1]);
}

{ // scene 2
const assert=require("node:assert/strict");
const bad=(a,b)=>a>b;
const ordered=[1,2,3].toSorted(bad);
const reversed=[3,2,1].toSorted(bad);
console.log("SORTED INPUT",ordered.join(","));
console.log("REVERSED INPUT",reversed.join(","));
assert.deepEqual(ordered,[1,2,3]);
assert.notDeepEqual(reversed,[1,2,3]);
}

{ // scene 3
const assert=require("node:assert/strict");
const fixtures=[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]];
let failures=0;
for(const input of fixtures){
 const before=[...input];
 assert.deepEqual(input.toSorted((a,b)=>a-b),[1,2,3]);
 assert.deepEqual(input,before);
 if(input.toSorted((a,b)=>a>b).join()!=="1,2,3") failures++;
}
assert.ok(failures>0);
console.log("FIXED",fixtures.length,"OF",fixtures.length,"PASS");
console.log("BROKEN FAILURES",failures);
}

{ // scene 4
const assert=require("node:assert/strict");
const cases=[[[],[]],[[7],[7]],[[2,1,2],[1,2,2]],[[-1,3,-4],[-4,-1,3]]];
for(const [input,expected] of cases) assert.deepEqual(input.toSorted((a,b)=>a-b),expected);
console.log("BOUNDARY FIXTURES",cases.length,"PASS");
}

{ // scene 5
const assert=require("node:assert/strict");
const check=f=>Math.sign(Number(f(1,3)))===-Math.sign(Number(f(3,1)));
assert.equal(check((a,b)=>a-b),true);
assert.equal(check((a,b)=>a>b),false);
console.log("NUMERIC OPPOSITE SIGNS",true);
console.log("BOOLEAN OPPOSITE SIGNS",false);
}

{ // scene 6
const assert=require("node:assert/strict");
const input=[3,1,2];const sorted=input.toSorted((a,b)=>a-b);
assert.deepEqual(input,[3,1,2]);assert.deepEqual(sorted,[1,2,3]);
const rows=[{score:2},{score:1}];
const copy=rows.toSorted((a,b)=>a.score-b.score);
copy[0].score=99;
assert.equal(rows[1].score,99);
console.log("SOURCE ORDER",input.join(","));
console.log("SORTED COPY",sorted.join(","));
console.log("SHARED OBJECT SCORE",rows[1].score);
}

{ // scene 7
const assert=require("node:assert/strict");
const rows=[{id:"A",score:2},{id:"B",score:1},{id:"C",score:2}];
const ids=rows.toSorted((a,b)=>a.score-b.score).map(r=>r.id);
assert.deepEqual(ids,["B","A","C"]);
console.log("IDS",ids.join(","));
}

{ // scene 8
const assert=require("node:assert/strict");
function sortFinite(xs){
 if(!Array.isArray(xs)||!Array.from(xs).every(x=>typeof x==="number"&&Number.isFinite(x))) throw new TypeError("finite numbers only");
 return xs.toSorted((a,b)=>a-b);
}
assert.deepEqual(sortFinite([3,0,-1]),[-1,0,3]);
for(const x of [["2",1],[undefined,1],[NaN,1],Array(2)]) assert.throws(()=>sortFinite(x),TypeError);
console.log("FINITE VALUES PASS");
console.log("4 INVALID FIXTURES REJECTED");
}

{ // scene 9
const assert=require("node:assert/strict");
const ascending=(a,b)=>a-b;
assert.deepEqual([3,1,2].toSorted(ascending),[1,2,3]);
assert.equal(Math.sign(ascending(1,3)),-Math.sign(ascending(3,1)));
console.log("REVIEW CHECKLIST PASS");
}
