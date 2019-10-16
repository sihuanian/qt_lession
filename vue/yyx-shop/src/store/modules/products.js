import shop from '../../api/shop'

const state = {
  all: [] // 所有的商品
}

const actions = {
  getAllProducts ({ commit }) {
    // api 请求
    shop.getProducts(products => {
      commit('setProducts', products)
    })
  }
}

const mutations = {
  setProducts (state, products) {
    state.all = products
  },
  // 减少库存
  decrementProductInventory (state, { id }) {
    const porduct = state.all.find(product => product.id === id)
    product.inventory--
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}