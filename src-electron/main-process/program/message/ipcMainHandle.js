import { ipcMain } from 'electron'
class IpcMainHandle {
  constructor (channel) {
    this.channel = channel
    // this.channel = channel
    // this._mountIpcManHandle()
  }

  _mountIpcManHandle () {
    Object.keys(this.channel).forEach(channel => {
      // const callback = this.channel[channel]
      // ipcMain.handle(channel, callback.call())
      console.log('channel: ', channel)
      const callback = this.channel[channel]
      ipcMain.handle(channel, callback)
    })
  }
}

export default IpcMainHandle
