Array.prototype.getIterator = function () {
    var self = this;
    if(Object.prototype.toString.call(this) !== "[object Array]") {
        throw new Error("Not a array");
    }
    var count = 0;
    function next () {
        if(self.length > count) {
            var item = self[count];
            count++;
            return item;
        } else {
            return null;
        }
    }

    return {
        next: next
    }
}

var arr = [1,2,3];
var iterator = arr.getIterator();
console.log(iterator.next())