##  class 组件 
- wrapper hell
ReactRouter(connect(App))

## hooks
- hooks让wrapper hell 扁平化
- 以use 开头
- useEffect 默认情况下，React 会在每次渲染后调用副作用函数 —— 包括第一次渲染的时候。

## Hook 就是 JavaScript 函数，但是使用它们会有两个额外的规则：

1. 只能在函数最外层调用 Hook。不要在循环、条件判断或者子函数中调用。
2. 只能在 React 的函数组件中调用 Hook。不要在其他 JavaScript 函数中调用。（还有一个地方可以调用 Hook —— 就是自定义的 Hook 中，我们稍后会学习到。）

- 这两个组件的 state 是完全独立的。Hook 是一种复用状态逻辑的方式，它不复用 state 本身。事实上 Hook 的每次调用都有一个完全独立的 state —— 因此你可以在单个组件中多次调用同一个自定义 Hook。

## useEffect
1. 默认情况下，它在第一次渲染之后和每次更新之后都会执行。