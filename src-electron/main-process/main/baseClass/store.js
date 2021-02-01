import Observer from './observer'
let _state = {}
class Store {
  constructor () {
    if (!Store.instance) {
      this.instance = this
      this.observer = new Observer()
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
    // this.observer.fire('state', _state)
  }
}

export default Store
