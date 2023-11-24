console.log('hello word')


const http = require('http');

http.createServer((reg, res) => {
    res.write('Hello Everyone');
    res.end();
}).listen(3000);


