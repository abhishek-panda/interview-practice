/**
 * Deepest node in binary tree
 */

var BinaryTree = require('../../Binary Tree');
BinaryTree.prototype.getDeepestNode = function () {
    var root = this.getRoot();
    return _height(root);

    function _height(node) {
        if(!node)
            return {
                'height': -1,
                'node': null
            };
        
        var leftTreeHeight = _height(node.left),
            rightTreeHeight = _height(node.right);
        
        if(leftTreeHeight.height > rightTreeHeight.height) {
            if(leftTreeHeight.node === null) 
                leftTreeHeight.node = node.data;
            leftTreeHeight.height += 1;
            return leftTreeHeight
        }
        else {
            if(rightTreeHeight.node === null) 
                rightTreeHeight.node = node.data;
            rightTreeHeight.height += 1;
            return rightTreeHeight;
        }
    }
}

var bTree = new BinaryTree([10, 7, 11, 13, 20]);
console.log(bTree.getDeepestNode());