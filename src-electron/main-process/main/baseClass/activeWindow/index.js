import LogonWindow from './logonWindow'
import MainWindow from './mainWindow'
export default class ActiveWindow {
  constructor () {
    if (!ActiveWindow.instance) {
      ActiveWindow.instance = this
      this.logonWindow = new LogonWindow()
      this.mainWIndow = new MainWindow()
    }
    return ActiveWindow.instance
  }
}
