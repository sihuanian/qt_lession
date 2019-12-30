import React, { useState, useEffect,
  useRef, useContext
} from 'react';

// React.createContext
const Context = React.createContext('red');
// let preCount = 0;
function PrevState() {
  // red
  let state = useContext(Context);
  let [ count, setCount ] = useState(0);
  let obj = { current: 123 }
  // let refInterval = useRef();
  let ref = useRef(); // {current: '' }
  // 每次useRef 返回的 current 值，
  // 都是上一次current
  // useEffect(() => {
  //   preCount = count;
  // })
  useEffect(() => {
    ref.current = count;
  })
  useEffect(() => {
    setInterval(() => {
      // count 值 是初始的
      // count 变化 影响不了这里
      count = count + 1;
      console.log('count:', count);
      // setCount(count + 1);
      // refInterval.current();
      // setCount(count => count + 1)
      setCount(count);
      // 定义成 函数，count 就是最新的 count
    }, 1000);
  }, [])
  // 对比 前后两次 数组里面的值

  // 
  // useEffect(() => {
  //   refInterval.current = function() {
  //     setCount(count + 1);
  //   }
  // })


  const preCount = ref.current;
  console.log(state);
  return (
    <Context.Provider value={{ theme: 'red' }}>
    <div>
      <button onClick={() => {
        count++
        setCount(count);
      }}>count++</button>
     count: {count}
     preCount: {preCount}
    </div>
    <div>
      {/* Consumer
      useContext
      */}
      <p>{state}</p>
    </div>
    </Context.Provider>
  )
}
export default PrevState
