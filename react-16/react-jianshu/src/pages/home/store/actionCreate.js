import axios from 'axios'
import * as constants from './constant'

// redux-thunk action 返回一个函数
export const getHomeInfo = () => {
  return dispatch => {
    axios.get('/api/home.json')
      .then(res => {
        const result = res.data.data
        dispatch({
          type: constants.CHANGE_HOME_DATA,
          topicList: result.topicList,
          articleList: result.articleList,
          recommendList: result.recommendList
        })
      })
  }
}