const { Transform } = require('stream')

class Slugify extends Transform {
    _transform(chunk, encoding, next) {
        const slug = chunk.toString().trim().replace(/\s+/g, '_');
        this.push(slug+ '\n');
        next();
    }

    _flush(next) {
        console.log('end');

    }
}

const slugify = new Slugify();
process.stdin.pipe(slugify).pipe(process.stdout)