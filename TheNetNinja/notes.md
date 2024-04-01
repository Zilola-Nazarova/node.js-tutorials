# TheNetNinja Node.js course notes
## Installation
### Method 1.
Windows: download installer from https://nodejs.org/en/download or use Chocolatey

### Method 2 (preferred).
Use [nvm](https://github.com/nvm-sh/nvm/blob/master/README.md):
- 2.1. Windows: download [setup.exe](https://github.com/coreybutler/nvm-windows/releases)
- 2.2. Linux: `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash`
```
nvm list available
nvm install version
nvm use version
```
Check [Microverse NPM lesson](https://github.com/microverseinc/curriculum-javascript/blob/main/books/lessons/js_packages_management.md) for more info about Node.js and npm.

## TheGlobalObject methods
```
console.log(text);
setTimeout(function(){}, ms);
setIntercval(function(){}, ms);
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
`const events = require('events');`
Events module has an EventEmitter property, which is a constructor:
`const variable = new events.EventEmitter();`
We can create custom events on EventEmitter object:
```js
variable.on('eventName', function(params) {
  // code
});
```
To fire an event:
`myEmitter.emit('eventName', params);`
Utility module allows to inherit properties/methods from other objects:
`const util = require('util');`
Create new object cunstructor
```js
const objectConstructor = function(name) {
  this.name = name;
};
```
Make its instances(objects) inherit props/methods from EventEmitter constructor
`util.inherits(objectConstructor, events.EventEmitter);`
