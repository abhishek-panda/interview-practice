var input = '100000111',
    count = 0,
    maxCount = 0,
    startAt  = -1;

if(input){
  startAt = foundAt = 0;
}

for(var i = 0 ; i < input.length-1; i++) {
	if(input[i] == input[i+1] ) {
      if(!count){
        startAt = i;
      }
      count++;
  } else {
      if(count > maxCount) {
        maxCount = count +1;
        foundAt = startAt;
        count = 0;
      }
  }
}

console.log([startAt, maxCount])
