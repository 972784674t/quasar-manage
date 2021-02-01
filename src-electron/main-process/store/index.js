import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import userInfo from './userInfo'

Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  modules: {
    userInfo
  }
})

export default store
