// const add: (a: number, b: number) => number = (a: number, b: number) => a + b

// const add = (a: number, b?: number) => a +(b ? b : 0)

const add = (a: number, ...res: number[]) => res.reduce((a, b) => a + b)

// function assigned(a: number, b?: number, c?: number, d?: any) {
//   if (b === undefined && c === undefined &&　d && undefined) {
//     b = c = d = a
//   } else if(c === undefined && d === undefined) {
//     c = a
//     d = b
//   }
//   return {
//     top: a,
//     right: b,
//     bottom: c,
//     left: d
//   }
// }

// 重载
interface Direction1 {
  top: number,
  right: number,
  bottom: number,
  left: number
}

// 代码实现函数不可被调用
// function assigned(all:number): Direction1
// function assigned(topAndBottom: number, leftAndRight: number): Direction1
// function assigned(top:number, right: number, bottom: number, left: number): Direction1
// function assigned(a: number, b?: number, c?: number, d?: any) {
//   if (b === undefined && c === undefined &&　d && undefined) {
//     b = c = d = a
//   } else if(c === undefined && d === undefined) {
//     c = a
//     d = b
//   }
//   return {
//     top: a,
//     right: b,
//     bottom: c,
//     left: d
//   }
// }

// assigned(1)
// assigned(1, 2)
// // assigned(1, 2, 3) // 不可以传三个参数
// assigned(1, 2, 3, 4)

// 泛型
// function reutrnItem (para: number): number {
//   return para
// }

// function reutrnItem (para: string): string {
//   return para
// }

// function returnItem<T> (para: T): T {
//   return para
// }

function swap<T, S>(tuple: [T, S]): [S, T] {
  return [tuple[1], tuple[0]]
}

// 泛型变量
function getArrayLength<T>(arg: Array<T>): Array<T> {
  console.log((arg as Array<T>).length)
  return arg
}

// 泛型接口
interface ReturnItemFn<T> {
  (para: T): T
}

const returnItem: ReturnItemFn<number> = para => para

// 泛型类
// class Stack {
//   private arr: number[] = []
//   public push(val: number) {
//     this.arr.push(val)
//   }
//   public pop () {
//     this.arr.pop()
//   }
// }

// 泛型约束
type Params = number | string
class Stack<T extends Params> {
  private arr: number[] = []
  public push(val: number) {
    this.arr.push(val)
  }
  public pop () {
    this.arr.pop()
  }
}

const stack1 = new Stack<string>()

// 使用多重类型进行泛型约束
interface FirstInterface {
  doSomething(): number
}
interface SecondInterface {
  doSomethingElse(): string
}

// class Demo<T extends FirstInterface, T extends SecondInterface> {
//   private test: T

//   useT() {
//     this.test.doSomething()
//     this.test.doSomethingElse()
//   }
// }

interface ChildInterface extends FirstInterface, SecondInterface {

}

// class Demo implements ChildInterface {
//   private test: T

//   useT() {
//     this.test.doSomething()
//     this.test.doSomethingElse()
//   }
// }

// new
function factory<T>(type: {new(): T}) {
  return new type()
}