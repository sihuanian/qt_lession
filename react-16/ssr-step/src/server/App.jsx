import React, { Component } from 'react'
import { renderRoutes } from 'react-router-config'
import Header from '../components/Header'

class App extends Component {
  render() {
    const props = this.props
    return (
      <div>
        <Header></Header>
        App
        {/* 把命中的子路由再在这里渲染一次 */}
        { renderRoutes(props.route.routes) }
      </div>
    )
  }
}

export default App