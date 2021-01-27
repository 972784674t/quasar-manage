import Store from './store'
export default class Account {
  constructor () {
    this.store = Store
  }

  logon (store) {
    // Store.set(_store)
    store.command = 'logon'
    store.lock = false
    this.store.set(store)
  }

  quitApp () {
    // 保存上次登录的用户信息
    // saveLastActiveUser()
    const lastState = this.store.state()
    lastState.command = 'quitApp'
    this.store.set(lastState)
  }

  lockUser () {
    // 锁定用户
    const state = this.store.state()
    state.lock = true
    state.command = 'lockUser'
    this.store.set(state)
  }

  logoff () {
    // 注销用户登录
    const state = this.store.state()
    state.command = 'logoff'
    this.store.set(state)
  }
}
