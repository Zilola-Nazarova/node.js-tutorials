const fs = require('fs');
const http = require('http');

const server = http.createServer(function(req, res) {
  console.log(`request received from ${req.url}`);
  // res.writeHead(200, {'Content-Type': 'text/plain'});
  // res.end('feed me popcorn');
  if (req.url === '/home' || req.url === '/') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/index.html', 'utf8').pipe(res);
  } else if (req.url === '/contact') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/contact.html', 'utf8').pipe(res);
  } else if (req.url === '/api/zilola') {
    const zilola = [{firstName: 'zilola', lastName: 'nazarova'}, {job: 'developer', city: 'Tashkent'}];
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(zilola));
  } else {
    res.writeHead(404, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/404.html', 'utf8').pipe(res);
  }
});

server.listen(3000, '127.0.0.1');
console.log('now listening to 127.0.0.1:3000');
