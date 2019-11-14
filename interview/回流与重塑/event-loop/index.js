setTimeout(() => {
  console.log(111)
}, 0)

console.time('test')
for (let i = 0; i < 1000000; i++) {
  i === (100000 - 1)
}
console.timeEnd('test')
console.log(222)

// 1. js引擎线程 
// 2. GUI线程 
// 3. http网络请求线程 （处理post, get 请求，等到返回结果后将回调函数推入到任务队列）
// 4. 定时触发器线程（setTimeout, setInterval...等待时间结束后把执行函数推入到任务队列）
// 5. 浏览器事件处理线程

function test1() {
  test2()
  console.log('hello, I am test1') // 3
}
function test2() {
  console.log('hello, I am test2') // 2
}
function main() {
  console.log('hello, I am main') // 1
  setTimeout(() => {
    console.log('hello, I am setTimeout') // 4
  }, 0)
  test1()
}
main()