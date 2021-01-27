import Window from '../window'
export default class LogonWindow extends Window {
  constructor () {
    if (!LogonWindow.install) {
      super()
      LogonWindow.install = this
    }
    return LogonWindow.install
  }
}
