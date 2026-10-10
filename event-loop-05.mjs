queueMicrotask(() => console.log('microtask'));
Promise.resolve().then(() => console.log('promise'));
console.log('sync');
await new Promise(r => setTimeout(r, 20));
