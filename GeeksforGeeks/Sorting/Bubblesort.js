function bubbleSort(arr) {
    for(var k = 1; k < arr.length - 1; k++){
        var needSwap = false;
        for(var i = 0; i < arr.length - 1; i++) {
            if(arr[i] > arr[i+1]) {
                var temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                needSwap = true; 
            }
        }
        if(!needSwap) break;
    }
}

function recursiveBubbleSort(arr, n) {

    while( n == 1) return;

    for(var i = 0; i < n - 1; i++) {
        if(arr[i] > arr[i+1]) {
            var temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp;
        }
    }
    recursiveBubbleSort(arr, n - 1);
}


var myArr = [23, 87, 10, 3, 89, 2, 32 , 7, 23];

//bubbleSort(myArr);
recursiveBubbleSort(myArr, myArr.length);
console.log(myArr);