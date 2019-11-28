/* // 类型断言
// const person = {}
// person.name = 'xiaomuzhu'
// person.age = 20

interface Person {
  name: string,
  age: number
}
// const person = {} as Person
// 双重断言
const person = 'abc' as any as Person
person.name  = 'xiaomuzhu'
person.age = 20

// 类型守卫
class Person {
  name = 'wn'
  age = 18
}

class Animal {
  name = 'petty'
  color = 'pink'
}

function getSomething(arg: Person | Animal) {
  if ('age' in arg) {
    console.log(arg.color)
    console.log(arg.age)
  }
  if ('color' in arg) {
    console.log(arg.color)
    console.log(arg.age)
  }
}

// 字面量类型守卫
type Foo = {
  kind: 'foo';
  foo: number
}
type Bar = {
  kind: 'bar';
  bar: number
}

function doStuff(arg: Foo | Bar) {
  if (arg.kind === 'foo') {
    console.log(arg.foo)
    console.log(arg.bar)
  } else {
    console.log(arg.foo)
    console.log(arg.bar)
  }
} */