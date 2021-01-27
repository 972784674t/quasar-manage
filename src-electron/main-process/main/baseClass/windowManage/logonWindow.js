import Window from './Window'
export default class LogonWindow extends Window {
  constructor () {
    if (!LogonWindow.install) {
      super('logonWindow')
      LogonWindow.install = this
    }
    return LogonWindow.install
  }
}
