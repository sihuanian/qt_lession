import React from 'react';
import logo from './logo.svg';
import './App.css';

// function 组件
export function App() {
  return (
    <div className="App">
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

// 命令式的
const arr1 = [1, 2, 3]
const arr2 = []
for (const i of arr1) {
  arr2.push(2 * i)
}

// 申明式
// const arr3 = arr1.map(i => i * 2)

const Text = (
  <p>这是一段文本</p>
)

class Child extends React.Component {
  render() {
    return (
      <div>
        Child
      </div>
    )
  }
}
// class 组件
export class Button extends React.Component {
  // jsx == 一段 html
  // <> </> 最外层容器 全称 <React.Fragment>
  // 数组会自动展开
  render () {
    return (
      <React.Fragment>
        <button>
        点击一下
        {
          true ?
          (<span>已登录</span>) : (<span>未登录</span>)
        }
        </button>
        <div>
          { arr1 }
          { arr1.map((i, index) => <li key={index}>{ i }</li>) }
          { Text }
          < Child />
        </div>
      </React.Fragment>
    )
  }
}

// export default App;
// export default Button