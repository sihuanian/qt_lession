import Vue from 'vue'
import axios from 'axios'

const vue = new Vue()

// axios的默认配置
axios.defaults.timeout = 10000 // 请求超时时间
axios.defaults.baseURL = 'http://localhost:3000'

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
  },
  // 歌单
  DiscLists (params) {
    return fetchGet('/top/playlist', params)
  },
  // 歌单详情
  SongList (params) {
    return fetchGet('/playlist/detail', params)
  },
  // 歌曲搜索
  MusicSearch (params) {
    return fetchGet('/search', params)
  },
  // 热搜
  HotSearch () {
    return fetchGet('/search/hot')
  },
  // 歌词
  MusicLyric (id) {
    return fetchGet('/lyric', { id })
  },
  // 歌曲链接
  MusicUrl (id) {
    return fetchGet('/song/url', { id })
  }
}