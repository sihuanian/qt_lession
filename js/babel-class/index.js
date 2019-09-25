class Person {
  constructor (name) {
    this.name = name
  }
  
  sayHello () {
    return 'Hello, I am ' + this.name
  }
}

var wn = new Person('wn')
console.log(wn.name)

// function Person (name) {
//   this.name = name
// }
// Person.prototype.sayHello = function () {
//   return 'Hello, I am ' + this.name
// }

let descriptor = Object.getOwnPropertyDescriptor(Person.prototype, 'sayHello')
console.log(descriptor)