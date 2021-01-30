const _event = {}
export default class Observer {
  constructor () {
    if (!Observer.instance) {
      Observer.instance = this
    }
    return Observer.instance
  }

  register (type, fn) {
    if (!_event[type]) _event[type] = []
    _event[type] = _event[type].filter(item => item !== fn)
    _event[type].push(fn)
  }

  fire (type, ...args) {
    if (!_event[type]) return null
    _event[type].forEach(fn => {
      fn(...args)
    })
  }

  remote (type, fn) {
    if (!_event[type]) return null
    if (!fn) return delete _event[type]
    _event[type] = _event[type].filter(item => item !== fn)
  }
}
