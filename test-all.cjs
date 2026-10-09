const fs=require('node:fs');const path=require('node:path');const {spawnSync}=require('node:child_process');
for(const name of fs.readdirSync(__dirname).filter(n=>n.endsWith('.cjs')&&n!=='test-all.cjs')){const r=spawnSync(process.execPath,[path.join(__dirname,name)],{stdio:'inherit'});if(r.status!==0)process.exit(r.status||1);}
