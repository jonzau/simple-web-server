const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 8080;

const server = express();
server.use(express.static(__dirname + '/web'));

server.get('/*', function(req,res) {
  console.log(path.join(__dirname + '/web/index.html'));
  res.sendFile(path.join(__dirname + '/web/index.html'), (err) => {
    res.sendFile(__dirname + '/web/404.html', (err) => {
      res.sendFile(__dirname + '/404.html');
    });
  });
});

server.listen(PORT, () => {
  console.log(`Web server listening on port ${PORT}`);
});
