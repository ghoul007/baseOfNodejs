const createReadStream = require('fs').createReadStream;
const readable = createReadStream('./flowers.txt');
readable.on('data', (chunk) => {
    console.log(chunk.toString());

})


readable.on('end',()=>{
    console.log('end');
    
})