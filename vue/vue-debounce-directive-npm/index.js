let option = {
  inserted: (el, binding) => {
    console.log(el, binding)
  },
  bind (el, binding) {
    el.addEventListener('click', debounce(binding.value, 2000))
  },
  unbind () {}
}
let plugin = {}
plugin.install = function(argVue) {
  argVue.directive('debounce', option)
}
// <button v-debounce="open">立即购买</button>
// Vue.directive('debounce', option)

function debounce (fn, wait = 2000) {
  let timer
  return function () {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(fn, wait)
  }
}

// 浏览器端与node环境的引入方式
if (typeof exports === 'object') {
  module.exports = plugin
} else if (window) {
  window.Vue.use(argVue => {
    argVue.use(plugin)
  })
}
