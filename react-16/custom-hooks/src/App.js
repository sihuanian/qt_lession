import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Input1 from './input1'
import WidthHoc from './WidthHoc'

/**
 * useState
 * useMemo: 缓存值
 * useCallback：缓存函数
 * useReducer： dispatch -> action -> reducer -> state
 */

function Width({ windowWidth }) {
  return (
    <h2>
      { windowWidth }
    </h2>
  )
}

const WidthWindowWidth = WidthHoc(Width)

// hooks
function useWidth() {
  const [width, setWidth] = useState(Window.innerWidth)
  useEffect(() => {
    // componentDidMount componentDidUpdate
    function changeWidth() {
      setWidth(window.innerWidth)
    }
    window.addEventListener('resize', changeWidth)
    return () => {
      // componentWillUnmount 
      window.removeEventListener('resize', changeWidth)
    }
  })
  
  return width
}

function Width2() {
  const width = useWidth() // width动态改变（窗口大小）
  return (
    <h3>{ width }</h3>
  )
}

function App() {
  return (
    <div className="App">
      <Input1 />
      <WidthWindowWidth />
      <Width2 />
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
