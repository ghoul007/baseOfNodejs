exports.getRandomNumber = (maxValue, callback) => {

    if (callback !== undefined) {
        setTimeout(() => {
            const result = Math.floor(Math.random() * maxValue);
            if (typeof maxValue !== 'number') {
                return callback(new Error('ivalid type'), null)
            }
            return callback(null, result)
        }, 0);
    }
    return new Promise((resolve, reject) => {
        if (typeof maxValue !== 'number') {
            reject(new Error('invalid number'))
        }
        const result = Math.floor(Math.random() * maxValue);
        resolve(result)
    })
}