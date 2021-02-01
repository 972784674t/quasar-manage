import { ipcMain } from 'electron'
import ActiveWindow from './activeWindow'
import store from '../store'

const activeWindow = new ActiveWindow()

activeWindow.registerIpcMainHandle([
  'logon',
  'logout',
  'quitApp',
  'lockUser',
  'logoff',
  'setRolesAndRoutes'
])

ipcMain.handle('REGISTER', (event, message) => {
  console.log('REGSITER', JSON.parse(message))
  !store.hasModule('registers') && store.registerModule('registers', JSON.parse(message))
  console.log(store.hasModule('registers'))
  store.commit('SET_USER', 'set_USER')
  console.log('动态注册：', store.state.registers)
})
const remote = {
  state: () => { return { remote: '动态注册' } },
  mutations: {
    REMOTE: (state, payload) => {
      state.remote = payload
    }
  }
}
activeWindow.start()
store.registerModule('remote', remote)
store.commit('REMOTE', '123')
console.log('registerModule: ', store.state.remote.remote)
store.commit('LOGON', { username: 'test', role: 'role', token: 123 })
console.log('store-test: ', store.getters.getUserinfo)
