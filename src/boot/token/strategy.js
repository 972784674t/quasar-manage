const strategy = (function () {
  const sale = {}
  function strategy (type, args) {
    if (!sale[type]) throw new Error(`${type}策略未注册`)
    return sale[type](args)
  }

  // 把函数当作一个对象，向里面添加成员
  strategy.add = function (type, fn) {
    // 用来添加折扣
    if (sale[type]) return '该折扣已存在'
    sale[type] = fn
    return true
  }
  // 删除一个折扣
  strategy.remove = function (type) {
    delete sale[type]
  }
  return strategy
})()

export default strategy
