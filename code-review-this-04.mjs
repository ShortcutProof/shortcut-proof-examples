'use strict';
const user = {name: 'Ada', label() { return this.name; }};
const callback = () => user.label();
console.log(callback());
