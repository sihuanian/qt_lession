// components/comment.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    data: {
      type: Object
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isZan: false,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    zan (e) {
      console.log(e)
      this.setData({
        isZan: !this.data.isZan
      })
    }
  }
})
