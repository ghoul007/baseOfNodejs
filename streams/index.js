const { createReadStream, createWriteStream } = require('fs')
// createReadStream('./flowers.txt').pipe(process.stdout)


myWriteStream = createWriteStream('./flowers.txt')

process.stdin.pipe(myWriteStream)


// linux cmd
// echo 'test' | node index.js