const tree = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: {
        val: 5
      },
      right: {
        val: 6,
        left: {
          val: 8
        }
      }
    },
    right: {
      val: 7,
      right: {
        val: 9
      }
    }
  },
  right: {
    val: 3
  }
}

const preOrder1 = function (tree, arr = []) {
  if (tree) {
    arr.push(tree.val)
    preOrder1(tree.left, arr)
    preOrder1(tree.right, arr)
  }
  return arr
}

console.log(preOrder1(tree))
// 递归爆栈

const preOrder2 = function (tree, arr = []) {
  const stack = [],
    target = tree
  stack.push(target)
  while (stack.length) {
    const child = stack.pop()
    arr.push(child.val)
    if (child.right) {
      stack.push(child.right)
    }
    if (child.left) {
      stack.push(child.left)
    }
  }
  return arr
}
console.log(preOrder2(tree))

const preOrder3 = function (tree) {
  let stack = [],
    current = tree,
    res = []
  stack.push(current)
  while (stack.length) {    
    while (current) {
      res.push(current.val)
      stack.push(current)
      current = current.left
    }
    current = stack.pop()
    current = current.right
  }
  return res
}

console.log(preOrder3(tree))

function fb(n) {
  let a = 1,
    b = 1,
    res = 0
  if (n <= 2 && n > 0) {
    return 1
  }
  while (n > 2) {
    res = a + b
    a = b
    b = res
    --n
  }
  return res
}

console.log(fb(9))