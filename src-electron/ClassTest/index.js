const Observer = (function () {
  const __message = {}
  return {
    register: function (type, fn) {
      if (typeof __message[type] === 'undefined') __message[type] = []
      __message[type].push(fn)
    },
    fire: function (type, ...args) {
      if (!__message[type]) return null
      __message[type].forEach(item => {
        return item.call(this, ...args)
      })
    },
    remove: function (type, fn) {
      if (!__message[type]) return null
      if (!fn) delete __message[type]
      else __message[type] = __message[type].filter(item => item !== fn)
    }
  }
})()

Observer.register('test', function (e, b) {
  console.log('register: ', e, b)
})
Observer.register('test1', function (e, b) {
  console.log('register: ', e, b)
})

Observer.fire('test', '123', '456')
Observer.fire('test1', 123, 123)

Observer.remove('test')

console.log(Observer)
