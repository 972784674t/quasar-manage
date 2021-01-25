import { ipcRenderer } from 'electron'
import store from '../../store'
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

// if (process.env.MODE === 'electron') {
//   const remoteToken = await ipcRenderer.invoke('TOKEN')
//   remoteToken && sessionStorage.setItem('access_token', remoteToken)
// }
export default async ({ app, router, Vue, publicPath }) => {
  if (process.env.MODE !== 'electron') return null
  renderPath(Vue)
  // 判断窗口名称
  const windowName = Vue.prototype.$windowName
  console.log('windowName', windowName)
  if (windowName === 'loginWindow') {
    let count = -1
    router.beforeEach(async (to, from, next) => {
      count++
      console.log('path: ', to.path)
      const token = sessionStorage.getItem('access_token')
      if (count > 3) {
        console.log('count > 3', count)
        count = -1
        await ipcRenderer.invoke('QUIT-APP')
      } else if (to.path === '/logon') {
        next()
      } else if (token) { // 如果完成登录校验，并开始进行页面跳转时，通知主进程开始加载主窗口逻辑
        console.log('登录窗口完成登录校验逻辑：', token)
        console.log('登录窗口完成登录校验逻辑-> count ：', count)
        ipcRenderer.invoke('LOGON', token)
        next({ path: '/logon' })
      } else {
        next({ path: '/logon' })
      }
    })
  }
  if (windowName === 'mainWindow') {
    store.commit('SET_TOKEN', 972784674)
    sessionStorage.setItem('user_role', 'admin')
    router.beforeEach(async (to, from, next) => {
      const token = sessionStorage.getItem('access_token')
      if (to.path === '/logon' && !token) {
        await ipcRenderer.invoke('LOGOUT')
        next()
      }
      next()
    })
  }
}
