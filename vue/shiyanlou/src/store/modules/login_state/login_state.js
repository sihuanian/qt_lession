const state = {
  sign_on: false, // 默认未登录 false
  show_login_dialog: false, // 登录弹窗
  on_or_up: '', // 登录/注册 高亮
  user_info: { // 用户信息模拟
    id: 1,
    avatar_url: 'https://avatars2.githubusercontent.com/u/10172415?s=40&v=4',
    username: 'sihuanian'
  } 
}

const mutations = {
  change_show_state (state, onOrUp) {
    state.show_login_dialog = !state.show_login_dialog
  }
}

const actions = {
  change_show_state (context, onOrUp) {
    context.commit('change_show_state', onOrUp)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}