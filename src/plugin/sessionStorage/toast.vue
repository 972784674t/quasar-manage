<template>
  <div>
    <div class="toast"  ref='toastPosition' :class="{active: toastHidden}">
      <div class="toast-warpper">
         {{text}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'test-toast',
  data () {
    return {
      text: '',
      toastHidden: false
    }
  },
  created () {
    // this.toastPlugin()
  },
  components: {
  },
  methods: {
    toastPlugin (msg, time) {
      this.text = msg
      this.toastHidden = true
      setTimeout(() => {
        this.toastHidden = false
      }, time)
    }
  }
}
</script>

<style>
  .toast {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 0px;
    min-height: 0px;
    text-align: center;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 5px;
    color: #fff;
    transition: all 0.5s;
    z-index: -1;
    opacity: 0;
  }
  .toast.active {
    width: 150px;
    min-height: 25px;
    opacity: 1;
    z-index: 11;
  }
</style>
