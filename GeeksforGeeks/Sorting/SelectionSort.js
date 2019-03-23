function SelectionSort(arr) {
    for(var k = 0; k < arr.length - 1 ; k++){
        var minVal = Number.MAX_VALUE, minPos = null;
        for(var i = k; i < arr.length; i++) {
            if(minVal > arr[i]) {
                minVal = arr[i];
                minPos = i;
            }
        }
        arr[minPos] = arr[k];
        arr[k] = minVal;
    }
}

var myArr = [23, 87, 10, 3, 89, 2, 32 , 7, 23];
SelectionSort(myArr);
console.log(myArr)