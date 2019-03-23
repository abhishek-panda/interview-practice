/**
 * @author Abhishek Panda
 * @deprecated This method has been deprecated
 */
var SingleLinkedList = (function (){
    
    var root = null;
    var size = 0;

    function _Node(data) {
        this.data = data || null;
        this.next = null;
    }

    function _insert(node, data) {
        if(node == null) {
            size++;
            node = new _Node(data);
            return node;
        } else {
            node.next = _insert(node.next, data);
        }
        return node;
    }

    function _remove(node, data, prev) {
        if(node != null) {
            if(node.data === data) {
                size--;
                if(prev) {
                    prev.next = node.next;
                    node.next = null;
                    delete node;
                    return prev;
                } else {
                    node = node.next;
                    return node;
                }
            } else {
                _remove(node.next, data, node);
                return node;
            }
        }
        return "Not Found";
    }

    function _search(node, data) {
        var pos = -1,
            foundAt = pos;
        while(node != null) { 
            pos++;
            if(node.data === data) {
                foundAt = pos;
                break;
            } else{
                node = node.next;
            }
       }
       return foundAt;
    }

    function _insertBefore(currNode, datatoInsert, dataToFound) {
        //NOTE: Using while not returning anything
        var prev = null;
        while(currNode != null) {
            if(currNode.data === dataToFound) {
                var newNode = _insert(null, datatoInsert);
                if(prev) {
                    newNode.next = currNode;
                    prev.next= newNode;
                } else {
                    newNode.next = currNode;
                    root = newNode;
                }                
                break;
            }
            prev = currNode;
            currNode = currNode.next;
        }
    }

    function _insertAfter(currNode, datatoInsert, dataToFound) {
        //NOTE: Using recursion
        if(currNode != null) {
            if(currNode.data === dataToFound) {
                var newNode = _insert(null, datatoInsert);
                size++;
                newNode.next = currNode.next;
                currNode.next = newNode;
                return currNode;
            } else {
                _insertAfter(currNode.next, datatoInsert, dataToFound);
                return currNode;
            }
        } else {
            console.log("First insert some data");
            return currNode;
        }

    }

    function getRoot() { return root; }

    function insert(data) {
        root = _insert(root, data);
    }

    function remove(data) {
        root = _remove(root, data);
    }

    function insertBefore(data, element) {
        _insertBefore(root, data, element);
    }

    function insertAfter(data, element) {
        root = _insertAfter(root, data, element);
    }

    function search(data) {
        return _search(root, data);
    }

    function getSize() { return size; }

    function toString() {
        return JSON.stringify(root);
    }

    function List() {};

    List.prototype = {
        getRoot: getRoot,
        insert: insert,
        remove: remove,
        getSize: getSize,
        search: search,
        insertBefore: insertBefore,
        insertAfter: insertAfter,
        toString: toString
    };

    return List;
})();

module.exports = SingleLinkedList;