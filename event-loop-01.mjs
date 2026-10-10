const current = [];
setTimeout(() => {}, 0);
current.push('register timer');
Promise.resolve().then(() => {});
current.push('register reaction');
current.push('end of current code');
console.log(current.join(' → '));
