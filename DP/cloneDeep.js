function cloneDeep(data) {
    if(typeof data === 'object') {
        var isArray = Array.isArray(data);
        var cloned = isArray ? [] : {};
        if(isArray) {
            for(var i = 0 ; i < data.length; i++) {
                var item = cloneDeep(data[i]);
                cloned.push(item);
            }
        } else {
            Object.keys(data).forEach(function(key){
                cloned[key] = cloneDeep(data[key]);
            });
        }
        return cloned;
    } else {
        return data;
    }
}