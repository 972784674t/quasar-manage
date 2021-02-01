// 防止消息队列暴露而被篡改，将消息容器作为静态私有变量保存
const self = {}
const _message = {}
class Observer {
  constructor () {
    if (!Observer.instance) {
      Observer.instance = this
    }
    return Observer.instance
  }

  // 注册消息接口
  register (selfs, type, fn) {
    if (!selfs) throw new Error('必须将当前的this环境传递进观察者对象内部')
    self[type] = selfs
    if (!_message[type]) _message[type] = []
    _message[type] = _message[type].filter(item => item !== fn)
    _message[type].push(fn)
  }

  // 发布消息接口
  fire (type, args) {
    if (!_message[type]) return null
    _message[type].forEach(msg => {
      msg.call(self[type], args)
    })
  }

  // 移除消息接口
  remove (type, fn) {
    if (!_message[type]) return null
    if (fn) _message[type] = _message[type].filter(item => item !== fn)
    else delete _message[type]
  }
}

export default Observer
