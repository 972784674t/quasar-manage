<template>
  <base-content>
    <div class="base-markdown-content">
      <h5>三级菜单在动态路由中的数据结构如下：</h5>
      <json-view theme="one-dark" :data="menuList"/>
      <q-btn color="grey-4" text-color="purple" glossy unelevated icon="camera_enhance" label="Purple text" @click="test" />
    </div>
  </base-content>
</template>

<script>
import BaseContent from '../../components/BaseContent/BaseContent'
import jsonView from 'vue-json-views'
import { mapMutations } from 'vuex'
import { remote } from 'electron'
export default {
  name: 'menu-3',
  components: {
    BaseContent,
    jsonView
  },
  data () {
    return {
      menuList: {
        path: '/menu-1',
        name: 'menu-1',
        meta: {
          title: '我是一级'
        },
        component: 'layout',
        children: [
          {
            path: 'menu-2',
            name: 'menu-2',
            meta: {
              title: '我是二级'
            },
            component: 'layout',
            children: [
              {
                path: 'menu-3',
                name: 'menu-3',
                meta: {
                  title: '我是三级'
                },
                component: '() => import(' + ')'
              }
            ]
          }
        ]
      }
    }
  },
  methods: {
    ...mapMutations(['SET_TOKEN']),
    test () {
      const number = remote.BrowserWindow.getAllWindows().length
      console.log('number: ', number)
    }
  }
}
</script>
