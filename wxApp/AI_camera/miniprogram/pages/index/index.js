//index.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // userinfo: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (app && app.globalData && app.globalData.userinfo) {
      this.setUserInfo(app.globalData)
    }

  },

  start() {
    wx.navigateTo({
      url: '/pages/detect/detect'
    })
  },

  setUserInfo(info) {
    // MVVM
    this.setData({
      userinfo: info ? info.userinfo : null
    })
  },

  getUserInfo(e) {
    console.log(e)
    try {
      let info = null
      if (e && e.detail && e.detail.userInfo) {
        let {detail: {userInfo}} = e
        info = {userinfo: {
          nickname: userInfo.nickName,
          avatarUrl: userInfo.avatarUrl
        }}
        this.setData(info)
        app.globalData.userinfo = this.data.userinfo
      }
    } catch(e) {
      console.log(e)
      wx.showModal({
        title: '登录失败，请重试！',
        icon: "none",
        mask: true
      })
    }
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