function snakeway(arr) {
    var m = arr.length,
        n = arr[0].length,
        maxElements = m * n,
        i = 0,
        j = 0,
        L = 0,
        R = n - 1,
        B = m - 1,
        dir = 0,
        count = 0;

    while(count < maxElements) {
        console.log(arr[i][j]);
        if(dir == 0) {
            if(j < R) {
                j++;
            } else {
                i++;
                dir = 1;
            }
        } else if (dir == 1) {
           if(j > L) {
               j--;
           } else {
                i++;
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
console.log(snakeway(arr));