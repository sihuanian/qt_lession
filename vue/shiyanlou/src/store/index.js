import Vue from 'vue'
import Vuex from 'vuex'
import loginState from './modules/login_state/login_state.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    loginState
  }
})