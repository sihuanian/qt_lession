import React, { useMemo, useState, useCallback, useEffect } from 'react';
import './App.css';


let set1 = new Set()
let set2 = new Set()
// 无状态组件
function App () {
  // state: { count: 0 }
  let [count, setCount] = useState(0)
  let [time, setTime ] = useState(0)
  // const calculate = count + ',' + time
  // [count] 不变化 calculate不会变化,依据count 缓存，count 不变化，就不会计算
  const calculate = useMemo(() => count + ',' + time, [count, time])
  const fn1 = () => count + ',' + time
  // useCallback 
  // const fn2 = useCallback(() => count + ',' + time, [count])
  const fn2 = useCallback(() => count + ',' + time, [count, time])

  set1.add(fn1)
  set2.add(fn2)

  // 模拟生命周期 componentDidMount componentDidUpdate
  useEffect(() => {
    console.log(123); // componentDidMount componentDidUpdate
    return () => {
      // return 部分当做componentWillUnMount 卸载
      // 每次组件重新渲染都会卸执行
      // clear
      console.log('卸载')
    }
  })

  return (
    <div>
      <div>count: {count}</div>
      <div>time: {time}</div>
      <div>calculate: {calculate}</div>
      <div>{set1.size} vs {set2.size}</div>
      <button onClick={() => {
        setCount(++count)
      }}>count ++</button>
      <button onClick={() => {
        setTime(Date.now())
      }}>time change</button>
    </div>
  )
}

export default App;
