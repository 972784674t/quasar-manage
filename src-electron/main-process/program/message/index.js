import { app } from 'electron'
import IpcMainHandle from './ipcMainHandle'
import Window from '../window'
/**
 * 负责前后端通信
 */
let window = null
let token = ''
app.on('ready', () => { window = new Window() })
const channel = {
  LOGON: (event, remoteToken) => {
    console.log('LOGON', token)
    token = remoteToken
    window.exampleWindow('mainWindow')
    window.destroyWindow('loginWindow')
    window.showWindow('mainWindow')
    window.mainWin().maximize()
  },
  QUIT_APP: () => {
    app.quit()
  },
  TOKEN: () => {
    return token
  },
  LOGOUT: () => {
    token = ''
    window.exampleWindow('loginWindow')
    window.destroyWindow('mainWindow')
    window.showWindow('loginWindow')
  }
}

class Message extends IpcMainHandle {
  constructor (window) {
    if (!Message.instance) {
      super(channel)
      this.window = window
      Message.instance = this
    }
    return Message.instance
  }

  start () {
    // const channel = new Channel()
    IpcMainHandle.prototype.channel = channel
    this._mountIpcManHandle()
    // console.log('test: ', this.test)
    // const LOGON = (...args) => {
    //   console.log('token => : ', args)
    //   // this.token = token
    //   window.exampleWindow('mainWindow')
    //   window.destroyWindow('loginWindow')
    //   window.showWindow('mainWindow')
    //   return true
    // }
    // this._setEvents(channel)
  }
}

export default Message
