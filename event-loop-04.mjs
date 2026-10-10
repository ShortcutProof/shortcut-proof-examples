let count = 0;
setTimeout(() => console.log('timer sees', count), 0);
for (let i = 0; i < 10000; i++) count++;
console.log('sync done', count);
await new Promise(r => setTimeout(r, 20));
