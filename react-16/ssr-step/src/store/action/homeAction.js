import axios from 'axios'

export const getCommentList  = function () {
  return (dispatch) => {
    axios.get('http://localhost:3003/mapi/comment')
      .then(res => {
        const data = res.data.list
        console.log(data)
        dispatch({
          type: 'HOME_LIST',
          commentList: data
        })
      })
  }
}