import { combineReducers } from 'redux-immutable'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import homeReducer from '../pages/home/store/reducer'
import headerReducer from '../common/header/store/reducer'
import loginReducer from '../pages/login/store/reducer'

// immutable化的reducer
const reducer = combineReducers({
  home: homeReducer,
  header: headerReducer,
  login: loginReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(applyMiddleware(thunk)))
// const store = createStore(reducer, applyMiddleware(thunk))

export default store
