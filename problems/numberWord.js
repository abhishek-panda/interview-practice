function NumberWord(input) {
    var NumberStringMap = {
        0: 'Zero',
        1: 'One',
        2: 'Two',
        3: 'Three',
        4: 'Four',
        5: 'Five',
        6: 'Six',
        7: 'Seven',
        8: 'Eight',
        9: 'Nine',
        10: 'Ten',
        11: 'Eleven',
        12: 'Twelve',
        13: 'Thirteen',
        14: 'Fourteen',
        15: 'Fifteen',
        16: 'Sixteen',
        17: 'Seventeen',
        18: 'Eighteen',
        19: 'Ninteen',
        20: 'Twenty',
        30: 'Thirty',
        40: 'Forty',
        50: 'Fifty',
        60: 'Sixty',
        70: 'Seventy',
        80: 'Eighty',
        90: 'Ninty',
        100: 'Hundred',
        1000: 'Thousand',
        100000: 'Lakh',
        10000000: 'Crore'
    } 

    switch(typeof input) {
        case 'number':
            return toString(input);
        case 'string':
            return toNumber(input);
        default:
            throw new Error("Not a valid input");
    }


    function toString(number) {
        var str = number + '';
        var result = '';
        if(NumberStringMap[number]){
            result = (number >= 100 ? 'One ' : '') + NumberStringMap[number];
        } else {
            var divisor = 1;
            for(var i = str.length; i > 1; i--) {
                divisor *= 10;
            }
            while(!NumberStringMap[divisor]) {
                divisor /= 10;
            }
            var remainder = number%divisor;
            if(str.length == 2) { //21
                number = number - remainder;
                result = NumberStringMap[number];
            } else { //210
                var quotient = Math.floor(number/divisor);
                result += toString(quotient)
                result += ' ' + NumberStringMap[divisor];
            }
            if(remainder) result += ' ' + toString(remainder);
        
        }
        return result;
    }

    function toNumber(data) {
        //TODO: Later Implementation
    }
}

//console.log(NumberWord(1234567890));
console.log(NumberWord('One Hundred Twenty Three'));
//One Hundred Twenty Three Crore Forty Five Lakh Sixty Seven Thousand Eight Hundred Ninty