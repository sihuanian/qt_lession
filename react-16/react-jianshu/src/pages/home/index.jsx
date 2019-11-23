import React from 'react'
import BaseComponent from '../../lib/BaseComponent'
import { HomeWrapper, HomeLeft } from './style'
import { connect } from 'react-redux'
import { actionCreators } from './store/index'

class Home extends BaseComponent {
  state = {  }

  componentDidMount () {
    this.props.changeHomeData()
  }

  render () {
    return (
      <>
        <HomeWrapper>
          <HomeLeft>
            <img className='banner-img'
            alt=''
              src="//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
          </HomeLeft>
        </HomeWrapper>
      </>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeHomeData () {
      // redux-thunk action : {} -> function() {}
      dispatch(actionCreators.getHomeInfo())
    }
  }
}

export default connect(null, mapDispatchToProps)(Home)