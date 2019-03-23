var BaseBinaryTree = require('./base');

function BinaryTree(nodesArr) {
    BaseBinaryTree.call(this);
    let nodes = nodesArr || [10,7,12,5,9,17,16,18,20];
    var insertFn = function (node) {
        this.insert(node);
    }.bind(this);
    nodes.forEach(insertFn);
}

BinaryTree.prototype = Object.create(BaseBinaryTree.prototype);
BinaryTree.prototype.constructor = BinaryTree;

module.exports = BinaryTree;