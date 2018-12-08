const syn = require('./synchrone/sync');

console.log('before forEach')
let i = 0;
Array(10).fill(0).forEach(element => {
    console.log('before rnd')
    const result = syn.getRandomNumberSync(50);
    console.log(` nbre random ${result}`);
    const total = syn.addSunc(5, 4);
    console.log("total ", total);
    console.log('after rnd')
    i++;
});
console.log('after forEach',i)
