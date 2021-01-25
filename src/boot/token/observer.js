export class Observer {
  constructor (name, fn = () => {}) {
    this.name = name
    this.fn = fn
  }
}

// 被观察者构造函数
export class Subject {
  constructor (state) {
    this.state = state
    // 数组用来保存观察着我的对象
    this.observers = []
  }

  // 设置自己的状态
  setState (val) {
    this.state = val
    // 状态改变，就需要触发所有观察者的方法
    // 遍历 this.observers 依次触发
    this.observers.forEach(item => {
      // 告诉观察者状态
      item.fn(this.state)
    })
  }
  // 添加观察者

  addObserver (obs) {
    this.observers = this.observers.filter(item => item !== obs)
    this.observers.push(obs)
  }

  // 删除观察者
  removeObserver (obs) {
    // 把obs观察者删除
    this.observers = this.observers.filter(item => item === obs)
  }
}
