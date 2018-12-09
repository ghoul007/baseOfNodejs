const { createReadStream, createWriteStream } = require('fs')
const { PassThrough } = require('stream')

const myReadStrream = createReadStream('../big.txt')
const myPassThrough = new PassThrough();
let total = 0;

myPassThrough.on('data', (chunk) => {
    total += chunk.length;
    console.log("total (octets)", total);
})

myReadStrream.pipe(myPassThrough).pipe(process.stdout);