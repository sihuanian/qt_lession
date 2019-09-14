let Toast = {}
Toast.install  = function (Vue, options) {
  // 设置默认值
  let opt = {
    defaultType: 'center',
    duration: '1500'
  }
  // 将默认值改成用户传入的值
  for (const property in options) {
    if (options.hasOwnProperty(property)) {
      opt[property] = options[property]
    }
  }
  /*
    params1:  tips 提示的内容
    params2:  type 提示出现的位置
    description: 在Vue 上挂载一个方法
  */
  Vue.prototype.$toast = (tips, type) => {
    if (type) {
      opt.defaultType = type
    }
    // 如果已经存在提示框，再次点击按钮不会显示二个提示框
    if (document.getElementsByClassName('vue-toast').length) {
      return
    }
    let toastTpl = Vue.extend({
      template: `<div class="vue-toast toast-${opt.defaultType}">${tips}</div>`
    })
    let tpl = new toastTpl().$mount().$el
    document.body.appendChild(tpl)
    setTimeout(() => {
      document.body.removeChild(tpl)
    }, opt.duration)
  }
  // ['bottom', 'center', 'top'].forEach(type => {
  //   console.log(Vue.prototype.$toast.hasOwnProperty('bottom'))
  //   Vue.prototype.$toast[type] = tips => {
  //     return Vue.prototype.$toast(tips, type)
  //   }
  // })
  // console.log(Vue.prototype.$toast.hasOwnProperty('center'))
}

export {
  Toast
}