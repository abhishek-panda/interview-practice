var LinkedList = require('../LinkedList/SingleLinkedList');
var BaseStack = (function(){

    function Stack() {
        this.data = null;
        this.last = null;
    }

    function push(data) {
        if(this.data) {
            this.data.insert(data);
        } else {
            this.data = new LinkedList([data]);
        }
    }

    function pop() {
        return this.data.removeAtLast();
    }

    function peek() {
        var node = this.data.getRoot();
        while(node.next) {
            node = node.next;
        }
        return node;
    }

    function isEmpty() {
        return !(this.data && this.data.getRoot());
    }

    function toString() {
        return JSON.stringify(this.data.getRoot());
    }

    Stack.prototype = {
        push: push,
        pop: pop,
        peek: peek,
        isEmpty: isEmpty,
        toString: toString
    };

    return Stack;

})();

module.exports = BaseStack;