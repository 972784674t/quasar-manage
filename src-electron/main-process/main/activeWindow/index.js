import LogonWindow from '../baseClass/windowManage/logonWindow'
import MainWindow from '../baseClass/windowManage/mainWindow'
import Observer from '../baseClass/observer'
import Store from '../baseClass/store'
import Message from '../baseClass/message'
import User from '../baseClass/user'
import deepClone from '../../../../src/utils/deepClone'
export default class ActiveWindow {
  constructor () {
    if (!ActiveWindow.instance) {
      ActiveWindow.instance = this
      this.logonWindow = new LogonWindow()
      this.mainWindow = new MainWindow()
      this.user = new User()
      this.store = new Store()
      this.message = new Message()
      this.observer = new Observer()
    }
    return ActiveWindow.instance
  }

  // 监听state
  async start () {
    await this.logonWindow.exampleWindow()
    await this.mainWindow.exampleWindow()
    this.logonWindow.show()
    // observer.register(this, 'state', this.controlWindow)
  }

  registerIpcMainHandle (channel) {
    console.log('this.message.register: ', channel)
    this.message.register(channel)
    channel.forEach(channel => {
      this.observer.register(this, channel, this[channel])
    })
  }

  setRolesAndRoutes (state) {
    this.store.setStore(deepClone(state))
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

  logout (message) {
    console.log('logoff', message)
    this.logonWindow.show()
    this.mainWindow.quit()
  }

  logon () {
    this.logonWindow.quit()
    this.mainWindow.show(JSON.stringify(this.store.state()))
    return JSON.stringify(this.store.state())
  }
}
