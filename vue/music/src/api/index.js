import Vue from 'vue'
import axios from 'axios'

const vue = new Vue()

// axios的默认配置
axios.defaults.timeout = 10000 // 请求超时时间
axios.defaults.baseUrl = 'http://localhost:3000'

// 返回状态判断(响应拦截器)
axios.interceptors.response.use(res => {
  if (res.data.code !== 200) {
    alert('网络异常')
    return Promise.reject(res)
  }
  return res
}, error => {
  alert('网络异常')
  return Promise.reject(error)
})

export function fetchGet (url, param) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: param
    })
    .then(response => {
      resolve(response.data)
    }, err => {
      reject(err)
    })
    .catch(() => {
      reject(error)
    })
  })
}

export default {
  // 用户登录
  Lonin (params) {
    return fetchGet('/login', params)
  }
}