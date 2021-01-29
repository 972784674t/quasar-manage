// import { ipcRenderer } from 'electron'
// import deepClone from 'src/utils/clone-utils'
// import store from '../../store'
function renderPath (Vue) {
  const argv = process.argv
  let windowName = ''
  for (let i = argv.length - 1; i > 0; i--) {
    const target = argv[i]
    const match = target.match(/(?<=windowName=)[\S]+/g)
    if (match && match.length) {
      windowName = match[0]
      break
    }
  }
  if (windowName) Vue.prototype.$windowName = windowName
}
/**
 * electron模式启动文件
 * 如果不需要构建electron程序，可以忽略此文件
 */
export default async ({ app, router, Vue, publicPath, store }) => {
  if (process.env.MODE !== 'electron') return null
  renderPath(Vue)
  // 判断窗口名称
  const windowName = Vue.prototype.$windowName
  if (windowName === 'loginWindow') {
    console.log('windowName', windowName)
    router.afterEach(async (to, from) => {
      if (to.path === '/' && from.path === '/logon') {
        // const state = deepClone(store.state)
        // state.command = 'logon'
        // await ipcRenderer.invoke('logon', JSON.stringify(state))
      }
    })
  }
  if (windowName === 'mainWindow') {
    // store.commit('SET_TOKEN', 972784674)
    // sessionStorage.setItem('user_role', 'admin')
    // router.beforeEach(async (to, from, next) => {
    //   const token = sessionStorage.getItem('access_token')
    //   if (to.path === '/logon' && !token) {
    //     await ipcRenderer.invoke('LOGOUT')
    //     next()
    //   }
    //   next()
    // })
  }
}
