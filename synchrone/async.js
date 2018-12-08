exports.getRandomNumber = (maxValue, callback) => {
    setTimeout(() => {
        if (typeof maxValue !== 'number') {
            return callback(new Error('ivalid type'), null)
        }
        const result = Math.floor(Math.random() * maxValue);
        callback(null, result);
    }, 0);
}

exports.addSunc = (firstNumber, secondNumber, callback) => {
    setTimeout(() => {
        callback(null, firstNumber + secondNumber)

    }, 0)

}
