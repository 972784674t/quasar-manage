import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import mutations from 'src/store/mutations'
import actions from './actions'
import modules from './modules'

Vue.use(Vuex)
let ipcRenderer = null
if (process.env.MODE === 'electron') ipcRenderer = require('electron').ipcRenderer
const handle = (function () {
  // const observer = Vue.prototype.$observer
  const states = {
    LOGON: function (state) {
      console.log('LOGON')
      Vue.prototype.$observer.register('doLogon', () => {
        ipcRenderer.invoke('logon')
      })
    },
    SET_ROLES_AND_ROUTES: function (state) {
      console.log('SET_ROLES_AND_ROUTES')
      console.log('obsersver', Vue.prototype)
      Vue.prototype.$observer.fire('doLogon')
      ipcRenderer.invoke('setRolesAndRoutes', JSON.stringify(state))
    },
    LOGOUT: function (state) {
      console.log('logout', state)
      ipcRenderer.invoke('logout')
    }
  }
  return (type, state) => {
    states[type] && states[type](state)
  }
})()

const myPlugin = store => {
  store.subscribe((mutation, state) => {
    const type = mutation.type
    handle(type, state)
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
  plugins: process.env.MODE === 'electron' ? [myPlugin] : [],
  strict: process.env.DEBUGGING
})

export default store
// }
