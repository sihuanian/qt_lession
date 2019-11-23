import React, { Component } from 'react'
import { is } from 'immutable'
 
class Header extends Component {
  state = {  }
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    const thisProps = this.props || {}
    if (Object.keys(thisProps).length !== Object.keys(nextProps).length) {
      return true
    }
    // 判断属性是否相等
    for (const key in nextProps) {
      if (!is(thisProps[key], nextProps[key])) {
        return true
      }
    }
    // if (thisProps.value === nextProps.value) {
    //   return false
    // }
    return false
  }
  render() {
    window.c ++
    return (
      <div>
        {this.props.value}
      </div>  
    )
  }
}

export default Header