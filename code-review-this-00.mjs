'use strict';
const user = {name: 'Ada', label() { return this.name; }};
console.log(user.label());
const detached = user.label;
try { console.log(detached()); }
catch (e) { console.log(e.name); }
