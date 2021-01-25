import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import mutations from 'src/store/mutations'
import actions from './actions'
import modules from './modules'
// import example from './module-example'
import deepClone from '../utils/clone-utils'

Vue.use(Vuex)

const myPlugin = store => {
  // eslint-disable-next-line no-undef
  let prevState = deepClone(store.state)
  store.subscribe((mutation, state) => {
    // eslint-disable-next-line no-undef
    const nextState = deepClone(state)
    if (!nextState.token) console.log('退出登录')
    if (prevState.token !== nextState.token) sessionStorage.setItem('access_token', nextState.token)
    console.log('提交mutation:', mutation, state.role)
    prevState = nextState
  })
}
const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules,
  // enable strict mode (adds overhead!)
  // for dev mode only
  plugins: [myPlugin],
  strict: process.env.DEBUGGING
})

export default store
// }
