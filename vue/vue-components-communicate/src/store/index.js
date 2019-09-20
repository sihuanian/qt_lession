import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  count: 1,
  date: '2019.09.20',
  money: 100
}

const mutations = {
  add (state, n) { // 可以有参数
    state.count += n
  },
  reduce (state) {
    state.count--
  },
  makeMoney (state) {
    state.money++
  }
}

const getters = {
  // 计算属性相当于vue 页面中的 computed
  count: function(state) {
    return state.count += 100
  }
}

const actions = {
  // makeMoneyAction (context) {
  //   context.commit('makeMomey') // 异步的
  // }
  makeMoneyAction ({commit}) {
    setTimeout(() => {
      commit('makeMoney')
    }, 2000)
    console.log('你挣你的钱')
  }
}

export default new Vuex.Store({
  state,
  mutations, // 同步处理数据源中的数据
  getters,
  actions // 异步处理数据源中的数据
})