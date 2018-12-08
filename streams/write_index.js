const { createWriteStream, createReadStream } = require('fs');

const readStream = createReadStream('./flowers.txt');
const writeStream = createWriteStream('./flowers_copy.txt');

readStream.on('data', (chunk) => {
    writeStream.write(chunk)
})

readStream.on('error', (error) => {
    console.log('error', error);

})

readStream.on('end', () => {
    writeStream.end();
})