const http = require('http');
const fs = require('fs');

const myReadStream = fs.createReadStream(__dirname + '/readStream.txt', 'utf8');

// WRITE TO A FILE
// const myWriteStream = fs.createWriteStream(__dirname + '/writeStream.txt');
// myReadStream.pipe(myWriteStream);

// DISPLAY IN BROWSER
const server = http.createServer(function(req, res) {
  console.log('request received from ' + req.url);
  res.writeHead(200, {'Content-Type': 'text/plain'});
  myReadStream.pipe(res);
});

server.listen(3000, '127.0.0.1');
console.log('Now listening to 127.0.0.1:3000');
