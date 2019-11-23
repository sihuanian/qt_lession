import React, { Component } from 'react'
import './App.css';
import immutable from 'immutable'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import ColorRedWrapper from './RedColor'

// 可变
let a = [0, 1, 2]
a.push(3)
// 不可变
// 结构共享
let immutableArr = immutable.fromJS([2, 3, 4])
let b = immutableArr.push(5)
console.log(b.toJS())
console.log(immutableArr.toJS())

let obj = { a: 1, b: { c: 2 }, d: { e: 3} }
let imObj = immutable.fromJS(obj)
console.log(imObj.getIn(['b', 'c'], 'default'))
let imObj1 = imObj.setIn(['d', 'e'], 'ee')
console.log(imObj1)
let obj1 = {
  ...obj,
  b: 2
}

class App extends Component {
  state = { 
    store: imObj
  }

  handleSet = () => {
    let store = this.state.store.setIn(['d', 'e'], this.state.store.getIn(['d', 'e'])+1)
    this.setState({
      store
    })
  }

  render() {
    const { store } = this.state
    return (
      <div>
        <ColorRedWrapper>
          <p>123</p>
          <div>456</div>
        </ColorRedWrapper>
        <button onClick={this.handleSet}>set</button>
        {/* get 获取一个属性 */}
        <Header value={store.get('a')} />
        <Main value={store.get('b')} />
        <Footer value={store.get('d')} />
      </div>
    )
  }
}

export default App
