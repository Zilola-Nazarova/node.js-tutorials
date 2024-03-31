// normal function statement
function sayHi() {
  console.log('hi');
};
sayHi();

// function expression
const sayBye = function() {
  console.log('bye');
};
sayBye();

// pass one function to another

function callFunction(fun) {
  fun();
}
callFunction(sayBye);