import React, { Component } from 'react'
import './App.css'
import { connect } from 'react-redux'

class App extends Component {
  state = {  }

  handleCheck = (e, index) => {
    const checked = e.target.checked
    // dispatch
    this.props.checked(checked, index)
  }

  minus = () => {

  }

  add = () => {

  }

  render() {
    const { shopCart } = this.props
    return (
      <div>
        {
          shopCart.map((good, index) => {
            return (
              <div key={index}>
                {/* <label htmlFor=""></label> */}
                <input type="checkbox" checked={good.checked} onChange={(e) => {
                  this.handleCheck(e, index)
                }} />
                <label>
                  {good.name} - RMB: {good.price}
                </label>
                <button onClick={this.minus}>-</button>
                {good.count}
                <button onClick={this.add}>+</button>
                <button onClick={() => {
                  this.props.handleDel(index)
                }}>delete</button>
              </div>
            )
          })
        }
      </div>
    )
  }
}

const mapstateToProps = (state) => {
  return {
    shopCart: state.shopCart
  }
}

const del = (i) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({
        type: 'DEL',
        index: i
      })
    }, 2000)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    checked (checked, index) {
      const action = {
        type: 'TOGGLE_CHECKED',
        checked,
        index
      }     
      dispatch(action)
    },
    // countAdd () {
    //   const action = {
    //     type: 'ADD'
    //   }
    //   dispatch(action)
    // },
    // countMinus () {
    //   const action = {
    //     type: 'MINUS'
    //   }
    //   dispatch(action)
    // }
    handleDel (index) {
      dispatch(del(index))
    }
  }
}

// 将store 中的数据通过过滤传给App
export default connect(mapstateToProps, mapDispatchToProps)(App)