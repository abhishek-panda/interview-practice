function Spices(species) {
	this.type = species;
}

function Animal(habitant) {
	this.habitant = habitant;
}
 
function Human(speak){
	this.speak = speak;
	Spices.call("Homosapiens");
	Animal.call("Land");
}

Human.prototype = Object.create(Animal.prototype);
Object.assign(Human.prototype, Spices.prototype);

var h1 = new Human(true);
console.log(h1);
//h1.runnable(); // Throws TypeError

Animal.prototype.runnable = function () {
  console.log("Runnable");
}

console.log(h1);

h1.runnable();

Spices.prototype.origin = function (){
  console.log("Earth");
}

h1.origin(); // Throws TypeError bcz Object.assign only copies the content and it doesn't
            // inhertis the prototype chain.


