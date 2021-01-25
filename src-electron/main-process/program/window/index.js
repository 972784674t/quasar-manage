import model from './model'
import WindowExample from './windowExample'
/**
 * 提供一个维护窗口实例的类
 *
 */
class Window extends WindowExample {
  constructor () {
    if (!Window.instance) {
      super()
      this._exampleWindowByModel()
      Window.instance = this
    }
    return Window.instance
  }

  _exampleWindowByModel () {
    Object.keys(model).forEach(window => {
      this._exampleWindow(window)
    })
  }

  _reExampleWindowByModel (modelKey) {
    if (!model[modelKey]) throw new Error(`model中未找到对应的模块：${modelKey}`)
    if (this[modelKey]) throw new Error(`对应窗口实例已存在：\n窗口实例：${modelKey}\n窗口id：${this[modelKey].id}`)
    this._exampleWindow(modelKey)
  }

  /**
   * 提供一个获取主窗口实例的方法
   */
  mainWin () {
    return this.mainWindow
  }

  /**
   * 提供一个获取登录窗口实例的方法
   */
  loginWin () {
    return this.loginWindow
  }

  /**
   * 手动实例化窗口
   * @param {String} modelKey .需要手动实例化的窗口名称（model对象）
   */
  exampleWindow (modelKey) {
    this._reExampleWindowByModel(modelKey)
  }

  /**
   * 通过传入窗口名称来控制窗口实例的显示
   * @param {String} modelKey .需要显示的窗口名称
   */
  async showWindow (modelKey) {
    await this._showWindow(modelKey)
  }

  /**
   * 通过传入窗口名称来控制窗口实例隐藏
   * @param {String} modelKey .需要隐藏的窗口名称（model对象）
   */
  hideWindow (modelKey) {
    this._hideWindow(modelKey)
  }

  /**
   * 通过传入窗口名称来控制窗口实例的正常关闭
   * @param {String} modelKey .需要正常关闭的窗口名称（model对象）
   */
  closeWindow (modelKey) {
    this._closeWindow(modelKey)
  }

  /**
   * 通过传入窗口名称来强制销毁窗口实例
   * @param {String} modelKey .需要强制关闭的窗口名称（model对象）
   */
  destroyWindow (modelKey) {
    this._destroyWindow(modelKey)
  }
}

export default Window
