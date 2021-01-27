import { thumbStyle } from 'src/components/BaseContent/thumbStyle'
import ActiveWindow from '../activeWindow'
import Account from './account/index'
/**
 * 程序架构围绕<活动用户>构建
 * 活动用户作为最顶层封装，只需要向下发出指令：
 *  + 用户的挂载：logon()
 *  + 用户的退出：logout()
 *  + 用户的锁定: lock()
 */
export default class User extends Account {
  constructor () {
    if (!User.instance) {
      super()
      this.team = {
        superior: [],
        peerGroup: [],
        subordinate: []
      }
      this.activeWindow = new ActiveWindow()
      User.instance = this
    }
    return User.instance
  }

  logon () {

  }

  logout () {

  }
}
