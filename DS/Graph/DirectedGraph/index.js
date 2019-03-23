var BaseUnDirectedGraph = require('./base');

function DirectedGraph() {
    BaseUnDirectedGraph.call(this);
}

DirectedGraph.prototype = Object.create(BaseUnDirectedGraph.prototype);
DirectedGraph.prototype.constructor = DirectedGraph;

DirectedGraph.prototype.addEdge = function(firstVertex, lastVertex) {

    if(!firstVertex || !lastVertex) {
        throw new Error("Vertex doesn't exists");
    }
    firstVertex = String(firstVertex);
    lastVertex = String(lastVertex);
    if((data === null) ||
        !data.hasOwnProperty(firstVertex) ||
        !data.hasOwnProperty(lastVertex)
    ) {
        throw new Error("Vertex not found");
    } else {
        _addEdges(firstVertex, lastVertex);
        _addEdges(lastVertex, firstVertex);
        // need to add edges
        // edges will be linkedList
    }

    function _addEdges(from, to) {
        if(data[from]){
            var node =  data[from];
            while(node) {
                if(node.data === to) {
                    break;
                }
                if(node.next === null) {
                    node.next = getLinkedListRoot(to);
                    break;
                }
                node = node.next;
            }
        } else {
            data[from] = getLinkedListRoot(to);
        }
    }

}

module.exports = DirectedGraph;