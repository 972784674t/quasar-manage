import { app, ipcMain } from 'electron'
import Window from './window'
import Message from './message'
class Program {
  constructor () {
    if (!Program.instance) {
      // super()
      this.start()
      Program.token = ''
      Program.instance = this
    }
    return Program.instance
  }

  start () {
    app.on('ready', () => {
      this.window = new Window()
      this.window.showWindow('loginWindow')
      this.window.destroyWindow('mainWindow')
      const message = new Message(this.window)
      message.start()
    })
  }
}

export default Program
