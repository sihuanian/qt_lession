import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer/index'

export const getClientStore = () => {
  return createStore(reducer, applyMiddleware(thunk))
}
export const getServerStore = () => {
  return createStore(reducer, applyMiddleware(thunk))
}