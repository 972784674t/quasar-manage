import { setBreadcrumbs } from '../components/Breadcrumbs/breadcrumbsUtils'
import LoadingBar from '../components/LoadingBar/LoadingBar'
import constantRoutes from '../router/constantRoutes'
import { addTagView, setTagView } from '../components/TagView/tagViewUtils'

/**
 * Navigation guard and permission verification
 * @param app
 * @param router
 * @param Vue
 * @param store
 * @returns {Promise<void>}
 */
export default async ({ app, router, Vue, store }) => {
  router.beforeEach((to, from, next) => {
    // Process TAGVIEW and breadcrumbs after successful login
    handleTagViewAndBreadcrumbsAndKeepAlive(from, to, store, Vue)
    // Simulate obtaining token
    const token = sessionStorage.getItem('access_token')
    const userRole = sessionStorage.getItem('user_role')
    // There is a token indicating that you have logged in
    if (token) {
      // You cannot access the login interface after logging in
      if (to.path === '/login') {
        next({ path: '/' })
      }
      // There is user authority, and the route is not empty, then let go
      if (userRole && store.getters.getRoutes.length) {
        next()
      } else {
        // Simulate when user permissions do not exist, obtain user permissions
        const userRole = sessionStorage.getItem('user_role')
        // And set the corresponding route according to the permissions
        store.commit('SET_ROLES_AND_ROUTES', userRole)
        router.addRoutes(store.getters.getRoutes)
        // If addRoutes is not completed, the guard will execute it again
        next({ ...to, replace: true })
      }
    } else {
      if (to.path !== '/logon') {
        next({ path: '/logon' })
      } else {
        next()
      }
    }
  })
  router.afterEach(() => {
    // Use multiple stop() to ensure that LoadingBar is properly closed after dynamically adding routes
    LoadingBar.stop()
    LoadingBar.stop()
  })
}

/**
 * Processing tagView and breadcrumbs
 * @param to
 */
function handleTagViewAndBreadcrumbsAndKeepAlive (from, to, store, Vue) {
  if (to.name != null) {
    document.title = to.meta.title + Vue.prototype.$title
    LoadingBar.start()
    // is a public route ?
    for (let i = 0; i < constantRoutes.length; i++) {
      if (constantRoutes[i].path === to.path) {
        return
      }
    }
    // Determine whether it is a refresh operation,
    // if it is a refresh operation, get the saved tagView information from sessionStorage
    let tagViewOnSS = []
    JSON.parse(window.sessionStorage.getItem('tagView')) === null ? window.sessionStorage.setItem('tagView', '[]') : tagViewOnSS = JSON.parse(window.sessionStorage.getItem('tagView'))
    if (store.getters.getTagView.length === 0 && tagViewOnSS.length !== 0) {
      setTagView(tagViewOnSS)
      store.commit('SET_KEEPALIVE_LIST', tagViewOnSS)
    } else if (from.fullPath !== to.fullPath) {
      addTagView(to)
    }
    setBreadcrumbs(to.matched, to.query)
    handleKeepAlive(to)
  }
}

/**
 * Handle redundant layout: router-view and keep the current component under the first layer index <router-view>
 * This method cannot filter the on-demand loading <layout> used for nested routing
 * @param to
 */
function handleKeepAlive (to) {
  if (to.matched && to.matched.length > 2) {
    for (let i = 0; i < to.matched.length; i++) {
      const element = to.matched[i]
      if (element.components.default.name === 'Layout') {
        to.matched.splice(i, 1)
        handleKeepAlive(to)
      }
    }
  }
}

/**
 * This method can filter on-demand loading <layout> used for nested routing
 * @param to
 */
// async function handleKeepAlive (to) {
//   if (to.matched && to.matched.length > 2) {
//     for (let i = 0; i < to.matched.length; i++) {
//       const element = to.matched[i]
//       if (element.components.default.name === 'Layout') {
//         to.matched.splice(i, 1)
//         await handleKeepAlive(to)
//       }
//       if (typeof element.components.default === 'function') {
//         await element.components.default()
//         await handleKeepAlive(to)
//       }
//     }
//   }
// }
