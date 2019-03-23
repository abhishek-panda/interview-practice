function mergeSort(arr, start, end) {
    if(start < end) {
        var mid = Math.floor((start + end)/2);
        mergeSort(arr, start, mid);
        mergeSort(arr, mid+1, end);
        merge(arr,start, mid, end);
    }

    function merge(arr, start, mid, end) {
        var A = [],
            B = [],
            C = [];
        for(var j = 0, i = start; i <= mid; i++, j++){
            A[j] = arr[i];
        }
        for(var j = 0, i = mid+1; i <= end; i++, j++) {
            B[j] = arr[i];
        }
        var i = 0,
            j = 0,
            k = 0;
        while(i < A.length && j < B.length) {
            if(A[i] < B[j]) {
                C[k++] = A[i++];
            } else {
                C[k++] = B[j++];
            }
        }
        while(i < A.length) {
            C[k++] = A[i++];
        }
        while(j < B.length) {
            C[k++] = B[j++];
        }
        for(var i = 0, j = start ; i < C.length; i++, j++) {
            arr[j] = C[i];
        }
    }
}

var myArr = [23, 87, 10, 3, 89, 2, 32 , 7, 23, 100, 2, 8, 56, 90, 12];
mergeSort(myArr, 0, myArr.length - 1);
console.log(myArr);
//console.log(myArr);
// 0 7
// 0 4
// 0 2
// 0 1