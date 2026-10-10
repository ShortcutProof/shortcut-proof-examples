'use strict';
const user = {name: 'Ada', label() { return this.name; }};
const bound = user.label.bind(user);
user.name = 'Grace';
console.log(bound());
