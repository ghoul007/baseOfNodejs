const http = require('http');
const { createReadStream } = require('fs')
const videoPath = './video/video.mp4';
const server = http.createServer();

server.on('request', (req, res) => {
    if (req.url === '/favicon') {
        retutn
    }
    if (req.url === '/contact') {
        memUsage('contact')
        res.end('contact us')
    } else if (req.url === '/videos') {
        const readStream = createReadStream('./video/video.mp4');
        res.writeHead(200, { 'Content-type': 'video/mp4' });
        readStream.pipe(res)
        memUsage('vidoe')
    } else {
        res.end(` ${req.url}`)
    }
});

const port = 3000;
server.listen(port, () => {
    console.log("server on port ", port);

})

function memUsage(pageUrl) {
    const used = process.memoryUsage();
    console.log("used ", used);
    for (key in used) {
        console.log(`${key} ${Math.round(used[key] / 1024 / 1024 * 100) / 100} Mo`)
    }
}