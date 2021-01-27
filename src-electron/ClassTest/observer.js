const Observer = (function () {
// 防止消息队列暴露而被篡改，将消息容器作为静态私有变量保存
  const _message = {}
  return {
    // 注册消息接口
    register: function (type, fn) {
      if (!_message[type]) _message[type] = []
      _message[type].push(fn)
    },
    // 发布消息接口
    fire: function (type, args) {
      if (!_message[type]) return null
      const events = {
        type,
        args: args || {}
      }
      _message[type].forEach(msg => {
        msg.call(this, events)
      })
    },
    // 移除消息接口
    remove: function (type, fn) {
      if (!_message[type]) return null
      if (fn) _message[type] = _message[type].filter(item => item !== fn)
      else delete _message[type]
    }
  }
})()

const Student = function (result) {
  const that = this
  that.result = result
  that.say = function () {
    console.log(that.result)
  }
}

// 向类添加注册消息
Student.prototype.answer = function (question) {
  Observer.register(question, this.say)
}

Student.prototype.sleep = function (question) {
  console.log(`${this.result} ${question} 已被注销`)
  Observer.remove(question, this.say)
}

const Teacher = function () {}
Teacher.prototype.ask = function (question) {
  console.log(`问题是：${question}`)
  Observer.fire(question)
}

const student1 = new Student('学生1回答')
const student2 = new Student('学生2回答')
const student3 = new Student('学生3回答')

student1.answer('什么是设计模式')
student1.answer('简述观察者模式')
student2.answer('什么是设计模式')
student3.answer('什么是设计模式')
student3.answer('简述观察者模式')

student3.sleep('简述观察者模式')

const teacher = new Teacher()
teacher.ask('什么是设计模式')
teacher.ask('简述观察者模式')
