const { Readable } = require('stream')

const text = `gros text
lorem loerm
bla bla`

class StreamText extends Readable {

    constructor(text) {
        super({ objectMode: true });
        this.text = text;
        this.sentense = text.split('/n');
    }

    _read() {
        this.sentense.map(data => {
            const obj = {
                data: data,
                length:data.length
            }
            this.push(obj);
        })
        this.push(null)
    }
}

const streamText = new StreamText(text);

streamText.on('data', (chunk) => {
    console.log(JSON.stringify(chunk) );
})

streamText.on('end', () => console.log('end'))