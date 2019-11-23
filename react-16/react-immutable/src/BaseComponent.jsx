import React, { Component } from 'react'
import { is } from 'immutable'

class BaseComponent extends Component {
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    const thisProps = this.props || {}
    if (Object.keys(thisProps).length !== Object.keys(nextProps).length) {
      return true
    }
    // 判断属性是否相等
    // css in js
    // stylus css预处理器
    // css-module .text   -> .test-hash
    // css in js 样式定义组件 css 变量js 变量共享
    for (const key in nextProps) {
      if (!is(thisProps[key], nextProps[key])) {
        return true
      }
    }
    return false
  }
}

export default BaseComponent;