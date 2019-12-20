import React, { Component } from 'react';
import { getCommentList } from '../../store/action/homeAction'
import { connect } from 'react-redux'
class Home extends Component {
  constructor() {
    super()
    // window.scrollTo(0)
  }
  // 组件已经挂载
  // 服务端 没有组件的全部的生命周期
  // 浏览器里面
  componentDidMount() {
    this.props.getCommentList()
  }
  render() { 
    const { commentList } = this.props
    return ( 
      <div>
        home
        {
          commentList.map((comment, i) => {
            return (
              <li key={comment.content}>{comment.content}</li>
            )
          })
        }
      </div>
     );
  }
}

const mapStateToProps = (state) => {
  // 把dispatch-action 交给客户端
  return {
    commentList: state.home.commentList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCommentList: () => {
      dispatch(getCommentList())
    }
  }
}

/**
 * 服务端返回的页面需要带有数据
 * 数据需要dispatch -> 触发
 * 客户端 mapDispatchToProps -> 交给组件
 * 服务端 把这个dispatch 放在 loadData 静态属性上面
*/
Home.loadData = function (store) {
  // 所有的 loadData 都是promise, Promise.all[所有的promise]
  // getCommentList 是一个action
  // dispatch 从哪里获取
  return store.dispatch(getCommentList())
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Home);
