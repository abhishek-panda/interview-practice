var UnDirectedGraph = require('../UnDirectedGraph');

var udg = new UnDirectedGraph();

udg.addVertex('A');
udg.addVertex('B');
udg.addVertex('C');
udg.addVertex('D');
udg.addEdge('A', 'A');
udg.addEdge('A', 'B');
udg.addEdge('A', 'C');
udg.addEdge('A', 'D');
udg.addEdge('B', 'C');
udg.addEdge('B', 'D');
udg.addEdge('C', 'D');
console.log(udg.toString());