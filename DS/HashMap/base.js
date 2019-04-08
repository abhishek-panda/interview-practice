var BaseHashMap = (function () {
    var defaultSize = 16;
    var buckets;

    function _Item (key, value, hash) {
        this.key = key;
        this.value = value;
        this.hash = hash;
        this.next = null;
    }

    function BaseHM (size) {
        defaultSize = size ? size : defaultSize;
        buckets = new Array(defaultSize);
    }

    BaseHM.prototype.put = function(key , value) {
        var hash =  makeHash(key);
        var index = hash % defaultSize;
        var new_item = new _Item(key, value, hash);
        if(buckets[index]) {
            var item = buckets[index];
            while(item.next) {
                item = item.next;
            }
            item.next = new_item;
        } else {
            buckets[index] = new_item;
        }
    };

    BaseHM.prototype.get = function(key) {
        var hash =  makeHash(key);
        var index = hash % defaultSize;
        if(buckets[index]) {
            var item = buckets[index];
            while(item) {
                if(item.hash === hash && item.key === key) {
                    return item.value;
                }
                item = item.next;
            }
            if(item === null) {
                throw new Error('No key available');
            }
        } else {
            throw new Error('No key available');
        }
    };

    BaseHM.prototype.log = function () {
        console.log(buckets);
    };

    return BaseHM;

    /**
     * Hashing function
     */

    function makeHash(key) {
        if(!key) key = 0; 
        var hash = 0;
        key = key + '';
        for(var i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash;
    }

})();

module.exports = BaseHashMap;