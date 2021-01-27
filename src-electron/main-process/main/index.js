import ActiveWindow from './baseClass/activeWindow'

const activeWindow = new ActiveWindow()

// 监听进程间通信
// 接收到登录通知
console.log('接收到登录通知')

// activeWindow.user.logon({ token: 123 })

// 接收到退出登录通知
console.log('接收到退出登录通知')
activeWindow.user.logoff()

// 接收到锁定用户通知
console.log('接收到锁定用户通知')
activeWindow.user.lockUser()

// 接收到关闭程序通知
console.log('接收到关闭程序通知')
activeWindow.user.quitApp()
