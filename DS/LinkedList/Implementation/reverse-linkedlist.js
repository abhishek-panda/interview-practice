var SingleLinkedList = require('../SingleLinkedList');

SingleLinkedList.prototype.reverse = function() {
    var node = this.getRoot();
    return _recurse(node);

    //Recurse the linkedlist

    function _recurse(node, result) {
        if(node.next == null) {
            return node.data;
        } else {
            var result = _recurse(node.next, result);
            result += ' '+ node.data;
        }
        return result;
    }
}

var sl = new SingleLinkedList(['A', 'B', 'C', 'E', 'F'])
console.log(sl.reverse());