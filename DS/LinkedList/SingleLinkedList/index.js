var BaseSingleLinkedList = require('./base');


function SingleLinkedList(nodeArgs) {
    BaseSingleLinkedList.call(this);
    var nodes = nodeArgs || [10,7,12,5,9,17,16,18,20];
    var insertFn = (function (node) {
        this.insert(node);
    }).bind(this);
    nodes.forEach(insertFn);
}

SingleLinkedList.prototype = Object.create(BaseSingleLinkedList.prototype);
SingleLinkedList.prototype.constructor = SingleLinkedList;


module.exports = SingleLinkedList;