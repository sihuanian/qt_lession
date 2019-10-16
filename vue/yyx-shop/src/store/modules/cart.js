const state = {
  items: [
    // {id: 1, quantity: 1} 
  ], // 购物列表 {id, quantity}
  checkoutStatus: null, // 状态
}
// 总价

const getters = {
  cartTotalPrice: (state, getters) => {
    return getters.cartProducts.reduce((total, product) => {
      return total + product.price * product.quantity
    }, 0)
  },
  // getters 可以拿到其它模块的getters
  // rootState 
  cartProducts: (state, getters, rootState) => {
    return state.items.map(({id, quantity}) => {
      const product = rootState.products.all.find(product => product.id === id)
      return {
        title: product.title,
        price: product.price,
        quantity
      }
    })
  }
}

const mutations = {
  setCheckoutStatus: ()  => {
  
  },
  pushProductToCart: (state, {id})  => {
    state.items.push({id, quantity: 1})
  },
  incrementItemQuantity: (state, {id})  => {
    const cartItem = state.items.find(item => item.id === id)
    cartItem.quantity++
  }
}

const actions = {
  // 添加到购物车
  addProductToCart ({state, commit}, product) {
    // actions只能对state 进行读操作
    commit('setCheckoutStatus', null)
    if (product.inventory > 0) {
      const cartItem = state.items.find(item => item.id === product.id)
      if (!cartItem) {
        commit('pushProductToCart', { id: product.id })
      } else {
        commit('incrementItemQuantity', cartItem)
      }
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}