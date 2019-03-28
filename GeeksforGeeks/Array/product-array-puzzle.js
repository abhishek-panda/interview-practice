/*
Given an array arr[] of n integers, construct a Product Array prod[] (of same size) such that 
prod[i] is equal to the product of all the elements of arr[] except arr[i]. 
Solve it without division operator and in O(n).

Example :
arr[] = {10, 3, 5, 6, 2}
prod[] = {180, 600, 360, 300, 900}
*/

function productArray(arr) {
    var size = arr.length;
    var prod = new Array(size);
    var temp = 1;

    //Left array product
    for(var i = 0; i < size; i++) {
        prod[i] = temp;
        temp *= arr[i];
    }

    temp = 1;
    
    for(var i = size - 1; i >= 0; i--) {
        prod[i] *= temp;
        temp *=  arr[i];
    }

    return prod;
}

var arr = [2, 3, 4, 5];
console.log(productArray(arr));
