const promises = require('./promise/promise');

console.log('before')
promises.getRandomNumber(10).then(
    (res) => {
        console.log(res);
    }
).catch((err) => console.log(err.message))
console.log('after')