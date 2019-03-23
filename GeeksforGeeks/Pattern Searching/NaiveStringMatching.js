/**
 * @description Naive Algorithm for pattern matching
 */
function naiveSearch(str, pattern) {
    var strLen = str.length,
        patternLen = pattern.length;
    for(var i = 0; i <= strLen - patternLen; i++) {
        for(var j = 0; j < pattern.length; j++) {
            if(pattern[j] != str[i + j]) break;
        }
        if(j == pattern.length) {
            console.log("Found at index : " + i);
        }
    }

}


var myStr = 'ABABDASAIABABCABABSAI',
pattern = 'SAI';

naiveSearch(myStr, pattern);