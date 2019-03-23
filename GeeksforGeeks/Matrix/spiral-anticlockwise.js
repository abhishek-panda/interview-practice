/**
 * [1 2 3]
 * [4 5 6]
 * [7 8 9]
 * 
 * [1 4 7 8 9 6 3 2 5]
 * 
 * down -> 0
 * right -> 1
 * up -> 2
 * left -> 3
 */

function printSpiral(matrix) {
    var m = matrix.length,
        n = matrix[0].length,
        T = 0,
        B = m - 1,
        L = 0,
        R = n - 1,
        dir = 0,
        arr = [];
    
    while( T <= B && L <= R ) {
        if(dir == 0) {
            for(var i = T; i <= B; i++) {
                arr.push(matrix[i][L]);
            }
            L++;
            dir = 1;
        }
        if(dir == 1) {
            for(var i = L; i <= R; i++) {
                arr.push(matrix[B][i])
            }
            B--;
            dir = 2;
        }
        if(dir == 2) {
            for(var i = B; i >= T; i--) {
                arr.push(matrix[i][R]);
            }
            R--;
            dir = 3;
        }
        if(dir == 3) {
            for(var i = R; i >= L; i--) {
                arr.push(matrix[T][i]);
            }
            T++;
            dir = 0;
        }
    }
    return arr;
    
}


var arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(printSpiral(arr));