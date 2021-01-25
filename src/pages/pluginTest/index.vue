<template>
  <base-content>
    <div>
      <div>test</div>
      <p>
        <button @click="getChildrenFunction">点击触发子组件的toast</button>
      </p>
      <div>
        <p>点击面板上的内容</p>
      </div>
      <test-panel ref="panel"></test-panel>
      <test-toast ref="toast"></test-toast>
    </div>
  </base-content>
</template>

<script>
import BaseContent from '../../components/BaseContent/BaseContent'
export default {
  components: {
    BaseContent
  },
  data () {
    return {
      testArr: [1, 2, 6]
    }
  },
  created () {
    console.log(this.$myMethod(this.testArr))
    this.$nextTick(() => {
      console.log(this.$refs.panel.$el)
    })
  },
  methods: {
    getChildrenFunction () {
      this.$nextTick(() => {
        this.$refs.toast.toastPlugin('在父组件里触发调用的toast', 2500)
      })
    }
  }
}
</script>
