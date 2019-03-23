/**
 * Find postorder traversal from inorder and preorder
 * 
 * 
 * Input:
 * Inorder traversal in[] = {4, 2, 5, 1, 3, 6}
 * Preorder traversal pre[] = {1, 2, 4, 5, 3, 6}
 *
 * Output:
 * Postorder traversal is {4, 5, 2, 6, 3, 1}
 * 
 * NOTE: You can't find inorder from preorder & postorder. Because you find the left and right subtree.
 * Hard to find root also.
 */


var inOrder = [4, 2, 5, 1, 3, 6],
    preOrder = [1, 2, 4, 5, 3, 6];


console.log(getPostOrder(inOrder, preOrder));

function getPostOrder(_in, _pre) {
    var result = '';
    if(_in.length){
        var root = _pre.shift();

        var rootIndex = _in.indexOf(root);
        var leftTree = _in.slice(0, rootIndex),
            rightTree= _in.slice(rootIndex+1);

        result += getPostOrder(leftTree, _pre);
        result += getPostOrder(rightTree, _pre);
        result += (root + ' ');
    }
    return result;
}