const expression = '{{}}{}{}'
const expressionFalse = '{}{{}'

/**
 * @description: 花括号匹配
 * @param string
 * @return: Boolean
 */
// JS 正则
function isBalanced(exp) {
  const reg = /{}/g
  let len
  do {
    len = exp.length
    exp = exp.replace(reg, '')
  } while (len !== exp.length) // exp 不为空
  console.log(exp)
  return exp.length === 0
}

console.log(isBalanced(expressionFalse))

/**
 * 1. 正则表达式消除相邻的{}
 * 2. string.replace(reg, '')
 */