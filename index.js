const syn = require('./synchrone/sync');

console.log('before for')
for (let i = 0; i < 1000; i++) {
    console.log('before rnd')
    const result = syn.getRandomNumberSync(50);
    console.log(` nbre random ${result}`);
    const total = syn.addSunc(5, 4);
    console.log("total ", total);
    console.log('after rnd')
}
console.log('after for')
