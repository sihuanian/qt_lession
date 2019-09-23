## 使用的第三方包
1. fastclick 点击事件300ms 延迟
  - fastclick.attach(document.body) // 使body上去掉 300ms 的点击延迟
2. vue-lazyload 图片懒加载
  ```javascript
  Vue.use(VueLazyLoad, {
    loading: def_lazy_img // 默认加载不出来的图片显示 def_lazy_img
  })
  ```