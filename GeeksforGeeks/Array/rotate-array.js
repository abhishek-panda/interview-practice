function rotate(arr, by) {
    var arrLen = arr.length;
    for(var i = 0; i < by; i++) {
        var temp = arr[arrLen - 1];
        for(var j = arrLen - 1; j > 0; j--) {
            arr[j] = arr[j - 1];
        }
        arr[0] = temp;
    }
}

var myArr = [1, 2, 3, 4, 5];
rotate(myArr, 4);
console.log(myArr);