const { Readable } = require('stream')

const text = `gros text
lorem loerm
bla bla`

class StreamText extends Readable {

    constructor(text) {
        super();
        this.text = text;
        this.sentense = text.split('/n');
    }

    _read() {
        this.sentense.map(data => {
            this.push(data);
        })
        this.push(null)
    }
}

const streamText = new StreamText(text);

streamText.on('data', (chunk) => {
    console.log(chunk.toString());
})

streamText.on('end', () => console.log('end'))