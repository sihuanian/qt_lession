import vue from 'vue'
import ToastComponent from './index.vue'

// console.log(ToastComponent)
// 返回一个构造函数
let toastConstruct = vue.extend(ToastComponent)
function showMessage (msg, duration = 2000) {
  let node = new toastConstruct({
    el: document.createElement('div'),
    propsData: {
      msg,
      visiable: true
    }
  })
  console.log(node.$el)
  document.body.appendChild(node.$el)
  setTimeout(() => {
    document.body.removeChild(node.$el)
    // node.visiable = false
  }, duration)
}

export default showMessage