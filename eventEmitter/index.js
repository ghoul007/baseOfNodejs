const EventEmitter = require('events').EventEmitter;

const getBook = () => {
    const ee = new EventEmitter();
    // process.nextTick(()=>{
    //     ee.emit('searchBookStarted');
    // })
    setImmediate(()=>{
        ee.emit('searchBookStarted');
    })

    const searchDuration = Math.floor(Math.random() * 5 * 1000);
    setTimeout(() => {
        const book = { title: 'title' }
        ee.emit('bookFound', book)
    }, searchDuration);

    return ee;
}


const desiredBook = getBook()

desiredBook.on('searchBookStarted', () => {
    console.log("search has been started");
})

desiredBook.on('bookFound', (book) => {
    console.log(`book Found ${book.title}`);
})