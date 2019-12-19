import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { Provider } from 'react-redux'
import routers from '../routers'
import Header from '../components/Header'
import { getClientStore } from '../store/index'

const App = function() {
	return (
		<Provider store={getClientStore()}>
			<BrowserRouter>
				{/* <Header></Header> */}
				<div>{renderRoutes(routers)}</div>
			</BrowserRouter>
		</Provider>
	)
}

// 复用已有的html 负责事件绑定
ReactDom.hydrate(<App />, document.getElementById('app'))
