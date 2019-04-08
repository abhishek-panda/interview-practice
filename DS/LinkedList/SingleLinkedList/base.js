var BaseLinkedList = (function() {
    'use strict'
    var root = null;

    function _Node(data) {
        this.data = data;
        this.next = null;
    }

    function insert(data) {
        if(root === null) {
            root = new _Node(data);
        } else {
            var node = root;
            while(node.next) {
                node = node.next;
            }
            node.next = new _Node(data); 
        }
    }

    function remove(data) {
        var node = root,
            prev = null;
        while(node) {
            if(node.data === data) {
                if(prev) {
                    prev.next = node.next;
                } else {
                    root = node.next;
                }
                break;
            }
            prev = node;
            node = node.next;
        }
    }

    function removeAtFirst() {
        var node = root;
        if(node) {
            root = node.next;
            node.next = null;
            return node;
        }
        return null;
    }

    function removeAtLast() {
        var node = root,
            prev = null;
        while(node && node.next) {
            prev = node;
            node = node.next;
        }
        if(prev) {
            prev.next = null;
        } else if(prev === null && node) {
            root = null;
        }
        return node;
    }

    function search(data) {
        var node = root,
            foundAt = -1,
            position = -1;
        while(node) {
            position++;
            if(node.data === data) {
                foundAt = position;
                break;
            }
            node = node.next;
        }
        return foundAt;
    }

    function insertBefore(data, element) {
        var node = root;
        var prev = null;
        while(node) {
            if(node.data === element) {
                var newNode = new _Node(data);
                if(prev) {
                    newNode.next = node;
                    prev.next = newNode;   
                } else {
                    newNode.next = node;
                    root = newNode;
                }
                break;
            }
            prev = node;
            node = node.next;
        }
    }

    function insertAfter(data, element) {
        var node = root;
        while(node) {
            if(node.data === element) {
                var newNode = new _Node(data);
                newNode.next = node.next;
                node.next = newNode;
                break;
            }
            node = node.next;
        }
    }

    function getSize() {
        var node = root,
            size = 0;
        while(node){
            size++;
            node = node.next;
        }
        return size;
    }

    function getRoot() { return root; }

    function toString() { return JSON.stringify(root); }

    function LinkedList() {}

    LinkedList.prototype = {
        getRoot: getRoot,
        insert: insert,
        remove: remove,
        removeAtFirst: removeAtFirst,
        removeAtLast: removeAtLast,
        search: search,
        insertBefore: insertBefore,
        insertAfter: insertAfter,
        getSize: getSize,
        toString: toString,
    }

    return LinkedList;

})();

module.exports = BaseLinkedList;