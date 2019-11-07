/* function cloneShallow (source) {
  var target = {}
  for (const key in source) {
    if (source.hasOwnProperty(key)) {
      if (typeof source[key] === 'object') {
        target[key] = cloneShallow(source[key])
      } else {
        target[key] = source[key]
      }
    }
  }
  return target
}

let a = {
  name: 'sihuanian',
  book: {
    title: 'js'
  },
  hobbies: ['sing', 'dump', 'rap']
}

let b = cloneShallow(a)
a.book.title = 'javascript'
console.log(b) */

/* function cloneDeep(source) {
  if (!source instanceof Object) {
    return source
  }
  var target = source instanceof Array ? [] : {}
  for (const key in source) {
    if (source.hasOwnProperty(key)) {
      if (typeof source[key] === 'object') {
        target[key] = cloneDeep(source[key])
      } else {
        target[key] = source[key]
      }
    }
  }
  return target
}

let a = {
  name: 'sihuanian',
  book: {
    title: 'js'
  },
  hobbies: ['sing', 'dump', 'rap'],
  add: function(a, b) {
    return a + b
  },
  e: null
}

let b = cloneDeep(a)
a.book.title = 'javascript'
console.log(b)

console.log(b.add(1,2)) */

/* function cloneDeep1(x) {
  const root = {}
  const loopList = [
    {
      parent: root,
      key: undefined,
      data: x
    }
  ]
  while (loopList.length) {
    // 广度优先
    const node = loopList.pop()
    const parent = node.parent
    const key = node.key
    const data = node.data

    // 初始化赋值目标， key 为 undefined则拷贝到父元素，否则拷贝到子元素
    let res = parent
    if (typeof key !== 'undefined') {
      res = parent[key] = {}
    }

    for (const k in data) {
      if (data.hasOwnProperty(k)) {
        if (typeof data[k] === 'object') {
          // 下一次循环
          loopList.push({
            parent: res,
            key: k,
            data: data[k]
          })
        } else {
          res[k] = data[k]
        }
      }
    }
  }
  return root
}

let a = {
  name: 'sihuanian',
  book: {
    title: 'js'
  },
  hobbies: ['sing', 'dump', 'rap']
  // add: function(a, b) {
  //   return a + b
  // },
  // e: null
}

let b = cloneDeep1(a)
a.book.title = 'javascript'
console.log(b)

// console.log(b.add(1,2)) */



function getType(obj) {
  const str = Object.prototype.toString.call(obj);
  const map = {
    '[object Boolean]': 'boolean',
    '[object Number]': 'number',
    '[object String]': 'string',
    '[object Function]': 'function',
    '[object Array]': 'array',
    '[object Date]': 'date',
    '[object RegExp]': 'regExp',
    '[object Undefined]': 'undefined',
    '[object Null]': 'null',
    '[object Object]': 'object'
  };
  // if (obj instanceof Element) {
  //   // 判断是否是dom元素，如div等
  //   return 'element';
  // }
  return map[str];
}

function deepCopy(ori) {
  const type = getType(ori);
  let copy;
  switch (type) {
    case 'array':
      return copyArray(ori, type, copy);
    case 'object':
      return copyObject(ori, type, copy);
    case 'function':
      return copyFunction(ori, type, copy);
    default:
      return ori;
  }
}

function copyArray(ori, type, copy = []) {
  for (const [index, value] of ori.entries()) {
    copy[index] = deepCopy(value);
  }
  return copy;
}

function copyObject(ori, type, copy = {}) {
  for (const [key, value] of Object.entries(ori)) {
    copy[key] = deepCopy(value);
  }
  return copy;
}

function copyFunction(ori, type, copy = () => {}) {
  const fun = eval(ori.toString());
  fun.prototype = ori.prototype
  return fun
}


let a = {
  name: 'sihuanian',
  hobbies: [
    'sing',
    'dump',
    'rap',
    'basketball'
  ],
  add: (a, b) => {
    return a + b
  },
  d: null,
  e: undefined
}

console.log(deepCopy(a))