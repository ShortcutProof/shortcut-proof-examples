function build() {
  const jobs = [];
  var i;
  for (i = 0; i < 3; i++) jobs.push(() => i);
  return {jobs, finalValue: i};
}
const {jobs, finalValue} = build();
console.log('binding after loop:', finalValue);
console.log('readers:', JSON.stringify(jobs.map(f => f())));
