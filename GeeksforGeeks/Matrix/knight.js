function countKnightMoves(board, initialXPos, initialYPos) {
    var count = 0,
        row = board.length - 1,
        column = board[0].length - 1;
    if(board[initialXPos][initialYPos] != 0) {
        throw new Error("Invalid Positition");
    } else {
        //Top-Left & Top-right
        if(initialXPos - 2 >= 0) {
            if(initialYPos - 1 >= 0 && board[initialXPos - 2][initialYPos - 1] === 0) count++
            if(initialYPos + 1 <= column && board[initialXPos - 2][initialYPos + 1] === 0) count++
        }
        //Bottom-Left & Bottom-Right
        if(initialXPos + 2  <= row) {
            if(initialYPos - 1 >= 0 && board[initialXPos + 2][initialYPos - 1] === 0) count++;
            if(initialYPos + 1 <= column && board[initialXPos + 2][initialYPos + 1] === 0) count++;
        }
        //Right-Top & Right-Bottom
        if(initialYPos + 2 <= column) {
            if(initialXPos - 1 >= 0 && board[initialXPos - 1][initialYPos + 2] === 0) count++;
            if(initialXPos + 1 <= row && board[initialXPos + 1][intialYPos + 2] === 0) count++;
        }
        //Left
        if(initialYPos - 2 >= 0) {
            if(initialXPos - 1 >= 0 && board[initialXPos - 1][initialYPos - 2] === 0) count++;
            if(initialXPos + 1 <= row && board[initialXPos + 1][initialYPos - 2] === 0) count++;
        }
    }
    return count;
}


var chessBoard = [
    [ 1, 0, 1, 0 ], 
    [ 0, 1, 1, 1 ], 
    [ 1, 1, 0, 1 ], 
    [ 0, 1, 1, 1 ]
];

console.log(countKnightMoves(chessBoard, 3, 0)); 