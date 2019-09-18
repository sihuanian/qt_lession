const expression = '{{}}{}{}'
const expressionFalse = '{}{{}'

function isBlanced(exp) {
  // 数组用于实现栈或队列最便宜的，连续的内存结构
  let info = exp.split(''),
    stack = [] // push、pop
  // console.log(info)
  for (const i of exp) {
    if (i == '{') {
      stack.push(i)
    } else if (i == '}') {
      if (stack.length === 0) {
        return false
      }
      stack.pop()
    }
  }
  return stack.length === 0
}

console.log(isBlanced(expressionFalse))

/**
 * 1. 栈
 * 2. {([ 入栈  })] 出栈，出栈要判断栈是否为空，空就return false
 * 3. 最后栈为空就 return true
 */