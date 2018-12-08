const syn = require('./synchrone/sync');


console.log('before interval')
let i = 0;
const handle = setInterval(() => {
    console.log('before rnd')
    const result = syn.getRandomNumberSync(50);
    console.log(` nbre random ${result}`);
    const total = syn.addSunc(5, 4);
    console.log("total ", total);
    console.log('after rnd')
    i++;

    if (i == 10) {
        clearInterval(handle);
    }
}, 50)
console.log('after interval', i)
