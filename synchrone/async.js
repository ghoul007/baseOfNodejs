exports.getRandomNumber = (maxValue, callback) => {
    setTimeout(() => {
        const result = Math.floor(Math.random() * maxValue);
        callback(null, result);
    }, 0);
}

exports.addSunc = (firstNumber, secondNumber, callback) => {
    setTimeout(() => {
        callback(null, firstNumber + secondNumber)

    }, 0)

}
