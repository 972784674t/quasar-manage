import { ipcRenderer, remote } from 'electron'
import Observer from './Observer'
import register from '../../store/register'
import deepClone from '../../utils/clone-utils'
const deepRegister = deepClone(register)
// 无法传递store对象至主进程：
/**
 * 解决办法：
 * 1，复制store文件夹，粘贴至主进程
 */
console.log('deepRegister: ', deepRegister)
ipcRenderer.invoke('REGISTER', JSON.stringify(deepRegister))
function renderPath (Vue) {
  Vue.prototype.$observer = new Observer()
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
  console.log('store', store)
  if (process.env.MODE !== 'electron') return null
  renderPath(Vue)
  // 判断窗口名称
  const windowName = Vue.prototype.$windowName
  if (windowName === 'loginWindow') {
    console.log('登录窗口显示')
  }
  if (windowName === 'mainWindow') {
    console.log('主窗口显示')
    ipcRenderer.on('mainReadyToShow', (event, args) => {
      const state = JSON.parse(args)
      console.log('mainReadyToShow', state)
      // store.commit('STATE_INITAIL', state)
      console.log('store', store.state)
      remote.getCurrentWindow().maximize()
    })
    sessionStorage.setItem('access_token', 123456)
    sessionStorage.setItem('user_role', 'admin')
  }
}
