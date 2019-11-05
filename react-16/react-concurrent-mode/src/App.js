import React from 'react'
// 强制以最高优先级
import { flushSync } from 'react-dom'
import './App.css'

class Grid extends React.Component {
  state = {
    async: true,
    num: 1,
    length: 2000,
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.updateNum()
    }, 100);
  }

  componentWillUnmount() {
  }

  updateNum() {
    const newNum = this.state.num === 5 ? 0 : this.state.num + 1
    flushSync(() => {
      this.setState({
        num: newNum,
      })
    })
  }

  render() {
    const children = []

    const { length, num, async } = this.state

    for (let i = 0; i < length; i++) {
      children.push(
        <div className="item" key={i}>
          {num}
        </div>,
      )
    }

    return (
      <div className="main">
        async:{' '}
        <input
          type="checkbox"
          checked={async}
        />
        <div className="wrapper">{children}</div>
      </div>
    )
  }
}

class App extends React.Component {
  render () {
    return (
      <>
        <React.unstable_ConcurrentMode>
          <Grid />
        </React.unstable_ConcurrentMode>
      </>
    )
  }
}

export default App;
