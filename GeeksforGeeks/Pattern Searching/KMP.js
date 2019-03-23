function KMP(str, pattern) {
    var i = 0;
    var j = 0;
    //Preprocess pattern
    var LPSArr = computeLPS(pattern);
    while(i < str.length) {
        if(str[i] == pattern[j]) {
            i++; j++;
        } else {
            if(j != 0) {
                j = LPSArr[j - 1];
            } else {
                i++;
            }
        }

        if(j == pattern.length) {
            console.log("Pattern found at " + (i - j));
        }
    }


    function computeLPS(pattern) {
        var LPS = [];
        LPS[0] = 0;
        var len = 0;
        var i = 1;
        while(i < pattern.length) {
            if(pattern[i] == pattern[len]) {
                LPS[i++] = ++len;
            } else {
                if(len != 0) {
                    len = LPS[len - 1]
                } else {
                    LPS[i++] = 0;
                }
            }
        }
        return LPS;
    }
}


var myStr = 'ABABDASAIABABCABABSAI',
    pattern = 'SAI';
KMP(myStr, pattern);
