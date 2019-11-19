import React, { Component } from 'react'
// hoc
import { connect } from 'react-redux'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { inputText: '' }
  }

  handleChange = (e) => {
    this.setState({
      inputText: e.target.value
    })
  }

  render() {
    // console.log(this.props)
    const { todolist } = this.props
    const { inputText } = this.state
    return (
      <div>
        {
          todolist.map((item, index) => {
            return (
              <li key={index}>
                { item.content }
              </li>
            )
          })
        }
        <div>
          {/* 受控组件 */}
          <input value={inputText} onChange={this.handleChange} />
          <button onClick={() => {
            this.props.addTodo(inputText)
            this.setState({
              inputText: ''
            })
          }}>提交</button>
        </div>
      </div>
    )
  }
}

// state => props <Provide /> 中的state
const mapStateToProps = (state) => {
  return {
    todolist: state
  }
}

// dispatch 的操作到props 
const mapDispatchToProps = (dispatch) => {
  return {
    addTodo (content) {
      dispatch({
        // 这个对象就是action
        type: 'ADD_TODO',
        content,
        complete: false
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
