// pages/discovery/discovery.js
const json = require('./data')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lessons: [],
    index: 0
  },

  changeIndex (e) {
    console.log(e.detail.current)
    this.setData({
      index: e.detail.current
    })
    console.log(this.data.index)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that = this
    wx.request({
      url: 'https://www.easy-mock.com/mock/5d2ed7f18a035669a02b4d3c/movie/discovery',
      success (res) {
        console.log(res.data.data.lessons)
        that.setData({
          lessons: res.data.data.lessons,
          article: res.data.data.article
        })
      },
      fail () {
        that.setData({
          lessons: json.lessons,
          article: json.article
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})