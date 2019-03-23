/*
    [1, 2, 3]
    [9, 0, 9]
    [4, 5, 6]
    [7, 8, 9]
*/
function printSpiral(matrix) {
    if(Object.prototype.toString.call(matrix) !== '[object Array]') {
        throw new Error("Not a valid matrix");
    }
    if(matrix.length) {
        var m = matrix.length;
        var n = matrix[0].length;
        var T = 0,
            B = m - 1,
            L = 0,
            R = n - 1;
        /*
        * 0 -> Right
        * 1 -> Down
        * 2 -> Left
        * 3 -> Up
        */
        var dir = 0;
        var spiralArr = [];

        while(L <= R && T <= B) {
            if(dir == 0) {
                for (var i = L; i <= R; i++) spiralArr.push(matrix[T][i]);
                T++;
                dir = 1;
            } else if ( dir == 1) {
                for (var i = T; i <= B; i++) spiralArr.push(matrix[i][R]); 
                R--;
                dir = 2;
            } else if (dir == 2 ) {
                for (var i = R; i >= L; i--) spiralArr.push(matrix[B][i]);
                B--;
                dir = 3;
            } else if (dir == 3) {
                for(var i = B; i >= T; i--) spiralArr.push(matrix[i][L]);
                L++;
                dir = 0;
            }
        }
        console.log(spiralArr);
    } else {
        throw new Error("Matrix is empty");
    }
}


var arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(printSpiral(arr));