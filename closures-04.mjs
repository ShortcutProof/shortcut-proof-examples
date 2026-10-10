function counter() {
  let value = 0;
  return () => ++value;
}
const a = counter(), b = counter();
console.log(a(), a(), b());
