- AI能力由腾讯云提供
  小程序可以具有云端能力 tcb
  wx.cloud.callFunction

- 人像识别 需要AI能力
  有经验

- app.js 中共享全局数据
  userinfo, 应用的一些配置项 高于 page 被所有的 page 共享

- userinfo
  button[open-type="getUserInfo"]
  第一次询问用户授权
  微信  开发者第三方  用户   
  bindUserInfo="" 回调函数 e.detail 就可以获取用户信息

  登录的持久化 userinfo wx.setStorage()

- 多页面共享部分界面
  - 如果是独立组件，usingComponents
  - 比较简单，没有什么业务逻辑，template 不要重复界面 <import src="" />  <template is="" data="{{}}">
  - 样式怎么办