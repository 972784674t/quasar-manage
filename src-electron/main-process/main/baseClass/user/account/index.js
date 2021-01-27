import State from './state'
export default class Account {
  constructor () {
    if (!Account.instance) {
      this.state = new State()
      Account.instance = this
    }
  }
}
