exports.getRandomNumber = (maxValue) => {
    return new Promise((resolve, reject) => {
        if (typeof maxValue !== 'number') {
           reject(new Error('invalid number'))
        }
        const result = Math.floor(Math.random() * maxValue);
        resolve(result)
    })
}