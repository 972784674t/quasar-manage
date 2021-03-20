import layout from '../components/Layout/Layout'

/**
 * Routes that require authorized access
 */
const asyncRoutesChildren = [
  {
    path: '/',
    name: 'home',
    meta: {
      roles: ['admin', 'editor', 'test'],
      title: '主页',
      icon: 'home',
      keepAlive: true
    },
    component: () => import('pages/home/home')
  },
  {
    path: '/start',
    name: 'start',
    meta: {
      roles: ['admin', 'editor'],
      title: '快速起步',
      icon: 'design_services',
      keepAlive: true
    },
    component: layout,
    children: [
      {
        path: 'getting-started',
        name: 'gettingStarted',
        meta: {
          roles: ['admin', 'editor'],
          title: '基础配置',
          icon: 'tune',
          keepAlive: true
        },
        component: () => import('pages/router/gettingStarted')
      },
      {
        path: 'router-config',
        name: 'routerConfig',
        meta: {
          roles: ['admin', 'editor'],
          title: '路由配置',
          icon: 'multiple_stop',
          keepAlive: true
        },
        component: () => import('pages/router/routerConfig')
      },
      {
        path: 'my-menu',
        name: 'myMenu',
        meta: {
          roles: ['admin', 'test'],
          title: '关于菜单',
          icon: 'menu',
          keepAlive: true
        },
        component: () => import('pages/router/myMenu')
      },
      {
        path: 'async-router',
        name: 'asyncRouter',
        meta: {
          roles: ['admin', 'editor'],
          title: '动态路由',
          icon: 'all_inclusive',
          keepAlive: true
        },
        component: () => import('pages/router/asyncRouter')
      },
      {
        path: 'async-router-impl',
        name: 'asyncRouterImpl',
        meta: {
          roles: ['admin', 'editor'],
          title: '动态路由实现思路',
          keepAlive: true
        },
        component: () => import('pages/router/asyncRouterImpl')
      }
    ]
  },
  {
    path: '/optimization',
    name: 'optimization',
    meta: {
      roles: ['admin', 'test'],
      title: '性能优化',
      icon: 'memory'
    },
    component: layout,
    children: [
      {
        path: 'volume-optimization',
        name: 'VolumeOptimization',
        meta: {
          roles: ['admin', 'editor'],
          title: '体积优化',
          icon: 'miscellaneous_services',
          keepAlive: true
        },
        component: () => import('pages/optimization/VolumeOptimization')
      },
      {
        path: 'render-optimization',
        name: 'renderOptimization',
        meta: {
          roles: ['admin', 'editor'],
          title: '渲染性能优化',
          icon: 'flip',
          keepAlive: true
        },
        component: () => import('pages/optimization/renderOptimization')
      }
    ]
  },
  {
    path: '/component',
    name: 'component',
    component: layout,
    meta: {
      roles: ['admin', 'test'],
      title: '组件说明',
      icon: 'apps',
      isOpen: true,
      isHidden: false
    },
    children: [
      {
        path: 'keepalive-doc',
        name: 'keepaliveDoc',
        meta: {
          roles: ['admin', 'editor'],
          title: 'keep-alive 缓存',
          icon: 'select_all',
          keepAlive: true
        },
        component: () => import('pages/components/keepaliveDoc')
      },
      {
        path: 'scroll-demo',
        name: 'scrollDemo',
        meta: {
          roles: ['admin', 'editor'],
          title: '滚动区域',
          icon: 'swap_vert',
          keepAlive: true
        },
        component: () => import('pages/components/scrollDemo')
      },
      {
        path: 'tagView-demo',
        name: 'tagViewDemo',
        meta: {
          roles: ['admin', 'editor'],
          title: 'tagView',
          icon: 'exit_to_app',
          keepAlive: true
        },
        component: () => import('pages/components/tagViewDemo')
      },
      {
        path: 'breadcrumbs-demo',
        name: 'breadcrumbsDemo',
        meta: {
          roles: ['admin', 'editor'],
          title: '面包屑',
          icon: 'clear_all',
          keepAlive: true,
          isHidden: false
        },
        component: () => import('pages/components/breadCrumbsDemo')
      },
      {
        path: 'icon',
        name: 'icon',
        meta: {
          roles: ['admin', 'editor'],
          title: 'icon 集合',
          icon: 'grain',
          keepAlive: true
        },
        component: () => import('pages/components/icon')
      },
      {
        path: 'loading-bar',
        name: 'loading-bar',
        meta: {
          roles: ['admin', 'test'],
          title: 'loading-bar',
          icon: 'rotate_right',
          keepAlive: true
        },
        component: () => import('pages/components/loadingBar')
      },
      {
        path: 'markdown',
        name: 'markdown',
        meta: {
          roles: ['admin', 'test'],
          title: 'markdown',
          icon: 'edit_road',
          keepAlive: true
        },
        component: () => import('pages/components/markdown')
      },
      {
        path: 'json',
        name: 'json',
        meta: {
          roles: ['admin', 'test'],
          title: 'json',
          icon: 'settings_ethernet',
          keepAlive: true
        },
        component: () => import('pages/components/json')
      }
    ]
  },
  {
    path: '/axios',
    name: 'axios',
    meta: {
      roles: ['admin', 'editor'],
      title: 'axios',
      icon: 'http',
      keepAlive: true
    },
    component: () => import('pages/axios/axios.vue')
  },
  {
    path: '/menu-1',
    name: 'menu-1',
    meta: {
      roles: ['admin', 'test'],
      title: '三级菜单',
      icon: 'filter_3'
    },
    component: layout,
    children: [
      {
        path: 'menu-2',
        name: 'menu-2',
        meta: {
          roles: ['admin', 'test'],
          title: '菜单 1-1',
          icon: 'filter_2',
          keepAlive: true
        },
        component: layout,
        children: [
          {
            path: 'menu-3',
            name: 'menu3',
            meta: {
              roles: ['admin', 'test'],
              title: '菜单 1-2',
              icon: 'filter_1',
              keepAlive: true
            },
            component: () => import('pages/components/menu3.vue')
          }
        ]
      }
    ]
  },
  {
    path: 'http://www.quasarchs.com/vue-components/button',
    name: 'external-link',
    meta: {
      roles: ['admin', 'editor'],
      title: '外部链接/更多组件',
      icon: 'send'
    }
  },
  {
    path: '/lottie',
    name: 'lottie',
    meta: {
      roles: ['admin', 'editor'],
      title: 'lottie 动效',
      itemLabel: 'MY SHARE',
      icon: 'videocam',
      keepAlive: true
    },
    component: () => import('pages/lottie/lottie')
  },
  {
    path: '/table-detail',
    name: 'tableDetail',
    meta: {
      roles: ['admin', 'editor'],
      title: 'Treats 详情',
      icon: 'blur_linear',
      isHidden: true
    },
    component: () => import('pages/home/tableDetail')
  },
  {
    path: '/cimo',
    name: 'cimo',
    meta: {
      roles: ['admin', 'editor'],
      title: '关于作者',
      icon: 'fab fa-studiovinari',
      isHidden: true
    },
    component: () => import('pages/components/cimo')
  },
  {
    path: '*', // This must be placed at the bottom
    redirect: '/NoFound404',
    meta: {
      roles: ['admin', 'test'],
      isHidden: true
    }
  }
]

const asyncRoutes = [
  {
    path: '/',
    name: 'index',
    redirect: '/',
    component: () => import('layouts/MainLayout'),
    children: asyncRoutesChildren
  }
]

export default asyncRoutes

export { asyncRoutesChildren }
