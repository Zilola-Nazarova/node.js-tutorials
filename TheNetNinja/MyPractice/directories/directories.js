const fs = require('fs');

// // synchronous (blocking) functions
// fs.mkdirSync(__dirname + '/newDirectory');
// fs.rmdirSync(__dirname + '/newDirectory');

// asynchronous (non-blocking) functions
fs.mkdir(__dirname + '/newDirectory', function() {
  fs.readFile(__dirname + '/read.txt', 'utf8', function(err, data) {
    if (err) throw err;
    fs.writeFile(__dirname + '/newDirectory/write.txt', data, function(err) {
      if (err) throw err;
    });
  });
});

// remove a directory
// fs.unlink(__dirname + '/newDirectory/write.txt', function() {
//   fs.rmdir(__dirname + '/newDirectory', function(err){
//     if (err) throw err;
//   });
// });
