const MarryState = function () {
  // 内部状态私有变量
  let _currentState = {}
  const states = {
    logon: function () {
      console.log('logon')
    },
    logout: function () {
      console.log('logout')
    },
    quitApp: function () {
      console.log('quitApp')
    },
    lockUser: function () {
      console.log('squat')
    },
    changeUser: function () {
      console.log('changeUser')
    }
  }
  const Action = {
    changeState: function () {
      const arg = arguments
      _currentState = {}
      if (arg.length) {
        for (let i = 0; i < arg.length; i++) {
          _currentState[arg[i]] = true
        }
      }
      return this
    },
    goes: function () {
      console.log('触发一次动作')
      for (const i in _currentState) {
        states[i] && states[i]()
      }
      return this
    }
  }
  return {
    change: Action.changeState,
    goes: Action.goes
  }
}

const marry = new MarryState()
marry.change('logon', 'logout').goes().goes()
