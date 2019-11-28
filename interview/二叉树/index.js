var tree = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 4
    }
  },
  right: {
    value: 3,
    left: {
      value: 5,
      left: {
        value: 7
      },
      right: {
        value: 8
      }
    },
    right: {
      value: 6
    }
  }
}

// 前序遍历的递归方法
var preOrder = function (node) {
  if (node) {
    console.log(node.value)
    preOrder(node.left)
    preOrder(node.right)
  }
}

// preOrder(tree)

var midOrder = function (node) {
  if (node) {
    midOrder(node.left)
    console.log(node.value)
    midOrder(node.right)
  }
}
// midOrder(tree)

var nextOrder = function (node) {
  if (node) {
    nextOrder(node.left)
    nextOrder(node.right)
    console.log(node.value)
  }
}
// nextOrder(tree)

// 深度优先非递归
var preOrderUnrecur = function (node) {
  if (!node) {
    throw new Error('Empty tree')
  }
  var stack = []
  stack.push(node)
  while (stack.length !== 0) {
    node = stack.pop()
    console.log(node.value)
    if (node.left) {
      stack.push(node.left)
    }
    if (node.right) {
      stack.push(node.right)
    }
  }
}

preOrderUnrecur(tree)
console.log('============')

// 广度优先非递归方法
function BreadthFirstUnrecur (biTree) {
  let queue = []
  queue.push(biTree)
  while (queue.length !== 0) {
    let node = queue.shift()
    console.log(node.value)
    if (node.left) {
      queue.push(node.left)
    }
    if (node.right) {
      queue.push(node.right)
    }
  }
}

BreadthFirstUnrecur(tree)