function countValley(str) {
    var count = 0;
    var currPos = 0;
    var valleyFound = false;
    for(var i = 0; i < str.length; i++) {
        if(str[i] == 'U') {
            currPos++;
        } else if( str[i] == 'D') {
            currPos--;
        }
        if(currPos <= -2 && valleyFound == false) {
            count++;
            valleyFound == true;
        }
        if(currPos == 0) {
            valleyFound = false;
        }
    }
    return count;
}

var str = 'UUDUUDDDDDUDUUUUDD';
console.log(countValley(str));