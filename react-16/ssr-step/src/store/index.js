import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer/index'

export const getClientStore = () => {
  const defaultStore = window.__context__ || {}
  // 第二个参数是store 的默认值
  return createStore(reducer, defaultStore.state, applyMiddleware(thunk))
}
export const getServerStore = () => {
  return createStore(reducer, applyMiddleware(thunk))
}