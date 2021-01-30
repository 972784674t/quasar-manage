import { ipcMain } from 'electron'
import Store from '../store'
const store = new Store()
export default class Message {
  constructor () {
    this.channel = []
  }

  _pushChannel (channel) {
    this.channel = this.channel.filter(item => item !== channel)
    this.channel.push(channel)
    !ipcMain._invokeHandlers.has(channel) && ipcMain.handle(channel, new this._handle(channel))
  }

  _handle (channel) {
    return function () {
      const message = arguments[1]
      store.ipcMainMessage(channel, message)
    }
  }

  /**
   * @param {Stirng|Array} channel .向ipcMain注册的进程通信句柄
   */
  register (channel) {
    if (toString.call(channel) === '[object String]') {
      this._pushChannel(channel)
    } else if (toString.call(channel) === '[object Array]') {
      channel.forEach(item => this._pushChannel(item))
    }
  }
}
