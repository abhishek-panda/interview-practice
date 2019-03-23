function getMaxValue(arr) {
    var maxValue = 0;
    maxValue = calculateSum(arr);
    
    //Rotate the array and check max value
    for(var j = 0 ; j < arr.length - 1; j++) {
        rotate(arr);
        var newSum = calculateSum(arr);
        if(maxValue < newSum) {
            maxValue = newSum;
        }
    }

    console.log("The maxValue is : " + maxValue);

    function calculateSum(arr) {
        var count = 0;
        for(var i = 0; i < arr.length; i++) {
            count += i * arr[i];
        }
        return count;
    }

    function rotate(arr) {
        var arrLen = arr.length;
        var temp = arr[arrLen - 1];
        for(var i = arrLen - 1; i > 0; i--) {
            arr[i] = arr[i - 1];
        }
        arr[0] = temp;
        return arr;
    }
}

var myArr = [10, 1, 2 , 3];
console.log(getMaxValue(myArr));