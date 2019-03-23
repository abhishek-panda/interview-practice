var SingleLinkedList = require("../../LinkedList/SingleLinkedList");

/**
 * @description
 * NOTE: This is basically a singleston class
 * How ? IIFE fn returning a constructor fn which has the scope of same local variable so every time it creates 
 * new instance it will have the same local variable but instance will be different. 
 * NOTE: Can be used to share data across different instances. 
 */

var BaseUnDirectedGraph = (function () {

    function addVertex(vertex){
        if((!vertex) || !(vertex = String(vertex).trim())) {
            throw new Error("Cannot add Invalid vertex");
        }
        this.data = (this.data === null) ? {} : this.data;
        if(this.data.hasOwnProperty(vertex)) {
            throw new Error("Vertex already exists");
        }
        this.data[vertex] = null;
    }

    function addEdge(firstVertex, lastVertex) {
        if(!firstVertex || !lastVertex) {
            throw new Error("Vertex doesn't exists");
        }
        firstVertex = String(firstVertex);
        lastVertex = String(lastVertex);
        if((this.data === null) ||
            !this.data.hasOwnProperty(firstVertex) ||
            !this.data.hasOwnProperty(lastVertex)
        ) {
            throw new Error("Vertex not found");
        } else {
            //NOTE: Adding linkedlist to add edges
            _addEdges.call(this,firstVertex, lastVertex);
            _addEdges.call(this,lastVertex, firstVertex);
        }
    }

    function _addEdges(from, to) {
        if(this.data[from]){
            if(this.data[from].search(to) === -1) {
                this.data[from].insert(to);
            }
        } else {
            this.data[from] =  new SingleLinkedList([to]);
        }
    }

    function toString() {
        return JSON.stringify(this.data);
    }

    function show() {
        return this.data;
    }

    function Graph() {
        this.data = null;
    }
    
    Graph.prototype = {
        addVertex: addVertex,
        addEdge: addEdge,
        toString: toString,
        show: show
    };

    return Graph;
})();

module.exports = BaseUnDirectedGraph;