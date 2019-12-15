import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import routers from '../routers'
import Header from '../components/Header'

const App = function() {
  return (
    <BrowserRouter>
      {/* <Header></Header> */}
      <div>
        { renderRoutes(routers) }
      </div>
    </BrowserRouter>
  )
}

// 复用已有的html 负责事件绑定
ReactDom.hydrate(<App />, document.getElementById('app'))
