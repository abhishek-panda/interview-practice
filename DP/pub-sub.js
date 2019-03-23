const PubSubHelper = (function() {
    var topic = {};
    
    function subscribe(channel, callback) {
        if(!topic[channel]) {
            topic[channel] = [callback];
        } else {
            topic[channel].push(callback);
        }
        return function () {
            topic[channel] = topic[channel].filter(function(value){
                return value != callback;
            });
        }
    }

    function publish(channel, data) {
        if(topic[channel]) {
            for(var i = 0; i < topic[channel].length; i++){
                topic[channel][i](data);
            }
        }
    }

    function getAllListeners(channel) {
        return topic[channel];
    }

    function removeAllListeners(channel) {
        delete topic[channel];
    }

    return {
        subscribe: subscribe,
        publish: publish,
        getAllListeners: getAllListeners,
        removeAllListeners: removeAllListeners
    };
})();

PubSubHelper.subscribe('c1', function (value){
    console.log("Geting value from c1-1 : " + value);
});

PubSubHelper.subscribe('c2', function (value){
    console.log("Geting value from c2 : " + value);
});

PubSubHelper.subscribe('c1', function (value){
    console.log("Geting value from c1-2 : " + value);
});


PubSubHelper.publish('c1', "Sairam");
PubSubHelper.getAllListeners('c1');