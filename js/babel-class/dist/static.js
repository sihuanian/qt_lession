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

// 实例属性

// class Person {
//   constructor () {
//     this.state = {
//       count: 0
//     }
//   }
// }

// class Person {
//   // 实例属性的简写方式
//   state = {
//     count: 0
//   }
// }

// function Person () {
//   this.state = {
//     count: 0
//   }
// }

// 静态方法
var Person = function () {
  function Person() {
    _classCallCheck(this, Person);
  }

  _createClass(Person, null, [{
    key: 'sayHello',
    value: function sayHello() {
      // 静态方法可以直接使用（Person.sayHello()）
      return 'hello';
    }
  }]);

  return Person;
}();

// console.log(Person.prototype.sayHello())


var wn = new Person();
console.log(Person.sayHello());
// console.log(wn.sayHello()) // TypeError

// ES5 static
function Person() {}
Person.sayHello = function () {
  return 'hello';
};