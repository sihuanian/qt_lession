import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

// <PrivateRoute path="/write" component="" />
class PrivateRoute extends Component {
  state = {  }
  render() {
    const { login, Com, children, ...restProps } = this.props
    console.log(login)
    return (
      <Route {...restProps} render={() => {
        if (login) {
          // return <Com />
          return children
        } else {
          return <Redirect to="/" />
        }
      }} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.getIn(['login', 'login'])
  }
}

export default connect(mapStateToProps)(PrivateRoute)