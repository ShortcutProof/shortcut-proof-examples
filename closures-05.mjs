function build() {
  const jobs = [];
  for (var i = 0; i < 3; i++) jobs.push(() => i);
  return jobs;
}
const readers = build();
console.log('called after loop:',
  JSON.stringify(readers.map(read => read())));
