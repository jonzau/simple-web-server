const http = require('http')
const fs = require('fs')

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'text/html' })
  fs.createReadStream('./web/index.html').pipe(res)
});

server.listen(PORT);
