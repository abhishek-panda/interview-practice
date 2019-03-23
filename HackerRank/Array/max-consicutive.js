var str = "1010101",
    occurence = 3;

console.log(getMaxConsecutive(str, occurence));

function getMaxConsecutive(str, occurence) {
    if(str.indexOf('0') > -1) {
        var maxConsecutiveLength = 0,
            maxConsecutiveOccurence = 0;
            pointer = 0,
            strCopy = str;
        while(strCopy) {
            
            var zeroPos = strCopy.indexOf('0');
            for(var i = 0; i < occurence; i++){
                strCopy = strCopy.replace('0', '1');
            }
            
            var consecutiveStr = strCopy.split('0')[0];

            if(maxConsecutiveLength <  consecutiveStr.length) {
                maxConsecutiveLength = consecutiveStr.length;
                maxConsecutiveOccurence = 1;
            }
            else if(maxConsecutiveLength == consecutiveStr.length) {
                maxConsecutiveOccurence += 1;
            }
            
            strCopy = strCopy.substr(zeroPos + 1);
        }
        return maxConsecutiveOccurence;
    } else {
        return 1;
    }
}


var a = [];
Object.prototype.toString(a);