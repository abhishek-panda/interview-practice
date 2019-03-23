/*
[1 2 3]
[3 4 6]
[7 8 9]
*/

function getDiff(arr) {
    var n = arr.length - 1;
    var leftSum = 0,
        rightSum = 0;
    for(var i = 0; i <= n ; i++) {
        leftSum += arr[i][i]
    }

    for(var i = 0; i <= n; i++) {
        rightSum += arr[i][n-i];
    }
    console.log(leftSum);
    console.log(rightSum);
    return leftSum - rightSum;
}

var result  = getDiff([
    [1,2,30],
    [1,4,6],
    [7,8,9]
]);
console.log(result);


