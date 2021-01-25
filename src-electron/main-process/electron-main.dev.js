/**
 * This file is used specifically and only for development. It installs
 * `electron-debug` & `vue-devtools`. There shouldn't be any need to
 *  modify this file, but it can be used to extend your development
 *  environment.
 */

import path from 'path'
import electronDebug from 'electron-debug'
// import installExtension, { VUEJS_DEVTOOLS } from 'electron-devtools-installer'
import { app, session } from 'electron'

// Install `electron-debug` with `devtron`
electronDebug({ showDevTools: true })

// Install vuejs devtools
app.whenReady().then(() => {
  console.log('app wenReady')
  // Install Vue Devtools
  try {
    // await installExtension(VUEJS_DEVTOOLS);
    // 新增的：安装vue-devtools
    session.defaultSession.loadExtension(
      path.resolve(__dirname, '../../.devTools/shell-chrome') // 这个是刚刚build好的插件目录
    )
    // 这个是刚开始找的方法不行，换上边的方法
    // BrowserWindow.addDevToolsExtension(path.resolve(__dirname, "../../devTools/chrome")  );
  } catch (e) {
    console.error('Vue Devtools failed to install:', e.toString())
  }
})

import './electron-main'
