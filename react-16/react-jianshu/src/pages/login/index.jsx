import React, { Component } from 'react'
import * as actionCreators from './store/actionCreators'
import { connect } from 'react-redux'

import { 
  LoginWrapper,
  LoginBox,
  Input,
  Button
} from './style'

class Login extends Component {
  state = {  }
  userName = React.createRef()
  password = React.createRef()
  render() {
    return (
      <LoginWrapper>
        <LoginBox>
          <Input placeholder="账号" ref={this.userName} />
          <Input placeholder="密码" type="password" ref={this.password} />
          <Button onClick={() => {
            console.log(this.userName.current.value)
            console.log(this.password.current.value)
            this.props.login()
          }}>登录</Button>
        </LoginBox>
      </LoginWrapper>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login() {
      dispatch(actionCreators.changeLoginStatus(true))
    }
  }
}

export default connect(null, mapDispatchToProps)(Login)