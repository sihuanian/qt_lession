// pages/discovery/discovery.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lessons: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that = this
    wx.request({
      url: 'https://www.easy-mock.com/mock/5d2ed7f18a035669a02b4d3c/movie/discovery',
      // url: '../../assets/data/discovery.json',
      success (res) {
        console.log(res.data.data.lessons)
        that.setData({
          lessons: res.data.data.lessons
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