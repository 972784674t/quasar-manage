import observer from './observer'
let _state = {}
const _remote = {}
class Store {
  constructor () {
    if (!Store.instance) {
      this.instance = this
      this.observer = observer
    }
  }

  isJSON (str) {
    if (typeof str === 'string') {
      try {
        var obj = JSON.parse(str)
        if (typeof obj === 'object' && obj) {
          return true
        } else {
          return false
        }
      } catch (e) {
        console.log('error：' + str + '!!!' + e)
        return false
      }
    }
    console.log('It is not a string!')
  }

  state (key) {
    console.log('_state', this)
    if (!key) return _state
    if (_state[key]) return _state[key]
  }
  /**
   * @param {String} command .发送给订阅者的控制命令
   * @param {Object} store .渲染进程传递的store对象
   */

  setStore (store) {
    _state = this.isJSON(store) ? JSON.parse(store) : store
    observer.fire('state', _state)
  }

  ipcMainMessage (channel, message) {
    _remote[channel] = message
    observer.fire(channel, _remote[channel])
  }
}

export default Store
