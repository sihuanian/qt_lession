import React, { Component } from 'react'
import './base.css'

class Input extends Component {
  // 静态属性
  state = {
    value: ''
  }
  handleChange = (e) => {
    const value = e.target.value
    this.setState({
      value
    })
  }
  // 单向数据流
  // input 受控组件  完全受state.value 的控制
  handleSubmit = () => {
    const { value } = this.state
    const { onReceive } = this.props // 接收父组件传递的数据
    onReceive(value) // 调用父组件的方法
    console.log('输入的值', value)
    this.setState({
      value: ''
    })
  }
  render() {
    const { value } = this.state
    return (
      <>
        <input type="text" onChange={this.handleChange} value={value} />
        <button onClick={this.handleSubmit}>submit</button>
      </>
    )
  }
}

class CommentList extends Component {
  render() {
    const { clist } = this.props // props 父组件传过来的数据
    return (
      <>
        {
          clist.map((list, index) => {
            return (
              <li key={index}>
                {list.content}
              </li>
            )
          })
        }
      </>
    )
  }
}

class Comment extends Component {
  state = {
    clist: [
      { content: '666' },
      { content: '777' },
      { content: '888' }
    ] // 讨论的列表
  }
  handleReceiveComment = (commentContent) => {
    console.log('子组件调用，输入的值', commentContent)
    // 不可变数据
    let clist = this.state.clist.slice()
    clist.push({content: commentContent})
    this.setState({
      // clist: this.state.clist.push({content: commentContent})
      clist
    })
  }
  render() {
    const { clist } = this.state
    // onReceive 将函数传递给子组件
    return(
      <>
        <Input onReceive={this.handleReceiveComment} />
        <CommentList clist={clist} />
      </>
    )
  }
}

export default Comment