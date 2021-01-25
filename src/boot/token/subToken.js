import { Subject } from './observer'

export default class SubToken extends Subject {
  constructor (state) {
    super(state)
    this.tokenKey = 'access_token'
  }

  setState (val) {
    sessionStorage.setItem(this.tokenKey, val)
    this.state = val
    this.observers.forEach(item => {
      item.fn(this.state)
    })
  }
}
