<template>
  <q-layout :view="viewStyle" class="full-height">

    <!-- HEADER START -->
    <q-header class="q-py-xs bg-white text-grey-8" height-hint="48"
              style="box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 12px 0px; padding-bottom: 2px">

      <!-- 状态栏 -->
      <q-toolbar style="margin-top: -4px;" class="q-electron-drag">
        <q-btn flat dense round
               aria-label="Menu"
               :icon="leftDrawerOpen === true?'menu_open':'menu'"
               @click="leftDrawerOpen = !leftDrawerOpen"/>
        <!-- toolbar - title -->
        <toolbar-title/>
        <!-- 面包屑 -->
        <breadcrumbs v-if="$q.screen.gt.sm"/>
        <q-space/>
        <!-- 右侧元素 -->
        <toolbar-item-right/>
      </q-toolbar>

      <q-separator color="grey-3"/>

      <!-- TAGVIEW -->
      <tag-view/>

    </q-header>
    <!-- HEADER END -->

    <!-- slideBar START -->
    <q-drawer v-model="leftDrawerOpen"
              show-if-above
              content-class="bg-white"
              :width="240">
      <base-menu/>
    </q-drawer>
    <!-- slideBar END -->

    <!-- container START -->
    <q-page-container class="app-main full-height">

      <transition name="fade-transform" mode="out-in">
        <keep-alive :max="Max_keepAlive" :include="keepAliveList">
          <router-view :key="$route.fullPath"/>
        </keep-alive>
      </transition>

    </q-page-container>
    <!-- container END -->

  </q-layout>
</template>

<script>
import BaseMenu from '../components/Menu/BaseMenu'
import TagView from '../components/TagView/tagView'
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs'
import ToolbarTitle from '../components/Toolbar/toolbarTitle'
import ToolbarItemRight from '../components/Toolbar/toolbarItemRight'

export default {
  name: 'MainLayout',
  components: {
    ToolbarItemRight,
    ToolbarTitle,
    Breadcrumbs,
    TagView,
    BaseMenu
  },
  data () {
    return {
      viewStyle: this.$SildeBar,
      leftDrawerOpen: false,
      Max_keepAlive: this.$Max_KeepAlive,
      keepAliveList: this.$store.getters.getKeepAliveList
    }
  },
  computed: {
    // Get cache list
    getKeepAliveList () {
      return this.$store.getters.getKeepAliveList
    },
    key () {
      return this.$route.fullPath
    }
  },
  watch: {
    getKeepAliveList (n, o) {
      this.keepAliveList = n
    }
  }
}
</script>
