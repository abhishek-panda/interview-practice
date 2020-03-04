var BaseHashMap = (function () {
    var defaultSize = 16;
    var keyNotFoundException = 'Key Not Found';

    function _Item (key, value, hash) {
        this.key = key;
        this.value = value;
        this.hash = hash;
        this.next = null;
    }

    function BaseHM (size) {
        defaultSize = size ? size : defaultSize;
        this.buckets = new Array(defaultSize);
    }

    BaseHM.prototype.put = function(key , value) {
        var hash =  makeHash(key);
        var index = hash % defaultSize;
        var new_item = new _Item(key, value, hash);
        if(this.buckets[index]) {
            var item = this.buckets[index];
            while(item.next) {
                item = item.next;
            }
            item.next = new_item;
        } else {
            this.buckets[index] = new_item;
        }
    };

    /**
     * @returns value for the given key, if not found throws "Key Not Found" exception
     */
    BaseHM.prototype.get = function(key) {
        var hash =  makeHash(key);
        var index = hash % defaultSize;
        if(this.buckets[index]) {
            var item = this.buckets[index];
            while(item) {
                if(item.hash === hash && item.key === key) {
                    return item.value;
                }
                item = item.next;
            }
            if(item === null) {
                throw keyNotFoundException;
            }
        } else {
            throw keyNotFoundException;
        }
    };

    BaseHM.prototype.log = function () {
        console.log(this.buckets);
    };

    return BaseHM;

    /**
     * Hashing function
     */

    function makeHash(key) {
        var keyType = _getKeyType(key);
        switch(keyType) {
            case 'Object':
            case 'Array':
            case 'Function':
                if(!key.__hashCode) {
                    Object.defineProperty(key, '__hashCode', {
                        value: new Date().getTime(),
                        writable: false,
                        configurable: false
                    });
                }
                key = key.__hashCode;
                break;
            case 'Undefined':
            case 'Null':
                key = keyType;
                break;
        }
        var hash = 0;
        if(!key) key = '\0'; // null character
        for(var i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash;
    }

    function _getKeyType(key) {
        return Object.prototype.toString.call(key).replace(/[\[\]]/g,'').split(' ')[1];
    }

})();

module.exports = BaseHashMap;