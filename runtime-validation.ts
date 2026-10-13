// Code Proof: runtime validation lesson.
// Compile: npx -p typescript@5.9.3 tsc --strict --target ES2022 --module commonjs runtime-validation.ts
// Run: node runtime-validation.js
// Each numbered block is independent. Decimal finite scores in [0,100] are allowed.

// SCENE 1
{
const bad = (x: number) => !(x < 0 || x > 100);
function good(x: unknown): x is number {
  return typeof x === "number" &&
    Number.isFinite(x) && x >= 0 && x <= 100;
}
console.log("BAD NaN", bad(NaN));
console.log("FIXED NaN", good(NaN));}

// SCENE 2
{
console.log("BELOW ZERO", NaN < 0);
console.log("ABOVE HUNDRED", NaN > 100);
console.log("NEGATED OR", !(NaN < 0 || NaN > 100));}

// SCENE 3
{
const bad = (x: number) => !(x < 0 || x > 100);
console.log("TYPE OF NaN", typeof NaN);
console.log("TYPED CALL", bad(NaN));
console.log("FINITE", Number.isFinite(NaN));}

// SCENE 4
{
function good(x: unknown): x is number {
  return typeof x === "number" &&
    Number.isFinite(x) && x >= 0 && x <= 100;
}
const value: unknown = 50;
if (good(value)) console.log("VALID", value + 1);
console.log("STRING", good("50"));}

// SCENE 5
{
const raw: unknown = "50";
const asserted = raw as number;
const bad = (x: number) => !(x < 0 || x > 100);
console.log("RUNTIME TYPE", typeof asserted);
console.log("BAD", bad(asserted));
console.log("FINITE", Number.isFinite(asserted));}

// SCENE 6
{
function good(x: unknown): x is number {
  return typeof x === "number" &&
    Number.isFinite(x) && x >= 0 && x <= 100;
}
function parseScore(text: string): number | null {
  if (text.trim() === "") return null;
  const value = Number(text);
  return good(value) ? value : null;
}
console.log("EMPTY CONVERSION", Number(""));
console.log("EMPTY SCORE", parseScore(""));
console.log("ZERO SCORE", parseScore("0"));}

// SCENE 7
{
function good(x: unknown): x is number {
  return typeof x === "number" &&
    Number.isFinite(x) && x >= 0 && x <= 100;
}
function scoreObject(x: unknown): boolean {
  return typeof x === "object" && x !== null &&
    "score" in x && good(x.score);
}
const numeric: unknown = JSON.parse('{"score":50}');
const text: unknown = JSON.parse('{"score":"50"}');
console.log("NUMBER JSON", scoreObject(numeric));
console.log("TEXT JSON", scoreObject(text));}

// SCENE 8
{
const result: number | null = 0;
console.log("TRUTHINESS", result ? "VALID" : "MISSING");
console.log("NULL CHECK", result !== null ? "VALID" : "MISSING");}

// SCENE 9
{
function good(x: unknown): x is number {
  return typeof x === "number" &&
    Number.isFinite(x) && x >= 0 && x <= 100;
}
let checked = 0;
for (const [value, expected] of [
  [0,true],[50,true],[100,true],[NaN,false],
  [Infinity,false],[-1,false],[101,false],
  ["50",false],[null,false],[undefined,false]
] as const) {
  if (good(value) !== expected) throw Error("contract failed");
  checked++;
}
console.log("CASES", checked);
console.log("CONTRACT PASS");}

// SCENE 10
{
function acceptsNumber(x: number): number { return x; }
console.log("NaN COMPILES", typeof acceptsNumber(NaN));}

// SCENE 11
{
function good(x: unknown): x is number {
  return typeof x === "number" &&
    Number.isFinite(x) && x >= 0 && x <= 100;
}
console.log("NaN", good(NaN));
console.log("ZERO", good(0));
console.log("TEXT", good("50"));
console.log("DONE");}

// The static check must reject a string argument.
{
 function onlyNumber(x: number) { return x; }
 if (false) {
  // @ts-expect-error String must not satisfy a number parameter.
  onlyNumber("50");
 }
}
