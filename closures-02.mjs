function build() {
  const jobs = [];
  for (let i = 0; i < 3; i++) jobs.push(() => i);
  return jobs;
}
console.log(JSON.stringify(build().map(job => job())));
