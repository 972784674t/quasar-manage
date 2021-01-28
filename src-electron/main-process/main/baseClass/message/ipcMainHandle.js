import User from '../user'
const user = new User()
function checkStore (store) {
  if (!(store instanceof Object)) throw new Error(`由渲染进程传递的参数：store，必须为store对象\n传递的参数为：${store}`)
}
const ipcHandler = (function () {
  const channel = {
    logon: (event, store) => {
      checkStore(store)
      console.log('ipcMainHandle', store)
      user.logon(store)
    },
    logout: (event, store) => {
      user.logout()
    }
  }
  return channel
})()

export default ipcHandler
