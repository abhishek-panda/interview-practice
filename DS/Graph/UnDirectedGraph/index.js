var BaseUnDirectedGraph = require('./base');

function UnDirectedGraph() {
    BaseUnDirectedGraph.call(this);
}

UnDirectedGraph.prototype = Object.create(BaseUnDirectedGraph.prototype);
UnDirectedGraph.prototype.constructor = UnDirectedGraph;

module.exports = UnDirectedGraph;