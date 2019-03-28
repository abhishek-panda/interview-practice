function SelectionSort(arr) {
    for(var k = 0; k < arr.length - 1 ; k++){
        for(var i = k; i < arr.length; i++) {
            if(arr[k] > arr[i]) {
                var temp = arr[i];
                arr[i] = arr[k];
                arr[k] = temp;
            }
        }
    }
}

var myArr = [23, 87, 10, 3, 89, 2, 32 , 7, 23];
SelectionSort(myArr);
console.log(myArr)