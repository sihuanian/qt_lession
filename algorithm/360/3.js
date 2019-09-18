const expression = '{{}}{}{}'
const expressionFalse = '{}{{}'

const isBlanced = (str) => {
  // [{()}]
  // es6 新增的数据结构 hashMap 映射
  const map = new Map([
    ['{', '}'],
    ['[', ']'],
    ['(', ')']
  ])
  // console.log(map.get('{'))
  // for (const [k, v] of map) {
  //   console.log(k, v)
  // }
  let statck = []
  for (let i = 0; i < str.length; i++) {
    let node = str[i]
    // 入栈
    if (map.has(node)) {
      statck.push(node)
    } else if ([...map.values()].includes(node)) {
      // 出栈
      // 右边的 values 中的一个，跟栈顶元素匹配
      // key value反找key 
      let key = statck[statck.length - 1]
      if (map.get(key) !== node) {
        return false
      }
      statck.splice(- 1, 1)
    }
  }
  return statck.length === 0
}

console.log(isBlanced(expression))

/**ES6 栈
 * 1. map 是一个可以匹配括号
 * 2. map 中有{ [ ( 入栈
 * 3. map 中value中有} ] ) 出栈
 */