function debounce(fn, wait) {
    var cachedTimeOut;
    return function () {
        if(cachedTimeOut) clearTimeout(cachedTimeOut);
        var context = this;
        cachedTimeOut = setTimeout(function(args){
            fn.apply(context,args);
        }, wait, arguments);
    }
}
var name = "Sairam";

function Test(msg) {
    console.log(this.name + msg);
}


// Test("help");
// Test("asd");
// Test("asd");




var debouncedTest = debounce(Test, 2000);

var obj = {
    name: "Baba"
};

debouncedTest = debouncedTest.bind(obj);


debouncedTest("hello");
debouncedTest("baba help");
debouncedTest("mallik");
debouncedTest("mere sai");