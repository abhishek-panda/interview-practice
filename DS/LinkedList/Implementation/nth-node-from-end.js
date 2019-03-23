var SingleLinkedList = require('../SingleLinkedList');

SingleLinkedList.prototype.nthNodeFromEnd = function(nth) {
    var node = this.getRoot();
    var currentNode = node,
        fastForwardNode = node;

    while(fastForwardNode != null) {
        for(var i = 0; i < nth; i++){
            if(fastForwardNode) {
                fastForwardNode = fastForwardNode.next;
            } else {
                break;
            }
        }
        if(fastForwardNode) {
            currentNode = currentNode.next;
        }
    }
    return currentNode.data;
};

var sl = new SingleLinkedList([1, 2, 3, 4, 5, 6, 7]);
console.log(sl.nthNodeFromEnd(2));

