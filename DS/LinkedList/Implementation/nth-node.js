var SingleLinkedList = require('../SingleLinkedList');

SingleLinkedList.prototype.nthNode = function(num) {
    var node = this.getRoot();
    var pos = -1, 
        element = null;
    while(node != null) {
        pos++;
        if(pos == num) {
            element = node.data;
            break;
        }
        node = node.next;
    }
    return (element) ? element : "Not Found";
};


var sl = new SingleLinkedList(['A', 'B', 'D', 'F']);
console.log(sl.nthNode(2));