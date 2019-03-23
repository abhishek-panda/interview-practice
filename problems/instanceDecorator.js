/*
* @description: Decorator function to get all instances of a class
* @author: Abhishek Panda
*/
var instanceDecorator = function (fn) {
	var instances = [],
		count = 0;

	function decoratedFn() {
    Object.defineProperty(this, 'instanceNo', {
      value : ++count,
      writable : false
    });
		fn.apply(this,arguments);
		instances.push(this);
	}

	decoratedFn.prototype = Object.create(fn.prototype);
	decoratedFn.prototype.constructor = decoratedFn;
	decoratedFn.getAllInstance = function () {
		return instances;
	}
	decoratedFn.prototype.instanceSeq = function () {
		return this.instanceNo;
	}
	return decoratedFn;
}


//Usage




var Pencil = function (name) {
  this.name = name;
};

Pencil.prototype.getName = function () {
	console.log(this.name);
}

var decoratedPencil = instanceDecorator(Pencil);
var camel = new decoratedPencil('camel');
var as = new decoratedPencil('natraj');
var camel