import Window from '../window'
export default class MainWindow extends Window {
  constructor () {
    if (!MainWindow.install) {
      super()
      MainWindow.install = this
    }
    return MainWindow.install
  }
}
