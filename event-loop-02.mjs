console.log('start');
setTimeout(() => console.log('timer'), 0);
Promise.resolve().then(() => {
  console.log('outer');
  Promise.resolve().then(() => console.log('inner'));
});
console.log('end');
await new Promise(r => setTimeout(r, 20));
