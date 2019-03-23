function rabinKarp(str, pattern) {
    
    function generateHashCode(pattern) {
        var hashCode = 0;
        for(var i = 0; i < pattern.length; i++) {
            hashCode += pattern.charCodeAt(i) * (2 ** i);
        }
        return hashCode;
    }

    var patternHashCode = generateHashCode(pattern);
    var noOfIteration = str.length - pattern.length; 
    for(var i = 0; i <= noOfIteration; i++) {
        var newStr = '';
        for(var j = 0; j < pattern.length; j++) {
            newStr += str[i + j];
        }
        var strHashCode = generateHashCode(newStr);
        if(strHashCode === patternHashCode) {
            for(var k = 0; k < newStr.length; k++) {
                if(newStr.charAt(k) != pattern.charAt(k)) break;
            }
            if(k === pattern.length) console.log("Found at index : ", i);
        }
    }
}



var myStr = 'ABABDASAIABABCABABSAI',
    pattern = 'SAI';
rabinKarp(myStr, pattern);