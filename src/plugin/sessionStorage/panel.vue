<template>
  <div>
    <div class="number-panel">
      <p v-show="checkedNumber.length>0" class="number-show">{{checkedNumber}}</p>
      <p v-show="!checkedNumber" class="number-show">  </p>
      <ul>
        <li @click="clickThisNumber($event)" v-for="index in 9" :key="index">{{index}}</li>
        <li @click="clickThisNumber($event)">0</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'test-panel', // 这里需要注意下，我们是采用的全局注入我们的组件，所以在后面因为我们的组件后，会直接使用这个命名的标签
  data () {
    return {
      checkedNumber: ''
    }
  },
  components: {
  },
  methods: {
    clickThisNumber (e) {
      this.checkedNumber = this.checkedNumber.concat(e.currentTarget.innerHTML)
    }
  }
}
</script>

<style>
  .number-show {
    height: 20px;
  }
  .number-panel ul {
    padding: 0;
  }
  .number-panel ul li{
    display: inline-block;
    width: 28%;
    height: 50px;
    line-height: 50px;
    margin-top: 20px;
    background: #ddd;
    border-radius: 8px;
    margin-right: 10px;
  }
  .number-panel ul li input {
    display: none;
  }
</style>
