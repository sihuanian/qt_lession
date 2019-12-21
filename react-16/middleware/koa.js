let middleware1 = async function(ctx, next) {
  console.log(1)
  await next()
  console.log(2)
}

let middleware2 = async function(ctx, next) {
  console.log(3)
}

let middleWares = [middleware1, middleware2]

run()
function run() {
  const dispatch = (index) => {
    const fn = middleWares[index]
    // 处理next 让他去到下一个中间件
    fn({}, () => {
      dispatch(index + 1)
    })
    /**
     * console.log(1)
     */
  }
  dispatch(0)
}