const actions = {
  async LOGON ({ commit }, userinfo) {
    return new Promise((resolve) => {
      setTimeout(() => {
        userinfo.role = userinfo.username
        userinfo.token = 972784674
        if (userinfo.username === 'admin' || userinfo.username === 'test') {
          commit('LOGON', userinfo)
          resolve(true)
        } else {
          resolve(false)
        }
      }, 1000)
    })
  }
}

export default actions
