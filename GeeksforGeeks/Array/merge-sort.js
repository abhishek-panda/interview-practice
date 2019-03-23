function mergeSort(arr, start, end) {
    if( start < end) {
        var mid = Math.floor((start + end)/2);
        mergeSort(arr, start, mid);
        mergeSort(arr, mid+1, end);
        merge(arr, start, mid, end);
    }

    function merge(arr, start, mid , end) {
        var A = [],
            B = [];
        for(var i = 0, j = start; j <= mid; j++,i++ ) {
            A[i] = arr[j];
        }
        for(var i = 0, j = mid + 1; j <= end; j++, i++) {
            B[i] = arr[j];
        }
        var i = 0,
            j = 0,
            k = 0,
            C = [];
        while(i < A.length && j < B.length) {
            if(A[i] < B[j]) C[k++] = A[i++];
            else C[k++] = B[j++];
        }
        while(i < A.length) C[k++] = A[i++]
        while(j < B.length) C[k++] = B[j++]
        for(var i = 0, j = start; i < C.length; i++, j++) {
            arr[j] = C[i];
        }
    }
}

var arr = [3, 9 , 1, 90 , 54, 7 , 0, 3, 10];
mergeSort(arr, 0 , arr.length - 1);
console.log(arr);
