'use strict';
function receiver() { return this; }
const user = {receiver};
console.log('method receiver:', user.receiver() === user);
const detached = user.receiver;
console.log('direct receiver:', detached() === undefined);
