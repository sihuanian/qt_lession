import React, { Component } from 'react'
import Context from './Context'
const { Consumer } = Context

class SubSon extends Component {
	state = {}
	render() {
		return (
			<div>
				<Consumer>
          {/* 需要一个方法 */}
					{(theme) => {
						return <p style={{color: theme}}>我在等世上唯一契合的灵魂</p>
					}}
				</Consumer>
				SubSon
			</div>
		)
	}
}

export default SubSon
