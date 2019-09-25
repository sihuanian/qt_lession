'use strict';

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Person = function () {
  function Person(name) {
    _classCallCheck(this, Person);

    this.name = name;
  }

  _createClass(Person, [{
    key: 'sayHello',
    value: function sayHello() {
      return 'Hello, I am ' + this.name;
    }
  }]);

  return Person;
}();

var wn = new Person('wn');
console.log(wn.name);

// function Person (name) {
//   this.name = name
// }
// Person.prototype.sayHello = function () {
//   return 'Hello, I am ' + this.name
// }

var descriptor = Object.getOwnPropertyDescriptor(Person.prototype, 'sayHello');
console.log(descriptor);