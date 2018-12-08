const EventEmitter = require('events').EventEmitter;
const programmer = new EventEmitter();

let a = 5;
programmer.on('event1', () => {
    a = a + 1;
    console.log('test event1 ', a)
})

const cusFct = () => {
    console.log('test event1.1')
}

programmer.on('event1', cusFct)

programmer.on('event1', (b = 'test') => {
    console.log(`send params ${b}`)
})

programmer.emit('event1');
programmer.emit('event1');
programmer.emit('event1', 'ahmed');