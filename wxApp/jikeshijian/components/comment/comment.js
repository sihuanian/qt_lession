// components/comment.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    isZan: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    zan (e) {
      this.setData({
        isZan: !this.data.isZan
      })
    }
  }
})
