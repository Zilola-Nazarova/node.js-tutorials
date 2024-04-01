const fs = require('fs');

const myReadStream = fs.createReadStream(__dirname + '/readStream.txt', 'utf8');
myReadStream.on('data', function(chunk) {
  console.log('new chunk received');
  console.log(chunk);
});
