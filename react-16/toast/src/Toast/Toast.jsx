import React, { Component } from 'react'
import ReactDom  from 'react-dom'
import './toast.css'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

let key = 0
class Toast extends Component {
  state = { 
    toastList: []
  }
  addNotice (icon, content, duration) {
    // console.log(1)
    const item = {icon, content, duration}
    let toastList = this.state.toastList.slice()
    toastList.push(item)
    this.setState({
      toastList
    })
    setTimeout(() => {
      let toastList1 = this.state.toastList.slice()
      let index = toastList1.findIndex((item) => item.key === key)
      toastList1.splice(index, 1)
      this.setState({
        toastList: toastList1
      })
    }, duration)
  }
  render() {
    const { toastList } = this.state
    return (
      <>
      <TransitionGroup>
      {
        toastList.map((toast) => {
          return (
            // <Notice {...toast}></Notice>
            <CSSTransition key={toast.key} classNames="notice" timeout={300}>
              <li key={key}>{toast.icon}: {toast.content}</li>
            </CSSTransition>
          )
        })
      }
      </TransitionGroup>
      </>
    )
  }
}
let instance = null
export default {
  addNotice: function (icon, content, duration) {
    // ref
    if (instance) {
      return instance.addNotice(icon, content, duration)
    }
    key++
    let div = document.createElement('div')
    document.body.appendChild(div)
    // setTimeout(() => {
    //   document.body.removeChild(div)
    // }, duration)
    let objRef = React.createRef()
    // 获取组件的实例
    ReactDom.render(<Toast ref={objRef} />, div)
    instance = objRef.current
    return objRef.current.addNotice(icon, content, duration)
  }
}