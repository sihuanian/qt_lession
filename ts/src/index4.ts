// 装饰器
/* class Person {
  say () {
    console.log('hello')
  }
}

function Person () {

}
Object.defineProperty(Person, 'say', {
  value: function() {
    console.log('hello')
  },
  enumerable: false,
  configurable: false,
  writable: true
}) */

// 类装饰器
function addAge(constructor: Function) {
  constructor.prototype.age = 18
}

/* @addAge
class Person {
  name: string
  age?: number
  constructor () {
    this.name = 'wn'
  }
}

let person = new Person()
console.log(person.age) // 18 */

// 属性和方法的装饰器
/* function method(target: any, propertyKey: string, description: PropertyDescriptor) {
  console.log(target)
  console.log('prop ' + propertyKey)
  console.log('desc' + JSON.stringify(description) + '\n\n')
  description.writable = true
}

class Person {
  name: string
  constructor () {
    this.name = 'wn'
  }
  @method
  say () {
    return 'instance method'
  }
  @method
  static run() {
    return 'static method'
  }
}

const abc = new Person()
abc.say = function () {
  return 'edit'
}
console.log(abc.say()) */

// 参数装饰器
function logParameter(target:object, propertyKey: string, index: number) {
  console.log(target, propertyKey, index)
}
class Person {
  greet (message: string, @logParameter name: string): string {
    return `${message} ${name}`
  }
}
const person = new Person()

function test() {
  @logParameter(name: String)
  person.greet(): string
}

console.log(person.greet('hello', 'wn'))