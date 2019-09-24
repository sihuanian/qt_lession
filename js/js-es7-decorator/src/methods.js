function betterWn (target, name, descriptor) {
  const originalXiangqin = descriptor.value
  descriptor.value = (...args) => {
    console.log('我家在红谷滩有房')
    console.log('我家有车')
    originalXiangqin(...args)
  }
}
class Man {
  @betterWn
  xiangqin () {
    // console.log('我家在红谷滩有房')
    console.log('和我在一起')
  }
}

var man = new Man()
man.xiangqin()