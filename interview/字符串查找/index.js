let a = '34',
  b = '12345678', // 2
  c = '35',
  d = '123456789' // -1

/* const isContain = (a, b) => {
  for (const i in b) {
    if (a[0] === b[i]) {
      let tmp = true
      for (let j in a) {
        if (a[j] !== b[~~i + ~~j]) {
          tmp = false
        }
      }
      if (tmp) {
        return i
      }
    }
  }
  return -1
} */

function isContain(a, b) {
  const len = a.length
  for (let i = 0; i < b.length; i++) {
    const slice = b.slice(i, i + len)
    if (slice === a) {
      return i
    }
  }
  return -1
}

console.log(isContain(c, d))