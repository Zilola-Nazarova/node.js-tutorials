// convention is to keep the name of the module
// (asssign it to the variable with the same name)
const fs = require('fs');

// syncronous (blocking) functions
const readMe = fs.readFileSync(__dirname + '/readMeSync.txt', 'utf8');
// console.log(readme);
fs.writeFileSync(__dirname + '/writeMeSync.txt', readMe);

// asyncronous (non-blocking) functions
fs.readFile(__dirname + '/readMeAsync.txt', 'utf8', function(err, data) {
  if (err) throw err;
  console.log(data);
  fs.writeFile(__dirname + '/writeMeAsync.txt', data, function(err) {
    if (err) throw err;
  });
});
console.log('test');

//delete files
// fs.unlink('writeMe.txt', function(err){
//   if (err) throw err;
// });
