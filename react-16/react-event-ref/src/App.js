import React from 'react';
import logo from './logo.svg';
import './App.css';

class Button extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      red: true
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick () {
    console.log(this.state)
  }
  render () {
    // render 高频触发
    const { abc } = this.props
    const { red } = this.state 
    // this.props.children => vue slot 标签中的内容
    return(
      <button onClick={this.handleClick} style={{color: red ? 'red' : 'blue'}}>
        { this.props.children }
      </button>
    )
  }
}
function App() {
  return (
    <div className="App">
      <Button abc="123">登录</Button>
      <Button abc="456">注册</Button>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
