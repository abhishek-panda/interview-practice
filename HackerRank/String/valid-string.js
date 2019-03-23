
// Sherlock and the Valid String

var str = "a"; 
var result =validateString(str);
console.log(result);

function validateString(str) {
    var valid = false;
    if(str && (str.length)) {
        var strHash = generateHashMap(str),
            hashArr = Object.values(strHash),
            count = hashArr[0],
            canRemove = true;
            for(var i = 0; i < hashArr.length; i++) {
                if(hashArr[i] === count) {
                    valid = true;
                } else{
                    if(hashArr[i] > count) {
                        valid = ((hashArr[i] === count + 1)  && canRemove);
                    }
                    if(hashArr[i] < count) {
                        valid = ((hashArr[i] === 1) && canRemove);
                    }
                    canRemove = false;
                }
            }
    } else {
        valid = false;
    }

    return valid ? "YES" : "NO";
}



function generateHashMap(str) {
    var hash = {};
    for(var i = 0; i < str.length; i++) {
        let key = str[i];
        if(hash[key]) {
            hash[key] += 1;
        } else {
            hash[key] = 1;
        }
    }
    return hash;
}   


