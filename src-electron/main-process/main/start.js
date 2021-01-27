import { app } from 'electron'

/**
 * 集中处理所有app事件
 */
app.on('ready', () => {
  require('./index')
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
