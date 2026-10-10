'use strict';
const user = {name: 'Ada', label() { return this.name; }};
const detached = user.label;
console.log(detached.call(user));
console.log(detached.call({name: 'Grace'}));
