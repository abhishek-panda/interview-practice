var Dog = (function(){
    var instance = [];
    function Dog (name) {
        this.name = name;
        instance.push(this);
    }

    Dog.prototype.getInstance = function () {
        return instance;
    }
    return Dog;
})();