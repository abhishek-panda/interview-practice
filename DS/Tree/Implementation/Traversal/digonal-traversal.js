/**
 * Diagonal traversal of tree
 * 
 *          8
 *         / \
 *        3   13
 *       /   /  \
 *      1   11    19
 *         / \   /
 *        9   12 18
 * 
 * Diagonal Traversal of binary tree :
 * 8 13 14
 * 3 11 12 18
 * 1 9
 */

 var BinaryTree = require('../../Binary Tree');

 BinaryTree.prototype.traverseDiagonal = function () {

 }

 var bTree = new BinaryTree([8, 3, 13, 1, 11, 19, 9, 12, 18]);
 console.log(bTree.toString());