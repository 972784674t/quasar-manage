import LogonWindow from '../windowManage/logonWindow'
import MainWindow from '../windowManage/mainWindow'
import observer from '../observer'
import Message from '../message'
import User from '../user'
export default class ActiveWindow {
  constructor () {
    if (!ActiveWindow.instance) {
      ActiveWindow.instance = this
      this.logonWindow = new LogonWindow()
      this.mainWindow = new MainWindow()
      this.user = new User()
      this.message = new Message()
      this._listenState()
    }
    return ActiveWindow.instance
  }

  // 监听state
  _listenState () {
    observer.register('appStart', this.appStart, this)
    observer.register('state', this.controlWindow, this)
  }

  controlWindow (state) {
    if (!state || !state.command) throw new Error(`参数错误：controlWindo()必须接受一个完整的state作为参数。\n传入的state: ${state}`)
    console.log('监听state，控制窗口', state)
    /**
     * 动作：
     *  退出程序 => 关闭所有窗口
     *  锁定用户界面 => 禁用主窗口，主窗口置顶，不可缩小，弹出登录窗口，不可切换用户
     *  注销/切换用户 => 关闭主窗口，显示登录窗口
     */
    this[state.command]()
  }

  appStart () {
    this.logonWindow.show()
  }

  quitApp () {
    this.logonWindow.quit()
    this.mainWindow.quit()
    console.log('quitApp', this.user.store.state())
  }

  lockUser () {
    this.mainWindow.disabled()
    this.logonWindow.show()
    console.log('lockUser')
  }

  logoff () {
    this.mainWindow.quit()
    this.logonWindow.show()
    console.log('logoff')
  }

  logon () {
    this.logonWindow.quit()
    this.mainWindow.show()
    console.log('logon')
  }
}
