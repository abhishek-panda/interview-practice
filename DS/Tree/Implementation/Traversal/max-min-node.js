/**
 * Find the max and min node in binary tree
 */

var BinaryTree = require('../../Binary Tree');

BinaryTree.prototype.getMaxMinNode = function () {
    var maxNode,
        minNode,
        root = this.getRoot();
    _traverse(root);
    return { maxNode, minNode };
    //preorder
    function _traverse(node) {
        if(node) {
            if(!maxNode && !minNode)
                maxNode = minNode = node.data;
            if(maxNode < node.data)
                maxNode = node.data;
            if(minNode > node.data)
                minNode = node.data;
            _traverse(node.left);
            _traverse(node.right);
        }
    }
    
};

var bTree = new BinaryTree();
console.log(bTree.getMaxMinNode());