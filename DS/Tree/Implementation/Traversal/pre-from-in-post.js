/**
 * Find preorder traversal from inorder and postorder
 * 
 * 
 * Input:
 * Inorder traversal in[] = {4, 2, 5, 1, 3, 6}
 * Postorder traversal is {4, 5, 2, 6, 3, 1}
 * 
 *
 * Output:
 * Preorder traversal pre[] = {1, 2, 4, 5, 3, 6}
 * 
 * 
 * 
 */


var inOrder = [4, 2, 5, 1, 3, 6],
    postOrder = [4, 5, 2, 6, 3, 1];


console.log(getPreOrder(inOrder, postOrder));

function getPreOrder(_in, _post) {
    var result = '';
    if(_in.length){
        var root = _post.pop(),
        rootIndex = _in.indexOf(root);
    
        var leftSubTree = _in.slice(0, rootIndex),
            rightSubTree = _in.slice(rootIndex + 1);
        
        result = getPreOrder(rightSubTree, _post) + result;
        result = getPreOrder(leftSubTree, _post) + result;
        result = root + ' ' + result; 
    }
    return result;
}
