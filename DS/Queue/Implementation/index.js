var Queue = require('../index');

var eq = new Queue();
console.log(eq.isEmpty());
eq.enqueue(5);
eq.enqueue(7);
eq.dequeue();
eq.enqueue(10);
console.log(eq.getFront());
console.log(eq.getEnd());
console.log(eq.toString());
eq.dequeue();
eq.dequeue();
eq.dequeue();
console.log(eq.toString());
console.log(eq.isEmpty());