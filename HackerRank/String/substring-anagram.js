// Sherlock and Anagrams

var str = "saibaba saimallik";

console.log(sherlockAndAnagrams(str));

function sherlockAndAnagrams(str){
    var count = 0;
    if(_checkEligibility(str)) {
        var substringsObj = _generateAllPossibleSubstring(str);
        for (var lengthKey in substringsObj ) {
           var substrArr = substringsObj[lengthKey];
           for(var i = 0; i <  substrArr.length - 1; i++) {
               for (var j = i+1; j <  substrArr.length; j++){
                    count += (_anagram(substrArr[i], substrArr[j])) ? 1 : 0;
               }
           }
        }
    } 
    return count;
}

function _checkEligibility(str) {
    var eligibleFurther = false;
    if(str && str.length) {
        var hashStore = _generateHashMap(str);
        for(var key in hashStore) {
            if(hashStore[key] > 1) {
                eligibleFurther = true;
                break;
            }
        }
    }
    return eligibleFurther;
}


function _generateHashMap(str) {
    var hash = {};
    if(!str) return hash;
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

function _generateAllPossibleSubstring(str) {
    var substrings = {};
    if(!str) return substrings;
    for(var i = 1; i < str.length; i++) {
        var substrLength = i;
        var startPos = 0,
            endPos = startPos + (substrLength - 1);
        substrings[substrLength] = [];
        while(endPos < str.length) {
            substrings[substrLength].push(str.substr(startPos, substrLength));
            startPos += 1;
            endPos = startPos + (substrLength - 1);
        }
    }
    return substrings;
}

function _anagram(str1, str2) {
    if(!str1 || !str2) {
        throw new Error("Not valid string");
    } else {
        if(str1.length != str2.length) {
            return false;
        }
        else {
            var hashObj1 = _generateHashMap(str1),
                hashObj2 = _generateHashMap(str2);
            for(var key in hashObj1) {
                if(hashObj1[key] !== hashObj2[key])
                    return false;
            }
            return true;
        }
    }
}