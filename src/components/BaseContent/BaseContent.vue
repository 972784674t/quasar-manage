<template>
    <div class="main-content">
      <q-scroll-area
        ref="scrollArea"
        :thumb-style="thumbStyle"
        :visible="false"
        style="height: 100%"
      >
      <slot/>
      </q-scroll-area>
    </div>
</template>

<script>
import { thumbStyle } from './thumbStyle'

export default {
  name: 'BaseContent',
  data () {
    return {
      thumbStyle,
      // Mark the page where the current BaseContent is located
      BasePath: ''
    }
  },
  props: ['position'],
  methods: {

    /**
     * Roll to position
     * @param e
     */
    ScrollToPosition (e) {
      this.$refs.scrollArea.setScrollPosition(e, 300)
    },

    /**
     * Get the location, please do throttle or debounce treatment before use
     */
    getPosition () {
      return this.$refs.scrollArea.getScrollPosition()
    }

  },

  mounted () {
    this.BasePath = this.$route.path

    // Ensure that each BaseContent has a unique BasePath
    Object.freeze(this.BasePath)

    // console.log(`创建：${this.BasePath}`)

    // If the page is refreshed, read the scroll position of the current page from sessionStorage,
    // You can open a browser window to see what sessionStorage has
    const t = window.sessionStorage.getItem(this.$route.path)
    if (t) {
      const toPosition = JSON.parse(t)
      this.ScrollToPosition(toPosition.listScrollTop)
    }
  },

  /**
   * When the component is kept-alive cached, the deactivated method will be triggered when the route is cut out
   * At this time, this.BasePath is used as the key to save the scroll position in sessionStorage
   */
  deactivated () {
    // console.log(`切换（from）：${this.BasePath}`)
    window.sessionStorage.setItem(this.BasePath, JSON.stringify({ listScrollTop: this.getPosition() }))
  },

  /**
   * When the component is cached by keep-alive, the loop switch will trigger the activated method
   * Get the scroll position from sessionStorage at this time
   */
  activated () {
    // console.log(`切换（to）：${this.$route.path}`)
    const t = window.sessionStorage.getItem(this.$route.path)
    if (t) {
      const toPosition = JSON.parse(t)
      this.ScrollToPosition(toPosition.listScrollTop)
    }
  },

  /**
   * If the component is closed, clear the corresponding sessionStorage
   */
  destroyed () {
    // console.log(`销毁：${this.BasePath}`)
    sessionStorage.removeItem(this.BasePath)
  }

}
</script>
