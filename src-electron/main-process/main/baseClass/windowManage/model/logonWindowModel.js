const loginWindow = {
  width: 500,
  height: 600,
  center: true,
  alwaysOnTop: false, // 置顶窗口
  resizable: false, // 固定窗口大小
  minimizable: false, // 窗口不可最小化
  frame: false, // 无边框窗口
  // closable: false, // 窗口不可关闭
  autoHideMenuBar: true, // 隐藏菜单栏
  show: false,
  webPreferences: {
    additionalArguments: ['windowName=loginWindow']
  },
  /**
   * 加载modle的独有事件
   * @param {Object} window .这里必须传入一个window实例
   */
  events: (window) => {
    window.on('ready-to-show', () => {
      console.log('ready-to-sow')
    })
  }
}

export default loginWindow
