// es5的面向对象
function Person(name) {
  // constructor
  // Object {}
  this.name = name
}
Person.prototype = {
  getName() {
    return this.name
  },
  playGame() {
    console.log('play game!')
  }
}


// new + fun()  返回一个新的对象
// 实例
let person = new Person('Rose')
console.log(person)