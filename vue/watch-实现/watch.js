class Watcher {
  constructor(option) {
    this.$data = this.getBaseType(option.data) === 'Object' ? option.data : {}
    // this.$data = option.data
    this.$watch = this.getBaseType(option.watch) === 'Object' ? option.watch : {}
    for (let key in option.data) {
      this.setData(key, option.data[key])
    }
  }

  getBaseType (target) {
    const typeStr = Object.prototype.toString.call(target).slice(8, -1)
    return typeStr
  }

  // setData (key, val) {
  //   Object.defineProperty(this, key, {
  //     get () {
  //       console.log('---', this.$data[key])
  //       return this.$data[key]
  //     },
  //     set () {
  //       const oldVal = this.$data[key]
  //       console.log(oldVal)
  //       if (oldVal === val) {
  //         return val
  //       }
  //       this.$data[key] = val
  //       this.$watch[key] && typeof this.$watch[key] === 'function' && (
  //         this.$watch[key].call(this, val, oldVal)
  //       )
  //       // console.log(this)
  //       return val
  //     }
  //   })
  // }

  setData (_key, _val) {
    Object.defineProperty(this, _key, { // this将此刻上下文的执行交给应用对象 把上下文指向当前的对象
      get: function() {
        return this.$data[_key]
      },
      set: function(val) { // 数据源中data被Object.defineProperty监听, 当data数据发生改变的时, 调用执行放在set中的watch方法的  watch中的方法是放在set中
        const oldValue = this.$data[_key] // 保存一下旧值
        if (oldValue === val) return val
        this.$data[_key] = val
        this.$watch[_key] && typeof this.$watch[_key] === 'function' && ( this.$watch[_key].call(this, val, oldValue))
        console.log(this)
        return val
      }
    }) 
  }
}

let vm = new Watcher({
  data: {
    a: 0,
    b: 'hello'
  },
  watch: {
    a (newVal, oldVal) {
      console.log(oldVal, newVal)
    }
  }
})

// console.log(vm)

setTimeout(() => {
  vm.a = 1
}, 1000);