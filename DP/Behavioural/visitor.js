/**
 * Visitor design pattern
 */

function Shape(x, y) { 
    this.x = x;
    this.y = y;
}
Shape.prototype.accept = function (visitor) {
    visitor.visit(this);
}


function Circle(x, y , radius) {
    Shape.call(this, x, y);
    this.radius = radius;
}
Circle.prototype = Object.assign(Shape.prototype);
Circle.prototype.constructor = Circle;


function Rectrangle(x, y , width, height) {
    Shape.call(this, x, y);
    this.width = width;
    this.height = height;
}
Rectrangle.prototype = Object.assign(Shape.prototype);
Rectrangle.prototype.constructor = Rectrangle;



function Visitor () {}
Visitor.prototype.visit = function(visitor) {
    console.log(visitor);
}
Visitor.prototype.export = function(shape) {
    shape.accept(this);
}



var circle = new Circle(0, 0, 12);
var rectrangle = new Rectrangle(0, 0, 10, 12);
var xmlExporter = new Visitor();
xmlExporter.export(circle);
xmlExporter.export(rectrangle);