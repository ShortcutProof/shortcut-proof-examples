'use strict';
const user = {name: 'Ada', label() { return this.name; }};
const bound = user.label.bind(user);
console.log(bound());
console.log(bound === user.label.bind(user));
