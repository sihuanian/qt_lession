import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://neteasecloudmusicapi.zhaoboy.com'
})

// 拦截响应返回来的数据只要res.data
axiosInstance.interceptors.response.use(
  res => res.data,
  err => {
    console.log(err, '网络错误')
  }
)

// 轮播图图片
export const getBannerRequest = () => {
  return axiosInstance.get("/banner");
};

// /recommend 页面下的推荐列表
export const getRecommendListRequest = () => {
  return axiosInstance.get("/personalized");
};
