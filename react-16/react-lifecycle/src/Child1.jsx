import React, { Component } from 'react'

class Child1 extends Component {
  state = { 
    data: 1
  }
  // UNSAFE_componentWillMount
  componentWillMount() {
    const { list } = this.props
    console.log('componentWillMount')
    this.setState({
      list
    })
  }
  componentDidMount() {
    console.log('componentDidMount')
    this.timer = setInterval(() => {
      console.log(123)
      let list = this.state.list.slice()
      list.push(10)
      this.setState({
        list
      })
    }, 1000) 
  }
  // 性能优化，组件（界面s）更新策略
  shouldComponentUpdate (nextProps, nextState) {
    console.log(nextProps, nextState)
    // if (this.state.data < 3) {
    //   return false
    // } else {
    return true
    // }
  }
  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps', nextProps, this.props)
    let list = this.state.list.slice()
    list.splice(0, 3, ...(nextProps.list))
    this.setState({
      list
    })
  }
  componentWillUnmount () {
    // 清理操作 定时器 全局绑定的方法
    clearInterval(this.timer)
  }
  update = () => {
    let { data } = this.state
    console.log(data)
    this.setState({
      data: ++data
    })
  }
  render() {
    return (
      <div onClick={this.update}>
        Child1: {this.state.data}
        <ul>
          {
            this.state.list.map((el, index) => {
              return (
                <li key={index}>{el}</li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default Child1