# TheNetNinja Node.js course notes
## installation
  Method 1. Windows: download installer from https://nodejs.org/en/download or use Chocolatey
  Method 2 (preferred). Use [nvm](https://github.com/nvm-sh/nvm/blob/master/README.md):
    2.1. Windows: download [setup.exe](https://github.com/coreybutler/nvm-windows/releases)
    2.2. Linux: `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash` 

  Check [Microverse NPM lesson](https://github.com/microverseinc/curriculum-javascript/blob/main/books/lessons/js_packages_management.md) for more info about Node.js and npm.

## theGlobalObject methods
  console.log(text);
  setTimeout(function(){}, ms);
  setIntercval(function(){}, ms);
  __dirname
  __filename
  require('./path')
  module.exports = function name;

## patterns
  function declaration
  ```js
  function functionName() {
    //code
  };
  ```
  function expressions
  ```js
  const variable = function() {
    //code
  };
  ```
  passing one function to another
  ```js
  function callFunction(passedFunction) {
    passedFunction();
  }
  callFunction(variable);
  ```

## modules
  require a module
  ```js
  const variable = require('./path');
  variable.prop1(params);
  variable.prop2(params);
  ```
  export a module
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

## eventModule
  `const events = require('events');`
  events module has an EventEmitter property, which is a constructor:
  `const variable = new events.EventEmitter();`
  we can create custom events on EventEmitter object:
  ```js
  variable.on('eventName', function(params) {
    // code
  });
  ```
  to fire an event:
  `myEmitter.emit('eventName', params);`
  untility module allows to inherit properties/methods from other objects:
  `const util = require('util');`
  create new object cunstructor
  ```js
  const objectConstructor = function(name) {
    this.name = name;
  };
  ```
  make its instances(objects) inherit props/methods from EventEmitter constructor
  `util.inherits(objectConstructor, events.EventEmitter);`
