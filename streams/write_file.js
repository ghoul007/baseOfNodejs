const { createReadStream, createWriteStream } = require('fs');


const writeStream = createWriteStream('big.txt')
for (let i = 0; i < 1000; i++) {

    writeStream.write(`the result is ${i} \n`)
}


writeStream.end();