# TheNetNinja Node.js course notes
## Installation
### Method 1.
Windows: download installer from https://nodejs.org/en/download or use Chocolatey

### Method 2 (preferred).
Use [nvm](https://github.com/nvm-sh/nvm/blob/master/README.md):
- 2.1. Windows: download [setup.exe](https://github.com/coreybutler/nvm-windows/releases)
- 2.2. Linux: 
  ```sh
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
  ```
```sh
nvm list available
nvm install version
nvm use version
```
Check [Microverse NPM lesson](https://github.com/microverseinc/curriculum-javascript/blob/main/books/lessons/js_packages_management.md) for more info about Node.js and npm.

## TheGlobalObject methods
```js
console.log(text)
setTimeout(function(){}, ms)
setInterval(function(){}, ms)
__dirname
__filename
require('./path')
require('./path')
module.exports = var_name;
```

## Patterns
Function declaration:
```js
function functionName() {
  //code
};
```
Function expression:
```js
const variable = function() {
  //code
};
```
Passing one function to another:
```js
function callFunction(passedFunction) {
  passedFunction();
}
callFunction(variable);
```

## Modules
Require a module
```js
const variable = require('./path');
// invoke if one var exported
variable(params);
// invoke if multiple vars exported
variable.prop1(params);
variable.prop2(params);
```
Export a module
```js
module.exports = variable;

module.exports.prop1 = variable1;
module.exports.prop2 = variable2;

module.exports = {
  prop1: variable1,
  prop2: variable2,
};

module.exports.prop1 = function(){};
module.exports.prop2 = function(){};
```

## EventModule
Import EventModule:
```js
const events = require('events');
```
Events module has an EventEmitter property, which is a constructor:
```js
const variable = new events.EventEmitter();
```
We can create custom events on EventEmitter object:
```js
variable.on('eventName', function(params) {
  // code
});
```
To fire an event:
```js
myEmitter.emit('eventName', params);
```
Utility module allows to inherit properties/methods from other objects:
```js
const util = require('util');
```
Create new object cunstructor:
```js
const objectConstructor = function(name) {
  this.name = name;
};
```
Make its instances(objects) inherit props/methods from EventEmitter constructor:
```js
util.inherits(objectConstructor, events.EventEmitter);
```

## Working with files/directories
Import core module:
```js
const fs = require('fs');
```
_Convention is to keep the name of the module_

### Reading/writing
Synchronous (blocking) functions:
```js
const var_name = fs.readFileSync('file_path', 'utf8');
fs.writeFileSync('file_path', data);
```
Asynchronous (non-blocking) function **(need a callback function)**:
```js
fs.readFile('file_path', 'utf8', function(err, data) {
  if (err) throw err;
  // code
});
```
```js
fs.writeFile('file_path', data, function(err) {
  if (err) throw err;
  // code
});
```

### Deleting
```js
fs.unlink('file_path', function(err) {
  if (err) throw err;
  // code
});
```
### Create/delete directory
Synchronous (blocking) functions:
```js
fs.mkdirSync('dir_path');
fs.rmdirSync('dir_path');
```
Asynchronous (non-blocking) functions:
```js
fs.mkdir('dir_path', function() {
  // code
});
```
```js
// we need to empty the directory in order to delete it
fs.unlink('file_path', function() {
  fs.rmdir('dir_path', function(err){
      if (err) throw err;
  });
});
```

## Server
We need the `http` core module:
```js
const http = require('http');
```
Creating a server:
```js
const server = http.createServer(function(req, res) {
  // code
});
```
Request/response methods:
```js
// Accessing request url
req.url;
// Formatting response headers
res.writeHead(status, {'Attr1': 'val1', 'Attr2': 'val2'});
// Sending the response
res.end('content');
```
Specifying the port:
```js
server.listen(3000, '127.0.0.1');
```

### Serving JSON
Use JSON.stringify method to convert JavaScript objects to JSON:
```js
res.end(JSON.stringify(object));
```

### Automatic restart
Install gloablly `npm install -g nodemon`.
Instead of `node app.js` run `nodemon app.js`.

## Streams
We need the `fs` core module:
```js
const fs = require('fs');
```

### Readable/Writable
Creating readable/writable stream:
```js
const readStream = fs.createReadStream('file_path', 'encoding');
const writeStream = fs.createWriteStream('file_path');
```
Receiving chunks from the readable stream:
```js
readStream.on('data', function(chunk) {
  //code
});
```
Writing chunks to the writable stream:
```js
readStream.on('data', function(chunk) {
  writeStream.write(chunk);
});
```

### Pipes
1. Create readable and writable streams.
    ```js
    const readStream = fs.createReadStream('file_path', 'encoding');
    const writeStream = fs.createWriteStream('file_path');
    readStream.pipe(writeStream);
    ```
2. Pipe the writable stream to the readable stream.
    ```js
    readStream.pipe(writeStream);
    ```
    We can also pipe server response to the readable stream:
    ```js
    readStream.pipe(res);
    ```
Example:
```js
const server = http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  readStream.pipe(res);
});
```

## Routing
### Basic
```js
if (req.url === '/home' || req.url === '/') {
  res.writeHead(200, {'Content-Type': 'text/html'});
  fs.createReadStream(__dirname + '/index.html', 'utf8').pipe(res);
} else {
  res.writeHead(404, {'Content-Type': 'text/html'});
  fs.createReadStream(__dirname + '/404.html', 'utf8').pipe(res);
}
```

## Express
Installation: `npm install express`.

### Basics
```js
// Import express module to the file
const express = require('express');
// Set up express app
const app = express();
// Listen to a port
app.listen(3000);
```
Requests:
```js
app.get('route', fn(req, res){});
app.post('route', fn(req, res){});
app.delete('route', fn(req, res){});
```
Response methods:
```js
// string or buffer
res.send('string');
// static files
res.sendFile('path');
// templates
res.render('file', {params}); // template is in views foler
```

### Dynamic Routing
Dynamic url comes with colons:
> '/profile/:param'
To access the parameter we use:
> req.params.param

### Template Engines
There are several template engines, one popular engines is EJS.

Installation: `npm install ejs`.

Set the view engine in Express:
```js
app.set('view engine', 'ejs');
```
Embed JS in .ejs file: `<%= code %>`.

Render the template in Express:
```js
app.get('/profile/:id', function(req, res) {
  const data = {name: 'Zilola', age: 29, job: 'developer'};
  res.render('profile', {id: req.params.id, data: data});
});
```
The template should be located in 'views' folder by default.
