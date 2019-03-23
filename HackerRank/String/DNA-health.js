var fs = require('fs'),
    path = require('path');

var fileName = path.join(__dirname,'..','resources','DNA-health-input.txt');

var input = fs.readFileSync(fileName).toString().split('\n');


main()

function main() {
    var totalGenesCount = parseInt(input.shift(), 10);

    var genes = input.shift().split(' ');

    var health = input.shift().split(' ').map(healthTemp => parseInt(healthTemp, 10));

    var DNAStrandToProcess = parseInt(input.shift(), 10);

    var minDNAStrandhealth = 0,
        maxDNAStrandhealth = 0,
        first = true;

    for (var sItr = 0; sItr < DNAStrandToProcess; sItr++) {
        var toProcess = input.shift().split(' ');

        var startExcludePosition = parseInt(toProcess[0], 10);

        var endExcludePosition = parseInt(toProcess[1], 10);

        var DNAStrand = toProcess[2];
        
        var remainingGenes = genes.slice(startExcludePosition, endExcludePosition + 1);
        var remainingGenesHealth = health.slice(startExcludePosition, endExcludePosition + 1);
        var DNAStrandHealth = 0;
        for(var i = 0; i < remainingGenes.length; i++){
            var count = getOccurenceCount(DNAStrand, remainingGenes[i]);
            DNAStrandHealth += (remainingGenesHealth[i]*count); 
        }

        if(first) {
            maxDNAStrandhealth = DNAStrandHealth;
            minDNAStrandhealth = DNAStrandHealth;
            first = false;
        } else {
            if(DNAStrandHealth <= minDNAStrandhealth) {
                minDNAStrandhealth = DNAStrandHealth;
            }
            if(DNAStrandHealth > maxDNAStrandhealth) {
                maxDNAStrandhealth = DNAStrandHealth;
            }
        }
    }
    console.log(minDNAStrandhealth + ' ' + maxDNAStrandhealth);
}

function getOccurenceCount(str, chr) {
    var count = 0;
    while(str) {
        var pos = str.indexOf(chr);
        if( pos > -1){
            count++;
            str = str.substr(pos + 1);
        } else {
            break;
        }
    }
    return count;
}