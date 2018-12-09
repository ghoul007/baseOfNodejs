const { Writable } = require('stream')
const { createReadStream } = require('fs')
class CustomWritable extends Writable {
    _write(chunk, encoding, next) {
        console.log(chunk.toString().trim().toUpperCase());
        next();
    }
}


customWritable = new CustomWritable();
const readStream = createReadStream('./flowers.txt');
readStream.pipe(customWritable)