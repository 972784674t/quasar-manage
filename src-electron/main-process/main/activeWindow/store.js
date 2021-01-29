import observer from '../baseClass/observer'
const Store = (function () {
  let _state = {
    user: {},
    role: '',
    token: null
  }
  return {
    state: function (key) {
      if (!key) return _state
      if (_state[key]) return _state[key]
    },
    setStore: function (store) {
      _state = store
      observer.fire('state', store)
    }
  }
})()

export default Store
