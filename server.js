const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 8080;
const PATH = '/web';

const server = express();
server.use(express.static(__dirname + PATH));

server.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + PATH + '/index.html'), (err) => {
    res.sendFile(__dirname + PATH + '/404.html', (err) => {
      res.sendFile(__dirname + '/404.html');
    });
  });
});

server.listen(PORT, () => {
  console.log(`Web server listening on port ${PORT}`);
});
