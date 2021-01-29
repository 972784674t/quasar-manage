import Account from './account/index'
import Observer from '../observer'
/**
 * 这里仅提供一个单例模式下的活动用户
 * 暂不做任何方法封装
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
      this.observer = Observer
      User.instance = this
    }
    return User.instance
  }

  // 负责用户相关的操作
  // 存储用户信息
  // 分发用户对话消息
  // 存储用户状态
}
