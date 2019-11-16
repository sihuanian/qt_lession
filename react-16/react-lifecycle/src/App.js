import React, { Component } from 'react'
import './App.css'
import Child1 from './Child1'
import Parent from './Parent'


class App extends Component {
  state = { 
    list: [1, 2, 3],
    show: false
  }
  componentDidMount() {
    setTimeout(() => {
      let list = this.state.list
      list.push(4)
      this.setState({
        list
      })
    }, 1000)
  }
  render() {
    let { show,list } = this.state
    return (
      <>
        <Parent />
        <button onClick={() => {
          this.setState({
            show: !show
          })
        }}>卸载child1</button>
        {
          !show ? <Child1 list={list} /> : null
        }
      </>
    )
  }
}

export default App
