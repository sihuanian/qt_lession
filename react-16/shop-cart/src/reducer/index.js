import { combineReducers } from 'redux'
import shopCart from './shopCart'
import filter from './filter'

export default combineReducers({
  shopCart,
  filter
})