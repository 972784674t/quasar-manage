import Window from './Window'
export default class MainWindow extends Window {
  constructor () {
    if (!MainWindow.install) {
      super('mainWindow')
      MainWindow.install = this
    }
    return MainWindow.install
  }

  // 主窗口特有方法，禁止disabled登录窗口
  disabled () {}
}
