var BaseQueue = require('./base');

function Queue() {
    BaseQueue.call(this);
}

Queue.prototype = Object.create(BaseQueue.prototype);
Queue.prototype.constructor = Queue;

module.exports = Queue;