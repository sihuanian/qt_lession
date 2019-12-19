import React, { Component } from 'react';
import { getCommentList } from '../../store/action/homeAction'
import { connect } from 'react-redux'
class Home extends Component {
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
 
export default connect(mapStateToProps, mapDispatchToProps)(Home);
