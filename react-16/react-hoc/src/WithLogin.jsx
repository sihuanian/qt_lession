// 高阶组件以 With 开头
import React, { Component } from 'react'
// 高阶组件是参数为组件，返回值为新组件的函数。
export default function (Com) {
  class WithLogin extends Component {
    state = { isLogin: false }
    render() {
      const { isLogin } = this.state
      if (isLogin) {
        return <Com />
      }
      return (
        <button onClick={() => {
          this.setState({
            isLogin: true
          })
        }}>login</button>
      )
    }
  }
  return WithLogin
}