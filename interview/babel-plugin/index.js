/**
 * babel 原理
 * 1. 解析Parse: 将代码解析生成抽象语法树(AST)，词法分析与语法分析
 * 2. 转换：对于AST 进行变换一系列的操作，babel接受到的AST 通过babel-traverse 对其进行遍历
 * 在些过程中进行添加，更新及删除等操作
 * 3. 生成：将变换后的抽象语法树再转换成js 代码，使用的模版是babel-generator
 */

// const result = 1 + 2 + 3 + 4 + 5
// const result = 15

var babel = require('babel-core')
var t = require('babel-types')

const visitor = {
  BinaryExpression(path) {
    const node = path.node
    let result
    // 判断表达式两边是否都是数字NumericLiteral
    if (t.isNumericLiteral(node.left) && t.isNumericLiteral(node.right)) {
      // 根据不同的操作符做运算
      switch (node.operator) {
        case '+':
          result = node.left.value + node.right.value
          break;
        case '-':
          result = node.left.value - node.right.value
          break;
        case '*':
          result = node.left.value * node.right.value
          break;
        case '/':
          result = node.left.value / node.right.value
          break;
        case '**':
          let i = node.right.value
          while (--i) {
            result = result || node.left.value
            result = result * node.left.value
          }
          break;

        default:
          break;
      }
    }
    // 如果上面的运算有结果的话
    if (result !== undefined) {
      // 将表达式的节点替换成number 字面量
      path.replaceWith(t.numericLiteral(result))
      let parentPath = path.parentPath
      // 向上遍历父节点
      parentPath && visitor.BinaryExpression(parentPath)
    }
  }
}

module.exports = function (babel) {
  return {
    visitor
  }
}


/* function format(str) {
  let [integer, decimal] = str.split('.')
  let last = integer.length - 1,
    res = ''
  for (let i = integer.length - 1; i >= 0; i -= 3) {
    res = ',' + integer.slice(i, last + 1)
    console.log(res)
    last = i
  }
  console.log(res, 'res')
  res = integer.slice(0, last + 1) + ',' + res
  decimal ? ',' + decimal : ''
  return res + decimal
}

console.log(format('123456.789')) */