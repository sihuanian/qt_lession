//index.js
const app = getApp()
const db = wx.cloud.database()
const productsCollection = db.collection('products')

Page({
  data: {
    products: [],
    page: 0
  },

  onLoad() {
    // lifeCycle
    productsCollection
      .get()
      .then(res => {
        // 只会查询一页的数据
        // console.log(res.data)
        this.setData({
          products: res.data
        })
      })
  },

  onReachBottom() {
    wx.showLoading()
    let page = this.data.page + 20
    productsCollection.skip(page).get()
      .then(res => {
        wx.hideLoading()
        let new_data = res.data
        let old_data = this.data.products
        this.setData({
          products: old_data.concat(new_data),
          page
        })
      })
    this.setData({
      page
    })
  },

  onPullDownRefreash() {
    productsCollection.get()
      .then(res => {
        this.setData({
          page: 0,
          products: res.data
        }, req => {
          wx.stopPullDownRefresh()
        })
      })
  }
})