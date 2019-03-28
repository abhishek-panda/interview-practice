//TODO: Complete later
var BlueBird = (function(){

    var RESOLVED = 'RESOLVED';
    var REJECTED = 'REJECTED';
    var PENDING = 'PENDING';
    var successCallback;
    var errorCallback;
    var state, data;

    function resolve(response) {
        state =  RESOLVED;
        data = response;
        if(successCallback) successCallback(data);
    }

    function reject(error) {
        state =  REJECTED;
        data = error;
        if(errorCallback) errorCallback(data);
    }

    function MYPromise (executor) {
        state =  PENDING;
        executor(resolve, reject);
    }
    
    MYPromise.all = function() {
    
    }
    
    MYPromise.race = function () {
    
    }
    
    MYPromise.resolve = function () {
        console.log("Working");
    }
    
    MYPromise.reject = function () {
    
    }

    MYPromise.prototype.then = function(resolvedCb, rejectedCb) {
        if(state == PENDING) {
            successCallback = resolvedCb;
            errorCallback = rejectedCb;
        }
        if(state == RESOLVED) {
            resolvedCb(data);
        }
        if(state == REJECTED) {
            rejectedCb(data);
        }
    }
    return MYPromise;
})();


var p = new BlueBird(function (resolve, reject) {
    resolve("Sai Baba help me");
});
p.then(function(value){
    console.log("Resolved : " + value);
}, function(error) {
    console.log("Error : " + error);
})


