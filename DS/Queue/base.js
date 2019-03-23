var LinkedList = require('../LinkedList/SingleLinkedList');

var BaseQueue = (function() {

    function Queue() {
        this.data = null;
    }

    function enqueue(data) {
        if(this.data) {
            this.data.insert(data);
        } else {
            this.data = new LinkedList([data]);
        }
    }
    function dequeue () {
        if(this.data) {
            return this.data.removeAtFirst();
        }
        return "Queue is empty";
    }

    function toString() {
        return JSON.stringify(this.data.getRoot());
    }

    function getFront() {
        var node = JSON.parse(JSON.stringify(this.data.getRoot()));
        if(node) {
            node.next = null;
            return node;
        }
    }

    function getEnd() {
        var node = this.data.getRoot();
        while(node.next) {
            node = node.next;
        }
        return node;
    }

    function isEmpty() {
        return !(this.data && this.data.getRoot())
    }
    

    Queue.prototype = {
        enqueue: enqueue,
        dequeue: dequeue,
        getFront: getFront,
        getEnd: getEnd,
        isEmpty: isEmpty,
        toString: toString,
    };

    return Queue;

})();

module.exports = BaseQueue;