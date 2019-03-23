/**
 * Problem by Saru
 * Problem Statement: Find the nodes that are visible from viewed from top of the tree
 * 
 *          Top View
 *            Flux 
 * |||||||||||||||||||||||||||||||||
 * |||||||||||||||||||||||||||||||||
 * vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
 *                                      Height
 *             (99)                     0
 *             /  \
 *          (80)  (100)                 1
 *          /  \    
 *       (40)   90                      2
 *             /  \
 *           86    97                   3
 *                /  \
 *              96    (98)              4
 *             /
 *           95                         5
 *          /
 *        94                            6
 *        /
 *     (93)                             7
 * 
 * It depends on the width of the tree not, not on the height of the tree.
 * So will go with BFS not DFS.
 */



var BinaryTree = require('../../Binary Tree');

BinaryTree.prototype.viewFromTop = function() {
    var root = this.getRoot(),
        height = this.getHeight(),
        maxLeft = 0,
        maxRight = 0,
        init = true;
    
    for(var i = 0; i <= height; i++) {
        _traverse(root, i, 0);
    }
    console.log("Max width of tree is :"+  parseInt(maxRight -(maxLeft)));
    
    function _traverse(node, level, flag) {
        if(!node)
            return;
        if(level == 0) {
            if(init) {
                init = false;
                console.log(node.data);
            }
            if(flag < maxLeft){
                maxLeft = flag;
                console.log(node.data);
            }
            if(flag > maxRight) {
                maxRight = flag;
                console.log(node.data);
            }

        } else {
            _traverse(node.left, level - 1, flag - 1);
            _traverse(node.right, level- 1, flag + 1);        
        }
    }
}

binaryTree = new BinaryTree([99, 80, 100, 40, 90, 86, 97 , 96, 98, 95, 94, 93]);
binaryTree.viewFromTop();
