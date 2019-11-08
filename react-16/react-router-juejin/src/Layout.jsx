import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Guanzhu from './Guanzhu'
import Fe from './Fe'
import Rd from './Rd'
import PriCom from './PriCom'

let isLogin = true

class PrivateRoute extends Component {
  render () {
    return (
    <>
      {isLogin ? <Route {...this.props} /> : 'unAuth'}
    </>
    )
  }
}

function Home () {
  return (
    <div>Home
      <div>
        <Link to="/home">首页</Link>
        <Link to="/home/guanzhu">关注</Link>
        <Link to="/home/fe">前端</Link>
        <Link to="/home/rd">后端</Link>
        <Link to="/home/private">私密</Link>
      </div>
      <div className="main">
        <Route path="/home/guanzhu" component={Guanzhu}></Route>
        <Route path="/home/fe" component={Fe}></Route>
        <Route path="/home/rd" component={Rd}></Route>
        <PrivateRoute path="/home/private" component={PriCom} />
      </div>
    </div>
  )
}

function Me () {
  return (
    <div>Me</div>
  )
}

class Layout extends Component {
  // state = {
  //   isLogin: false
  // }
  // constructor () {
  //   super()
  //   this.state = {
  //     isLogin: false
  //   }
  // }
  render () {
    return (
      <div>
        <div className="main">
          <Route path="/home" component={Home}></Route>
          {isLogin && <Route path="/me" component={Me}></Route>}
        </div>
        <div className="footer">
          <Link to="/home">home</Link>
          {isLogin && <Link to="/me">me</Link>}
        </div>
      </div>
    )
  }
}

export default Layout