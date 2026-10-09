// UTF-16 code units, code points and grapheme clusters are different counts.
const assert = require('node:assert/strict');
(async () => {
const emoji="\u{1F600}";assert.equal(emoji.length,2);assert.equal([...emoji].length,1);
const family="\u{1F468}\u200d\u{1F469}\u200d\u{1F467}\u200d\u{1F466}";
assert.equal([...family].length,7);
assert.equal([...new Intl.Segmenter("en",{granularity:"grapheme"}).segment(family)].length,1);
console.log('PASS: unicode-length');
})().catch(error => { console.error(error); process.exitCode = 1; });
