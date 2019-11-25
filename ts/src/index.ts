function greeter (person: string): Function {
  // return 'hello, ' + person
  return function add(num: number) {
    
  }
}

const user = 'wn'

greeter(user)

// string number null undefined symbol boolean void bigint

const isLoading: boolean = false

const a: number = 6
const b: number = 0xf00d

const book: string = 'typescript'
function warnUser (): void {
  alert('test')
}

const c: undefined = undefined
const d: void = undefined
const e: null = null

declare let foo: number
declare let bar: bigint
// foo === bar

// any
// unknow 与any 一样，但是unknow 更加严格
// never
// object

// let notSure: any = 3
// notSure = '3'
// notSure.foo.bar = [1, 2]
// notSure()
// new notSure()
// notSure[0][1]

// let value: unknown = 4
// value = '4'
// value = []
// value.foo.bar = '3' error
// value()
// new value()
// value[0][1]

function error(msg:string): never {
  throw new Error(msg)
}

const empty: never[] = []
// empty.push(2)

const list: Array<string | number> = ['a', 5]
const list1: string [] = ['a']

// 元组
let x : [number, string] = [1, 's']

// object
enum Direction {
  Center = 1
}

let val: object

val = Direction
val = [1]
val = [1, 'hello']
val = {}

enum Dire {
  up = 10,
  down = 5,
  left,
  right
}

console.log(Dire.up === 0)
console.log(Dire.up)
