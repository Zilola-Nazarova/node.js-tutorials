const http = require('http');

const server = http.createServer(function(req, res) {
  console.log('request was made: ' + req.url);
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hey Zilola');
});

server.listen(3000, '127.0.0.1');
console.log('yo dawgs, now listening to port 3000');
