function luckyString(S) {
    var flag = "YES";
    var hash = generateHash(S);
    var arr = Object.values(hash);
    console.log(arr);
    for(var i = 0; i < arr.length-1; i++){
        if(flag == "YES") {
            if(arr[i] != arr[i+1]){
                flag = "NO";
            }
        }
    }
    return flag;

    function generateHash(str) {
        var hash = {};
        for(var i = 0; i < str.length; i++) {
            var key  =  str[i];
            hash[key] = (hash[key]) ? hash[key] + 1 : 1
        }
        return hash;
    }
}

console.log(luckyString('aabbcc'));