var BaseStack = require('./base');

function Stack() {
    BaseStack.call(this);
}

Stack.prototype = Object.create(BaseStack.prototype);
Stack.prototype.constructor = Stack;


module.exports = Stack;