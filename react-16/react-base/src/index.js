// ui
import React, { Component } from 'react'
// 平台相关 渲染到浏览器上
import ReactDOM from 'react-dom'
import './index.css'
// import {App, Button} from './App'
import Comment from './Comment'
import * as serviceWorker from './serviceWorker'
import { createStore } from 'redux'

// 生成默认值，后续dispatch -> action -> reducer -> store
function discuss (state, action) {
  // console.log(state, action)
  switch (action.type) {
    case 'PUSH_DIS':
      return [ // 不可变数据
        ...state,
        action.content
      ]
    default: 
      return []
  }
}
const store = createStore(discuss)
let count = 0
const timer = setInterval(() => {
  count++
  store.dispatch({
    type: 'PUSH_DIS',
    content: '评论' + count
  })
}, 1000)

setTimeout(() => clearInterval(timer), 10000)
class List extends Component {
  state = {  }
  render() {
    return (
      <div>
        {
          store.getState().map((dis, index) => {
            return (
              <li key={index}>{dis}</li>
            )
          })
        }
      </div>
    )
  }
}
store.subscribe(() => {
  ReactDOM.render(<List />, document.getElementById('root'))
})
// ReactDOM.render(<App />, document.getElementById('root'))
// ReactDOM.render(<Button />, document.getElementById('root'))
// ReactDOM.render(<Comment />, document.getElementById('root'))
ReactDOM.render(<List />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
