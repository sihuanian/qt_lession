import React from 'react'
// router 1. hash 2. history  BrowserRouter history实现路由
import { BrowserRouter, HashRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import './App.css'
import BaseComponent from './lib/BaseComponent'
import store from './store/index'
import Home from './pages/home/index'
import Header from './common/header/index'
import './statics/iconfont/iconfont'
import PrivateRoute from './lib/PrivateRoute.jsx'
import Login from './pages/login/index'

function Write() {
  return (
    <div>写文章页面</div>
  )
}

class App extends BaseComponent {
  state = {  }
  render() {
    return (
      <Provider store={store}>
        {/* BrowserRouter保存了全局的路由信息 */}
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path='/' component={Home}></Route>
            {/* <PrivateRoute path="/write" Com={Write} /> */}
            <Route path="/login" component={Login} />
            <PrivateRoute path="/write">
              <Write />
            </PrivateRoute>
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App
