var util = require('util');
var stream = require('stream'),
    readStream = stream.Readable,
    writeStream = stream.Writable;

function WriteAble() {
    writeStream.call(this);
}

util.inherits(WriteAble, writeStream);

function ReadAble() {
    readStream.call(this);
}

util.inherits(ReadAble, readStream);

var writeST = new WriteAble(),
    readST = new readStream();

readST.on('data', function(){
    console.log('Reading');
})

