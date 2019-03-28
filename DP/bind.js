if(!Function.prototype.bind2) {

    Function.prototype.bind2 = function (oThis) {
        var fnThis = this;
        if(typeof fnThis !== 'function') {
            throw new Error("Not a function");
        } 
        var args = Array.prototype.slice.call(arguments, 1);
        return function() {
            Array.prototype.push.apply(args, arguments);
            return fnThis.apply(oThis, args);
        }
    }
}



function Test() {

}

Test.bind(this)