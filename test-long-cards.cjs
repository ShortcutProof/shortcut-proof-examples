const assert = require('node:assert/strict');
const {spawnSync} = require('node:child_process');
const path = require('node:path');
const expected = require('./long-cards-expected.json');
for (const [file,output] of Object.entries(expected)) {
 const run=spawnSync(process.execPath,[path.join(__dirname,file)],{encoding:'utf8',timeout:5000});
 assert.equal(run.status,0,file+' must exit successfully');
 assert.equal(run.stdout.trim(),output,file+' output must match the video proof');
 console.log('PASS: '+file);
}
