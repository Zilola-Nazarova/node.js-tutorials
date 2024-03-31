const imports = require('./modulesExports');

console.log(imports.counter([1, 2, 3]));
console.log(imports.adder(5, 6));
console.log(imports.adder(imports.pi, 5));
