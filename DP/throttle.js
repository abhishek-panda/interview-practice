function throttle(fn , wait) {
    var ignore = false;
    return function () {
        if(!ignore) {
            fn.apply(this, arguments);
            ignore = true
            setTimeout(function(){
                ignore = false;
            }, wait);
        }
    }
}

var name = "Sairam";

function Test(msg) {
    console.log(this.name + msg);
}

var throttledTest = throttle(Test, 10);
throttledTest("help");
throttledTest("malik");
throttledTest("save me");
