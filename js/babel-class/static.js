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
class Person {
  static sayHello () { // 静态方法可以直接使用（Person.sayHello()）
    return 'hello'
  }
}

// console.log(Person.prototype.sayHello())
var wn = new Person()
console.log(Person.sayHello())
// console.log(wn.sayHello()) // TypeError

// ES5 static
function Person () {}
Person.sayHello = function () {
  return 'hello'
}

// 静态属性
class Person {}
Person.name = 'wn'

class Person {
  static name = 'wn'
}

// ES5 静态属性
function Person() {}
Person.name = 'wn'