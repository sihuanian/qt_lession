import React, { Component } from 'react'
import './progress.css'

export default class SlideProgress extends Component {
	state = {
		value: 0
	}
	static getDerivedStateFromProps(props) {
		// porps -> state
		return {
			value: props.value
		}
	}

	componentDidMount() {
		// string ref
		console.log(this.refs.ref1)
		// function ref
		// object ref
		console.log(this.objRef)
		this.progressBtn.current.addEventListener('touchstart', e => {
			const touch = e.touches[0]
      this.startX = touch.clientX
      this.btnLeft = parseInt(this.progressBtn.current.style.left || 0)
		})
		this.progressBtn.current.addEventListener('touchmove', e => {
			const touch = e.touches[0]
			this.endX = touch.clientX
      const diffX = this.endX - this.startX
      let move = diffX + this.btnLeft
      if (move > 300) {
        move = 300
      } else if (move < 0) {
        move = 0
      }
      this.progressBtn.current.style.left = move + 'px'
      let precent = move / this.objRef.current.offsetWidth
      this.props.onChange(precent)
      this.progressBtn.current.width = precent + '%'
		})
		this.progressBtn.current.addEventListener('touchend', e => {})
	}

	objRef = React.createRef() // object ref
	progressRef = React.createRef()
	progressBtn = React.createRef()

	render() {
		const { value } = this.state
		console.log(value)
		return (
			<div
				className="progressBar"
				ref="ref1"
				ref={ref2 => {
					this.ref2 = ref2
				}}
				ref={this.objRef}
			>
				<div
					className="progress"
					ref={this.progressRef}
					style={{ width: '' }}
				></div>
				<div
					className="progressBtn"
					ref={this.progressBtn}
					style={{ left: '' }}
				></div>
			</div>
		)
	}
}
