function insertionSort(arr) {
    for(var i = 1; i < arr.length; i++) {
        for(var j = i - 1; j >= 0; j--) {
            if(arr[j] > arr[j+1]) {
                var temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }
}

var myArr = [23, 87, 10, 3, 89, 2, 32 , 7, 23];
insertionSort(myArr);
console.log(myArr);

