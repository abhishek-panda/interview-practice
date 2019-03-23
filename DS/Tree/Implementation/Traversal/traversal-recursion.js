var BinaryTree = require('../../Binary Tree');


BinaryTree.prototype.preOrder = function () {
    /**
     * Pre-Order Traversal : root, left, right
     */
    var root = this.getRoot();
    return _preOrder(root);
    
    function _preOrder(node, result) {
        if(!result) result='';
        if(node) {
            result += (node.data + ' ');
            if(node.left)
                result = _preOrder(node.left, result);
            if(node.right)
                result = _preOrder(node.right, result);
        }
        return result;
    }
}

BinaryTree.prototype.inOrder = function() {
    
    /**
     * In-Order Traversal : left, root , right
     */
    var root = this.getRoot();
    return _inOrder(root);
    
    function _inOrder(node, result) {
        if(!result) result='';
        if(node) {
            if(node.left)
                result = _inOrder(node.left, result);
            result += (node.data + ' ');
            if(node.right)
                result = _inOrder(node.right, result);
        }
        return result;
    }

}

BinaryTree.prototype.postOrder = function () {
    /**
     * Post-Order Traversal : left, right, root
     */
    var root = this.getRoot();
    return _postOrder(root);
    
    function _postOrder(node, result) {
        if(!result) result='';
        if(node) {
            if(node.left)
                result = _postOrder(node.left, result);
            if(node.right)
                result = _postOrder(node.right, result);
            result += (node.data + ' ');
        }
        return result;
    }
}


BinaryTree.prototype.BFS =function () {
    var height =  this.getHeight(),
        root = this.getRoot(),
        result = '';

    for(var i = 0; i <= height; i++){
        result += _dfs(root, i);
    }
    return result;

    function _dfs(node , level){
        if(!node)
            return '';
        if(level == 0) {
            return node.data + ' ';
        }
        else {
            var result = '';
            result += _dfs(node.left, level -  1, result);
            result += _dfs(node.right, level -  1, result);
            return result;
        }
    }
}

var binaryTree = new BinaryTree([10, 7, 11]);
console.log(`Pre-Order: ${binaryTree.preOrder()}`);
console.log(`In-Order: ${binaryTree.inOrder()}`);
console.log(`Post-Order: ${binaryTree.postOrder()}`);
console.log(binaryTree.toString());
//console.log(binaryTree.getHeight());
console.log(binaryTree.BFS());

module.exports = BinaryTree; 