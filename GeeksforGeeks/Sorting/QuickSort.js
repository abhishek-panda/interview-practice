function QuickSort(arr, start, end) {
    if(start < end) {
        var pIndex = getPartitionIndex(arr, start, end);
        QuickSort(arr, start, pIndex - 1);
        QuickSort(arr, pIndex + 1, end);
    }

    function getPartitionIndex(arr, start, end) {
        var pivot = arr[end];
        var pIndex = start;
        for(var i = start; i < end; i++) {
            if(pivot >= arr[i] ) { 
                swap(arr, i, pIndex);
                pIndex++;
            }
        }
        swap(arr, end, pIndex);
        return pIndex;
    }

    function swap(store, to, from) {
        var temp = store[to];
        store[to] = store[from];
        store[from] = temp;
    }

}

var arr = [23, 87, 10, 3, 89, 2, 32 , 7, 23];
QuickSort(arr, 0, arr.length - 1);
console.log(arr);