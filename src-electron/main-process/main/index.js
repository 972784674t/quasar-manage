import ActiveWindow from './activeWindow'

const activeWindow = new ActiveWindow()

activeWindow.registerIpcMainHandle([
  'logon',
  'logout',
  'quitApp',
  'lockUser',
  'logoff',
  'setRolesAndRoutes'
])
activeWindow.start()
