/**
 * [1 2 3]
 * [4 5 6]
 * [7 8 9]
 * 
 * [4 1 2]
 * [7 5 3]
 * [8 9 6] 
 * 
 * [1, 2, 3, 4],
 * [5, 6, 7, 8],
 * [9, 10, 11, 12],
 * [13, 14, 15, 16]
 * 
 * [5, 1, 2, 3],
 * [9, 10, 6, 4],
 * [13, 11, 7, 8],
 * [14, 15, 16, 12]
 * 
 */

 function print(data) {
     console.log(data);
 } 

 function rotateClockWise(matrix) {
     /**
      * Can do basic check as in spiral.js 
      */

    var m = matrix.length,
        n = matrix[0].length,
        T = 0,
        B = m -1,
        L = 0,
        R = n - 1,
        dir = 0,
        prev, curr;

    while ( B >= T && R >= L) {
        if(dir == 0) {
            prev = matrix[T+1][L]
            for(var i = L; i <= R; i++) {
                curr = matrix[T][i];
                if(L != R) matrix[T][i] = prev;// Extra condition inner to check if item is matrix/element
                prev = curr;
            }
            T++;
            dir = 1
        }
        if(dir == 1) {
            for(var i = T; i <= B; i++) {
                curr = matrix[i][R];
                matrix[i][R] = prev;
                prev = curr;
            }
            R--;
            dir = 2;
        }
        if(dir == 2) {
            for(var i = R; i >= L; i--) {
                curr = matrix[B][i];
                matrix[B][i] = prev;
                prev = curr;
            }
            B--;
            dir = 3;
        }
        if(dir == 3) {
            for (var i = B; i >= T; i--) {
                curr = matrix[i][L];
                matrix[i][L] = prev; 
                prev= curr;
            }
            L++;
            dir = 0;
        }
    }
    return matrix;
    
 }

 var arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(rotateClockWise(arr)); 
