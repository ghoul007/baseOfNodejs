const { createReadStream, createWriteStream } = require('fs');

const myReadStream = createReadStream('./big.txt');
const mywriteStream = createWriteStream('./big_copy.txt')

myReadStream.on('data', (chunk) => {
    const isReadyToWriteData = mywriteStream.write(chunk);
    if (!isReadyToWriteData) {
        console.log("isReadyToWriteData ", isReadyToWriteData);
        myReadStream.pause();
    }

})

mywriteStream.on('drain', () => {
    console.log('resume');
    myReadStream.resume();

})

