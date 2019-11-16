import React, { useState } from 'react'
import { hot } from 'react-hot-loader'
// import './app.scss'
import styleObj from './app.scss' // 引入模块化样式

class App extends React.Component {
	render () {
		return (
			<div>
				{/* 使用模块化的样式 */}
				<p className={styleObj.item}>7416</p>
				<h2>我在等世上唯一契合的灵魂</h2>
				<img src="images/83667-1920x1200.jpg" alt="公共资源"/>
        1234
			</div>
		)
	}
}
// app下面更改，会热启动
export default hot(module)(App)
// export default App;
