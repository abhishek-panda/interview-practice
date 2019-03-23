var SingleLinkedList = require('../SingleLinkedList');

SingleLinkedList.prototype.makeLoop = function (pos) {
    var node = this.getRoot();
    var currentPos = 0;
    var current = node;
    var jointPoint = node;

    while(current != null && current.next != null) {
        current = current.next;
        currentPos++;
        if(currentPos === pos){
            jointPoint = current;
        }
    }
    current.next = jointPoint;
};

SingleLinkedList.prototype.detectLoop = function () {
    var node = this.getRoot();
    var currentNode = node;
    var fastForwardedNode = node;
    var loopFound = false;

    while(fastForwardedNode != null) {
        // If no loop
        fastForwardedNode = fastForwardedNode.next && fastForwardedNode.next.next;
        if(fastForwardedNode){
            currentNode = currentNode.next;
        }

        //if loop
        if(fastForwardedNode === currentNode) {
            loopFound = true;
            break;
        }
    }
    return loopFound;
}


var sl = new SingleLinkedList([1, 2, 3, 4]);
sl.makeLoop(1);
console.log(sl.detectLoop());