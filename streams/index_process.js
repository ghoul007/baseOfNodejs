// process.stdin.pipe(process.stdout);

const { createReadStream } = require('fs')

// createReadStream('./big.txt').pipe(process.stdout)
createReadStream(process.argv[2]).pipe(process.stdout)