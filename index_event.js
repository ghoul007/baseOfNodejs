const EventEmitter = require('events').EventEmitter;
const programmer = new EventEmitter();

programmer.on('event1', () => {
    console.log('test event1')
})

programmer.emit('event1');