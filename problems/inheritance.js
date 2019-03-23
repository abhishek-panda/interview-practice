function Man(name) {
    this.name = name;
}

Man.prototype.getName = function() {
    return this.name;
}

function Employee(id, name){
    this.id = id;
    Man.call(this,name);
}

Employee.prototype = Object.create(Man.prototype);
Employee.prototype.constructor = Employee;
Employee.prototype.getId = function() {
    return this.id;
}

var s1 = new Employee(09, "Sainath");
console.log(s1.getName());
console.log(s1.getId());