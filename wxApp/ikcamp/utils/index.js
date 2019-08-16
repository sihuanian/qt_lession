import config from './config'
import * as Mock from './mock'

let util = {
  isDEV: config.isDev,
  log() {
    this.isDEV && console.log(...arguments)
  },
  alert(title = '提示', content = config.defaultAlertMessage) {
    if ('object' === typeof content) {
      content = this.isDEV && JSON.stringify(content) || config.defaultAlertMessage
    }
    wx.showModal({
      title,
      content
    })
  },
  setStorageData(key, value = '', cb) {
    wx.setStorage({
      key,
      data: value,
      success() {
        cb && cb()
      }
    })
  },
  getStorageData(key, cb) {
    wx.getStorage({
      key,
      success(res) {
        cb && cb()
      }
    })
  },
  // 封装wx.request(opt) 方法 mock === true 时为假数据 mock === false时是向接口请求的数据
  request(opt) {
    let {
      url,
      data,
      header,
      method,
      dataType,
      mock = false
    } = opt
    let self = this

    return new Promise((resolve, reject) => {
        if (mock) {
          let res = {
            statusCode: 200,
            data: Mock[url] // 本地的mock.js 是的 list数据
          }
          if (res && res.statusCode == 200 && res.data) {
            resolve(res.data)
          } else {
            self.alert('提示', res)
            reject(res)
          }
        } else {
          wx.request({
            url,
            data,
            header,
            method,
            dataType,
            success(res) {
              if (res && res.statusCode == 200 && res.data) {
                resolve(res)
              } else {
                self.alert('提示', res)
                reject(res)
              }
            },
            fail(err) {
              self.log(err)
              self.alert('提示', err)
              reject(err)
            }
          })
        }
    })
  }
}

export default util
