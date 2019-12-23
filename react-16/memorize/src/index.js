import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// 纯函数缓存，同样的输入有同样的输出
const map = new Map() // 缓存容器

function add(a, b) {
  const key = JSON.stringify(Array.from(arguments))
  if (map.has(key)) {
    return map.get(key)
  }
  const res = a + b
  map.set(key, res)
  return res
}

function reduce(c, d) {
  return c - d
}

function memorize(fn) {
  let map1 = new Map()
  return function(...args) {
    let key = JSON.stringify(args)
    if (map1.get(key)) {
      return map1.get(key)
    }
    let res = fn(...args)
    map1.set(key, res)
    return res
  }
}

const mReduce = memorize(reduce)
mReduce(3, 2)