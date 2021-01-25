import { app, BrowserWindow } from 'electron'
// import Window from './program/window'
/**
 * 集中处理所有app事件
 */

app.on('ready', async () => {
  // const window = new Window()
  // window.destroyWindow('loginWindow')
  // await window.showWindow('loginWindow')
  // await window._showWindow('mainWindow')
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
