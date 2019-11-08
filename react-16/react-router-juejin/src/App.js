import React, { Component } from 'react';
import reactDom from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import { createStore } from 'redux'
import Layout from './Layout'
// 一切皆组件
// react-router  1. dom  2. native  3. 内存

// 决定store 是什么样子 dispatch -> action -> reducer -> store
// state 就是上一份 state
// action 就是提交过来的
function reducer (state, action) {
  if (!state) {
    return {
      count: 4
    }
  }
  const { count } = state
  if (action.type === 'ADD') {
    // 不可变数据 返回全新的对象
    return {
      count: count + 1
    }
  }
  if (action.type === 'SUB') {
    // 不可变数据 返回全新的对象
    return {
      count: count - 1
    }
  }
}

const store = createStore(reducer)

class Counter extends Component {
  add = () => {
    store.dispatch({
      type: 'ADD'
    })
  }
  sub = () => {
    store.dispatch({
      type: 'SUB'
    })
  }
  render () {
    console.log('store', store.getState().count)
    return (
      <div>
        count: {store.getState().count}
        <button onClick={this.add}>+</button>
        <button onClick={this.sub}>-</button>
      </div>
    )
  }
}

// store 中的数据改变，重新加载counter 组件
store.subscribe(() => {
  reactDom.render(<Counter />, document.getElementById('root'))
})

reactDom.render(<Counter />, document.getElementById('root'))

class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Route path="/" component={Layout} />
      </BrowserRouter>
    )
  }
}

export default App;
