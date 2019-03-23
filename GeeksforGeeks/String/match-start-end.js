//Find if a string starts and ends with another given strin

console.log(startAndEnd('geeksmanishgeeks', 'geeks'));

function startAndEnd(str, find) {
    if(!str || !find) throw new Error('Invalid parameters');
    
    var findLength = find.length,
        strLength = str.length;
    
    if(findLength > strLength) {
        throw new Error('Invalid argument');
    }
    else {
        var found = true;
        for(var i = 0; i < findLength; i++) {
            if(str[i] != find[i]) {
                found = false;
                break;
            }
        }
        if(found) {
            var endPointer = strLength - findLength;
            for (let i = 0; i < findLength; i++) {
                if(str[endPointer + i] != find[i]){
                    found = false;
                    break;
                }
            }
        }
        return found;
    }
}