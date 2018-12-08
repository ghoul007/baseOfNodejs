const syn = require('./synchrone/sync');
const asyn = require('./synchrone/async');

console.log('before')
asyn.getRandomNumber('5', (err, res) => {
    if (err) throw err;
    console.log(res)
})
asyn.addSunc(10, 80, (err, res) => {
    if (err) throw err;
    console.log(res)
})
console.log('after')


