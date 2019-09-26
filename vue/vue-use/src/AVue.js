import Vue from 'vue'

function AVue({methods}) {
  for (let key in methods) {
    this[key] = methods[key]
  }
}

AVue.prototype.$alert = () => {
  document.write('这是个假货')
}

Object.defineProperty(Vue.prototype, '$alert', {
  writable: true,
  value () {
    console.log('我是正品')
  }
})

export default AVue