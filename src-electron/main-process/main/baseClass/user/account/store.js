import observer from '../../observer'
const Store = (function () {
  let newStart = true // 程序是否为首次启动标志, 启动后，设为false，且任何位置无法修改。
  let _state = {
    user: {},
    role: '',
    token: null
  }
  if (newStart) {
    observer.fire('appStart')
    newStart = false
  }
  return {
    state: function (key) {
      if (!key) return _state
      if (_state[key]) return _state[key]
    },
    set: function (store) {
      _state = store
      observer.fire('state', store)
    }
  }
})()

export default Store
