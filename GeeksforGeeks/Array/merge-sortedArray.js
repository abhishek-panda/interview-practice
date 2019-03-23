function mergeSortedArr(A, B) {
    var C = [];
    var k = 0,
        i = 0,
        j = 0;
    while(i < A.length && j < B.length) {
        if(A[i] < B[j]) C[k++] = A[i++];
        else C[k++] = B[j++];
    }
    while(i < A.length) C[k++] = A[i++];
    while(j < B.length) C[k++] = B[i++];
    return C; 
}


var arr1 = [25, 39, 88, 90, 99, 101, 120, 122];
var arr2 = [2, 30 , 87, 95];
console.log(mergeSortedArr(arr1, arr2));