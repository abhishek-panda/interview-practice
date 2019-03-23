var BaseLinkedList = (function() {

    function _Node(data) {
        this.data = data;
        this.next = null;
    }

    function insert(data) {
        if(this.root === null) {
            this.root = new _Node(data);
        } else {
            var node = this.root;
            while(node.next) {
                node = node.next;
            }
            node.next = new _Node(data); 
        }
    }

    function remove(data) {
        var node = this.root,
            prev = null;
        while(node) {
            if(node.data === data) {
                if(prev) {
                    prev.next = node.next;
                } else {
                    this.root = node.next;
                }
                break;
            }
            prev = node;
            node = node.next;
        }
    }

    function removeAtFirst() {
        var node = this.root;
        if(node) {
            this.root = node.next;
            node.next = null;
            return node;
        }
        return null;
    }

    function removeAtLast() {
        var node = this.root,
            prev = null;
        while(node && node.next) {
            prev = node;
            node = node.next;
        }
        if(prev) {
            prev.next = null;
        } else if(prev === null && node){
            this.root = null;
        }
        return node;
    }

    function search(data) {
        var node = this.root,
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
        var node = this.root;
        var prev = null;
        while(node) {
            if(node.data === element) {
                var newNode = new _Node(data);
                if(prev) {
                    newNode.next = node;
                    prev.next = newNode;   
                } else {
                    newNode.next = node;
                    this.root = newNode;
                }
                break;
            }
            prev = node;
            node = node.next;
        }
    }

    function unshift(data) {
        var node = this.root;
        var newNode = new _Node(data);
        if(node) {
            newNode.next = node;
            this.root = newNode;
        } else {
            this.root = newNode;
        }
    }

    function insertAfter(data, element) {
        var node = this.root;
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
        var node = this.root,
            size = 0;
        while(node){
            size++;
            node = node.next;
        }
        return size;
    }

    function getRoot() { return this.root; }

    function toString() { return JSON.stringify(this.root); }

    function LinkedList() {
        this.root = null;
    }

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