var TwoStack = (function() {
    var arr;
    var i = 0;
    var j;
    function TS (size) {
        arr = new Array(size);
        j = size - 1;
    }
    TS.prototype.push1 = function(data) {
        if(!arr[i]) arr[i++] = data;
    };
    TS.prototype.push2 = function(data) {
        if(!arr[j]) arr[j++] = data;
    };
    TS.prototype.pop1 = function() {
        if(arr[i - 1]) arr[--i] = undefined;
    };
    TS.prototype.pop2 = function() {
        if(arr[j - 1]) arr[--j] = undefined;
    }
    TS.prototype.show = function() {
        console.log(arr);
    }
    return TS;
})();

var ts = new TwoStack(23);
ts.push1(5);
ts.push1(6);
ts.push2(16);
ts.pop1();
ts.pop2();
ts.show();