// event module is an in-built core modules
// not path but just the name of the code module
// EventEmitter is a consturctor
const events = require('events');

// create our own EventEmitter object
const myEmitter = new events.EventEmitter();

// create custom events on EventEmitter object
// provide event name and callback function
myEmitter.on('someEvent', function(mssg) {
  console.log(mssg);
});

// fire an event, provide name of the event and params
myEmitter.emit('someEvent', 'the event was emitted');

// untility module allows to inherit properties/methods from other objects
const util = require('util');

// create new object cunstructor
const Person = function(name) {
  this.name = name;
};

// make Person instances(objects) inherit props/methods from EventEmitter constructor
util.inherits(Person, events.EventEmitter);

const james = new Person('james');
const mary = new Person('mary');
const ryu = new Person('ryu');
const people = [james, mary, ryu];

people.forEach(function(person) {
  person.on('speak', function(mssg) {
    console.log(person.name + ' said: ' + mssg);
  });
});

james.emit('speak', 'hi');
ryu.emit('speak', 'I want a curry');
