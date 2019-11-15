import React, { Component } from 'react'
import { Spin } from 'antd'

// 节流

/* 
let pre = 0,
  timer = null
function fetch () {
  let now = Date.now()
  if (now - pre >= wait) {
    console.log(123)
  }
}
btn.mouseMove = fetch
btn1.mouseMove = fetch1
// 过程 抽象
// 高阶函数
function myThrotle (func, await) {
  let pre = null,
    timer = null
  return function (...args) {
    let now = Date.now()
    if (pre && now - pre >= await) {
      clearInterval(timer)
      pre = now
    }
    timer = setInterval(func, await, ...args)
  }
}
*/


export default function (Com) {
  return class withLoding extends Component {
    // withRouter
    state = { isLoding: false }
    ref = React.createRef()
    componentDidMount() {
      this.setState({
        isLoding: true
      })
      // console.log(this.ref)
      this.ref.current.initLoading()
        .then(data => {
          this.setState({
            isLoding: false
          })
        })
        .catch((err) => {
          this.setState({
            isLoding: false
          })
        })
    }
    render() {
      let { isLoding } = this.state
        return (
          <Spin spinning={isLoding}>
            {/* 需要传入props */}
            <Com ref={this.ref} {...this.props} from="fromWithLoading" />
          </Spin>
        )
    }
  }
  // return withLoding
}