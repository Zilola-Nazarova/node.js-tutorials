const http = require('http');

const server = http.createServer(function(req, res) {
  console.log('request received from ' + req.url);
  myObj = {
    fristName: 'Zilola',
    lastName: 'Nazarova',
    job: 'developer',
    city: 'Tashkent'
  };
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end(JSON.stringify(myObj));
});

server.listen(3000, '127.0.0.1');
console.log('now listening to port 127.0.0.1:3000');
