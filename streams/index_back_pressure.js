const { createReadStream, createWriteStream } = require('fs');

const myReadStream = createReadStream('./big.txt');
const mywriteStream = createWriteStream('./big_copy.txt', {
    highWaterMark: 100000
})


let ngOfPauses = 0;
myReadStream.on('data', (chunk) => {
    const isReadyToWriteData = mywriteStream.write(chunk);
    if (!isReadyToWriteData) {
        ngOfPauses = ngOfPauses + 1;
        console.log("ngOfPauses ", ngOfPauses);
        console.log("isReadyToWriteData ", isReadyToWriteData);
        myReadStream.pause();
    }

})

mywriteStream.on('drain', () => {
    console.log('resume');
    myReadStream.resume();

})

