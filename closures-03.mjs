const reader = value => () => value;
function build() {
  const jobs = [];
  for (var i = 0; i < 3; i++) jobs.push(reader(i));
  return jobs;
}
console.log(JSON.stringify(build().map(job => job())));
