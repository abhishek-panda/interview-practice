function printSpiral(arr) {
    var m = arr.length,
        n = arr[0].length,
        T = 0,
        B = m - 1,
        L = 0,
        R = n - 1,
        i = 0,
        j = 0,
        totalElements = m * n,
        dir = 0,
        count = 0;

        while(count < totalElements) {
            if(dir == 0) {
                console.log(arr[T][j]);
                if(j < R) {
                    j++;
                } else {
                    i = ++T;
                    dir = 1;
                }
            } 
            else if(dir == 1) {
                console.log(arr[i][R]);
                if(i < B) {
                    i++;
                } else {
                    j = --R;
                    dir = 2;
                }
            }  
            else if (dir == 2) {
                console.log(arr[B][j]);
                if(j > L) {
                    j--;
                } else {
                    i = --B;
                    dir = 3;
                }
            }
            else if(dir == 3) {
                console.log(arr[i][L]);
                if(i > T) {
                    i--;
                } else {
                    j = ++L;
                    dir = 0;
                }
            } 
            count++;
        }
}

var arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(printSpiral(arr));