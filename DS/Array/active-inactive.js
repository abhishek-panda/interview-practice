/**
 * 
Given a binary array of size n where n > 3. A true (or 1) value in the array means active and false (or 0) means inactive. Given a number k, the task is to find count of active and inactive cells after k days. After every day, status of i’th cell becomes active if left and right cells are not same and inactive if left and right cell are same (both 0 or both 1).
Since there are no cells before leftmost and after rightmost cells, the value cells before leftmost and after rightmost cells is always considered as 0 (or inactive).
Input : cells[] = {1, 0, 1, 1}, k = 2 Output : Active cells = 3, Inactive cells = 1 After 1 day, cells[] = {0, 0, 1, 1} After 2 days, cells[] = {0, 1, 1, 1}
 */



function getState(cells, nth) {
    for(var j = 0 ; j < nth; j++ ){
        cells = calculateState(cells);
    }
    return cells;
}


function calculateState(cells) {
    var newArr = [],
        cellLength = cells.length;
    for(var i = 0 ; i < cellLength; i++) {
        if(i === 0){
            if(0 === cells[i+1]) {
                newArr.push(0);
            } else {
                newArr.push(1);
            }
        }
        else if(i === cellLength-1){
            if(cells[i-1] === 0 ) {
                newArr.push(0);
            } else {
                newArr.push(1);
            }
        } else {
            if(cells[i-1] === cells[i+1]) {
                newArr.push(0);
            } else {
                newArr.push(1);
            }
        }
    }
    return newArr;
}

var cells = [1,1,1,0,1,1,1,1],
    nth = 2;
console.log(getState(cells, nth));