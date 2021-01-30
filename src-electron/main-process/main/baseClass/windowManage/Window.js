import { app, BrowserWindow } from 'electron'
import windowModel from './model'

const modelLength = Object.keys(windowModel).length
export default class Window {
  constructor (model) {
    this.model = model // 窗口对应别名
    this.window = null
    this.APP_URL = process.env.APP_URL
    // this._exampleWindow()
  }

  exampleWindow () {
    // 这里的model指model文件夹下对应的配置文件
    const model = windowModel[this.model]
    if (!app.isReady()) throw new Error('app未经实例化，禁止实例化窗口')
    let window = new BrowserWindow({
      ...model,
      show: false,
      webPreferences: {
        ...model.webPreferences,
        nodeIntegration: process.env.QUASAR_NODE_INTEGRATION,
        nodeIntegrationInWorker: process.env.QUASAR_NODE_INTEGRATION,
        contextIsolation: false
      }
    })
    /**
     * 在这里统一挂载window的事件
     */
    this._defaultEvents(window, this.model)
    model.events && model.events(window)
    const verification = this._verification()
    if (!verification) {
      window.destroy()
      window = null
      throw new Error(`已打开（实例化）的窗口数量大于注册的窗口数量，检查是否丢失窗口控制：\n已打开（实例化）的窗口数量：${BrowserWindow.getAllWindows().length}`)
    }
    window.loadURL(this.APP_URL)
    window.webContents.on('dom-ready', () => {
      console.log('dom-Ready')
    })
    return new Promise(resolve => {
      window.on('ready-to-show', () => {
        resolve(this.window = window)
      })
    })
  }

  /**
   * 校验model所对应的窗口数量
   */
  _verification () {
    const allWindowLength = BrowserWindow.getAllWindows().length
    if (allWindowLength > modelLength) return false
    else return true
  }

  /**
   *  所有被实例化的窗口均需要被挂载的事件
   * @param {Object} window .需要被挂载事件的窗口实例
   * @param {String} model .具体的construct中对应model的引用
   */
  _defaultEvents (window, model) {
    window.on('ready-to-show', () => {
      // console.log('第二次调用', window.id)
    })
    /**
     在窗口要关闭的时候触发。 它在DOM 的beforeunload 和 unload 事件之前触发. 调用event.preventDefault()将阻止这个操作。
       通常你想通过 beforeunload处理器来决定是否关闭窗口，但是它也会在窗口重载的时候触发. 在 Electron 里，返回除 undefined之外的任何值都将取消关闭. 例如：
       window.onbeforeunload = (e) => {
         console.log('I do not want to be closed')
         // 与通常的浏览器不同,会提示给用户一个消息框,
         //返回非空值将默认取消关闭
         //建议使用对话框 API 让用户确认关闭应用程序.
         e.returnValue = false // 相当于 `return false` ，但是不推荐使用
       }
     */
    window.on('close', () => {
      console.log(`${model} close`)
    })
    window.on('closed', () => {
      const isDestroyed = window.isDestroyed()
      console.log('isDestroyed: ', isDestroyed)
      console.log(`${model} closed`)
      this[model] = null // 关闭窗口后，必须清空construct中对应model的引用，才不会使窗口的管理混乱
    })
  }

  _checkModel () {
    if (!windowModel[this.model]) throw new Error(`model中不存在对应的key：${Object.keys(windowModel)}\n传入的key：${this.model}`)
    if (!this.window) throw new Error(`${this.model}窗口未经实例化，请检查。`)
  }

  async show (state) {
    if (!this.window) await this.exampleWindow()
    if (this.model === 'mainWindow') {
      console.log('send: +++++++++++++++++++++')
      this.window.webContents.send('mainReadyToShow', state)
    }
    setTimeout(() => {
      this.window.show()
    }, 200)
  }

  hide () {
    this._checkModel()
    this.window.hide()
  }

  quit () {
    this._checkModel()
    this.window.close()
    this.window = null
  }

  quitAll () {
    this._checkModel()
  }
}
