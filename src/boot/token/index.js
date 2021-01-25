import strategy from './strategy'
import { Observer, Subject } from './observer'
import store from '../../store'
/**
 * token策略
 * spa策略
 * electron策略
 */
// 创建token的观察者对象
const obsToken = new Observer('access_token', token => {
  // 观察token的值
  // 有值，则设置sessionStorage
  // 为null，则删除sessionStorage
  if (token) sessionStorage.setItem('access_token', token)
  else sessionStorage.removeItem('access_token')
})
// 创建token对象
const token = new Subject('123')
token.addObserver(obsToken)

// function tokenTest (value) {
//   return function (value) {
//     console.log('返回一个函数：', value)
//   }
// }
strategy.add('electron', function () {
  console.log('store', store)
  return token
})

export default async ({ app, router, Vue, publicPath }) => {
  // 向全局增加electron的token策略
  if (process.env.MODE === 'electron') Vue.prototype.$token = strategy('electron')
  // 创建全局的token观察对象
}
