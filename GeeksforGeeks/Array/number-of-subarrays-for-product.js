function countSubArrays(arr, mul) {
    var start = 0;
    var end = 0;
    var prod = 1;
    var count = 0;
    var size = arr.length;
    var result = 0;

    while(end < size) {
        prod *= arr[end];
        if(prod > mul) {
            while(start <= end && prod > mul) {
                prod /= arr[start];
                start++;
            }
        }
        if(prod == mul) {
            count = 0;
            while(end + 1 < size && arr[end + 1] == 1) {
                count++;
                end++;
            }
            result += count + 1;

            while(start <= end && arr[start] == 1) {
                result += count + 1;
                start++;
            }
            
            // prod /= arr[start];
            // start++;
        }
        end++; 
    }
    return result;
}

var myArr = [1, 1, 2, 2, 1, 1, 1, 4, 5];
console.log(countSubArrays(myArr, 4));