const http = require('http')
const fs = require('fs')

const PORT = process.env.PORT || 3000;

const PATH = './web';

function show404Page(res) {
  const file = '/404.html';
  const path404 = fs.existsSync(PATH + file) ? PATH + file : './' + file;
  res.writeHead(404, { 'content-type': 'text/html' });
  fs.createReadStream(path404).pipe(res);
}

const server = http.createServer((req, res) => {
  const file = req.url === '/' ? '/index.html' : req.url;
  if (fs.existsSync(PATH + file)) {
    const header = req.headers.accept;
    const contentType = header.substr(0, header.indexOf(','));
    res.setHeader('content-type', contentType);
    fs.createReadStream(PATH + file).pipe(res);
  } else {
    show404Page(res);
  }
});

server.listen(PORT, () => {
  console.log(`Web server listening on port ${PORT}`);
});
