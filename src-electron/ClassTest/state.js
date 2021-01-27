const ResultState = function () {
  const States = {
    // 添加每种条件的状态执行方法
    state0: function () {
      console.log('这是第一种状态')
    },
    state1: function () {
      console.log('这是第二种状态')
    },
    state2: function () {
      console.log('这是第三种状态')
    },
    state3: function () {
      console.log('这是第四种状态')
    }
  }
  function show (result) {
    States[`state${result}`] && States[`state${result}`]()
  }
  return {
    show
  }
}
ResultState().show(3)
