const fs = require('fs');

const myReadStream = fs.createReadStream(__dirname + '/readStream.txt', 'utf8');
const myWriteStream = fs.createWriteStream(__dirname + '/writeStream.txt');

myReadStream.on('data', function(chunk) {
  console.log('new chunk received');
  myWriteStream.write(chunk);
});
