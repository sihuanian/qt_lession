import shop from '../../api/shop'

const state = {
  all: []
}

const getters = {}

const actions = {
  // vuex 给actions的, commit mutations => state
  getAllProducts ({ commit }) {
    // api
    shop.getProducts((products) => {
      console.log('前端到api，callback回来了', products)
      commit('setProducts', products) // actions => mutations
    })
    // mutations
  }
}

// mutations 可以改 state
const mutations = {
  setProducts (state, products) {
    state.all = products // 修改state 中的数据
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}