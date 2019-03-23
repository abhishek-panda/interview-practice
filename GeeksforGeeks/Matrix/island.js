

function countIslands (arr) {
    var rows = arr.length,
        columns = arr[0].length,
        i = 0,
        j = 0,
        count = 0;
    
    for(var i = 0; i < rows; i++) {
        for(var j = 0; j < columns; j++) {
            if(arr[i][j]) {
                if(i == rows - 1) {
                    if(j == 0) {
                        if(arr[i][j + 1] === 0) count++;  
                    } else if(j == columns - 1) {
                        if(arr[i][j]) count++;
                    } else {
                        if(arr[i][j - 1] == 0 && arr[i][j+1] == 0) count++;
                    }
                } else {
                    if(j == 0) {
                        if(arr[i][j + 1] === 0 && arr[i + 1][j] === 0) count++;  
                    }
                    else if(j == columns - 1) {
                        if(arr[i][j - 1] === 0 && arr[i + 1][j] === 0) count++;  
                    }
                    else {
                        if(arr[i][j - 1] === 0 &&arr[i + 1][j] === 0 && arr[i][j + 1] === 0) count++;  
                    }
                }
            }
        }
    }

    return count;

}

var arr = [
    [1, 1, 0, 1, 1],
    [0, 1, 0, 1, 0],
    [1, 0, 0, 1, 1]
];

console.log(countIslands(arr));