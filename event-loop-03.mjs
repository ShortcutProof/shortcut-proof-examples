async function demo() {
  console.log('before await');
  await Promise.resolve();
  console.log('after await');
}
const completion = demo();
console.log('outside');
await completion;
