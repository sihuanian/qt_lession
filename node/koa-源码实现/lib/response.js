const response = {
  // get body时返回这个方法的返回值
  get body () {
    return this._body
  },
  set body (value) {
    this.res.statusCode = 200 // 请求成功都会返回数据给浏览器
    this._body = value // set 时先保存该方法
  }
}

module.exports = response
