// total / num * 2 抢的公平性

function hongbao(total, num) {
  const arr = []
  let restAmount = total, // 剩余的金额
    restNum = num // 剩余没领红包的人数
  
  for (let i = 0; i < num - 1; i++) {
    let amount = Number.parseFloat(Math.random() * (restAmount / restNum) * 2).toFixed(2)
    restAmount -= amount
    restNum -= 1
    arr.push(amount)
  }

  arr.push(restAmount.toFixed(2))

  return arr
}

console.log(hongbao(100, 10))