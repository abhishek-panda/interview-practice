const BinaryTree = (function () {
    var root = null;

    function _Node(data, left, right) {
        this.data = data || null;
        this.left = left || null;
        this.right = right || null;
    }

    function _height(node, height) {
        if(!node) {
            return -1;
        }
        else{
            var leftTreeHeight = _height(node.left),
                rightTreeHeight  = _height(node.right);
            
            if(leftTreeHeight > rightTreeHeight)
                return leftTreeHeight + 1;
            else
                return rightTreeHeight+ 1;
        }
    }

    function _insertion(node, data) {
        if(!node) {
            node = new _Node(data);
            return node;
        } 
        if(data <= node.data){
            node.left = _insertion(node.left, data)
        } else {
            node.right = _insertion(node.right, data)
        }
        return node;
    }

    function Tree () { return this;}

    
    Tree.prototype.insert = function (data) {
        root = _insertion(root, data);    
    };

    Tree.prototype.getRoot = function() {
        return root;
    };
    
    /**
     * Height of the node is maxHeight(left , right)
     * Height of a tree == Height of a root
     * Height of tree is defined as longest path from root to leaf node.
     * Height of empty tree is -1
     * Height of tree with root only is 0
     */

    Tree.prototype.getHeight = function () {
        return _height(root);
    };

    /**
     * Overriding default toString of object
     * toString can be used to check data type
     * Object.prototype.toString.call(new Date) == [object Date]
     */
    Tree.prototype.toString = function () {
        return JSON.stringify(root);
    }

    return Tree;
})();

module.exports = BinaryTree;