import React, { Component } from 'react'

// 每个组件都需要屏幕宽度
// hoc
// withWidth(<Header />)
// this.props.windowWidth => width
export default function WidthWindowWidth(Com) {
  return class WithWindowWidth extends Component {
    state = {
      width: window.innerWidth
    }

    componentDidMount() {
      window.addEventListener('resize', () => {
        this.setState({
          width: window.innerWidth
        })
      })
    }

    render() {
      return (
        <>
          <Com windowWidth={this.state.width} />
        </>
      )
    }
  }
}