const counter = function(arr) {
  return `There are ${arr.length} elements in this array`;
};

const adder = function(a, b) {
  return `The sum of the 2 numbers is ${a + b}`
};

const pi = 3.142;

// module.exports = counter;

// module.exports.counter = counter;
// module.exports.adder = adder;
// module.exports.pi = pi;

module.exports = {
  counter: counter,
  adder: adder,
  pi: pi
};

// module.exports.counter = function(arr) {
//   return `There are ${arr.length} elements in this array`;
// };

// module.exports.adder = function(a, b) {
//   return `The sum of the 2 numbers is ${a + b}`
// };

// module.exports.pi = 3.142;

// console.log(module.exports.adder(2, 7));
