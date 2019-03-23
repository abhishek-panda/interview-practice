var SingleLinkedList = require('../SingleLinkedList');

SingleLinkedList.prototype.getMid = function() {
    var node = this.getRoot();
    var currentNode = node,
        fastForwardNode = node;

    while(fastForwardNode != null) {
        for(var i = 0; i < 2; i++) {
            if(fastForwardNode) {
                fastForwardNode = fastForwardNode.next;
            }
        }
        if(fastForwardNode) {
            currentNode = currentNode.next;
        }
    }
    return currentNode.data;
}

var sl = new SingleLinkedList(['A', 'B', 'C', 'D', 'E']);
console.log(sl.getMid());