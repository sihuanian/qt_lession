import React, { useState, useEffect, useMemo } from 'react';
import ReactDOM from 'react-dom';

let _state
function myUseState(initState) {
  _state = _state || initState
  function setState(newState) {
    _state = newState
    // 重新渲染
    render()
  }
  return [_state, setState]
}

function myUseEffect(cb, args) {
  const hasChange = args && args.some((arg, index) => {
    return arg !== _deps.args[index]
  })
  if (hasChange || !_deps.args) {
    cb()
    _deps.args = args
  }
}

function myUseMemo(cb, args) {
  const hasChange = args && args.some((arg, index) => (
    _depsMemo.args && arg !==  _depsMemo.args[index]
  ))
  if (hasChange || !_depsMemo.args) {
    cb()
    _depsMemo.value = cb()
    _depsMemo.args = args
    return _depsMemo.value
  }
  return _depsMemo.value
}

// useCallback 是通过useMemo 来实现的
function myUseCallback(cb, args) {
  return myUseMemo(() => cb(), args)
}

let _deps = {
  args: null
}

let _depsMemo = {
  args: null,
  value: null
}

function Counter() {
  const [ count, setCount ] = myUseState(0)
  // 每次render 为什么不为零
  // count 存起来了，闭包
  console.log(count)
  myUseEffect(() => {
    console.log('did mount')
  }, [])
  let res = myUseMemo(() => {
    return count + 1
  }, [count])
  return (
    <div>
      count: { count }
      <br/>
      res: { res }
      <button onClick={() => {
        setCount(Math.random())
      }}>btn</button>
    </div>
  )
}

render()
function render() {
  ReactDOM.render(<Counter />, document.getElementById('root'));
}
