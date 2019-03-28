//Task Queue
setTimeout(function(){
    console.log("Hello")
}, 0);

// Microtask Queue
var p = new Promise(function(resolve, reject) {
    resolve('Sairam');
});
p.then(function(data) {
    console.log("resolved : " + data);
}).then(function() {
    console.log("Another microtask")
});