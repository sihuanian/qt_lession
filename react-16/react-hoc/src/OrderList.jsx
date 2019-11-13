import React, { Component } from 'react'
import WithLogin from './WithLogin'

@WithLogin
class OrderList extends Component {
  render() {
    return (  
      <ul>
        <li>IPad</li>
        <li>MAC</li>
      </ul>
    )
  }
}

// export default WithLogin(OrderList)
export default OrderList
