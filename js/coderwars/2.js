// 140  likes
// 喜欢的人 [] 'no one likes this'
// ['Peter'] 'Peter likes this'
// ['Jacob', 'Alex'] 'Jacob and Alex like this'
// ['Max', 'John', 'Mark'] 'Max, John and Mark like this'
// ['Max', 'John', 'Mark', 'Max'] 'Max, John and 2 others llike this'

/* const likes = function(arr) {
  switch(arr.length) {
    case(0): {
      return 'no one likes this'
    }
    case(1): {
      return  arr[0] + ' likes this'
    }
    case(2): {
      return arr[0] + ' and ' + arr[1] + ' likes this'
    }
    case(3): {
      return arr[0] + ', ' + arr[1] + ' and ' + arr[2] + ' likes this'
    }
    default: {
      return arr[0] + ', ' + arr[1] + ' and ' + (arr.length-2) + ' others likes this'
    }
  }
}

console.log(likes(['Max', 'John', 'Mark','Max'])) */

// 顺序逻辑 数学思维
// 四种可能 输出 likes的模式
// phone number 1种模式里的匹配 name  names[index]

const likes = names => {
  const templates = [
    'no one likes this',
    '{name} like this',
    '{name} and {name} like this',
    '{name}, {name} and {name} like this',
    '{name}, {name} and {n} others like this'
  ]

  let idx = Math.min(names.length, 4) // names.length > 4 ?  4 : names.length 哪个模式
  return templates[idx].replace(/{name}|{n}/g, function(val) {
    return val === '{name}' ? names.shift() : names.length
  })
}
console.log(likes(['Max', 'John', 'Mark', 'Max', 'Rose']))