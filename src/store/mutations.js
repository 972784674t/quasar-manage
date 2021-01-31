import asyncRoutes from '../router/asyncRoutes'
import constructionRouters from '../router/permissionUtils'
import deepClone from '../utils/clone-utils'
import router, { resetRouter } from '../router'
import { removeATagView, removeOneSide } from '../components/TagView/tagViewUtils'

const mutations = {

  /**
   * Set the user type, and obtain authorized routing according to permissions
   * @param state
   * @param payload
   * @constructor
   */
  SET_ROLES_AND_ROUTES: (state, payload) => {
    state.role = payload
    // deepClone
    const accessRoutes = deepClone(asyncRoutes)
    accessRoutes[0].children = constructionRouters(accessRoutes[0].children)
    state.routes = accessRoutes
  },

  /**
   * sign out
   * @param state
   * @param payload
   * @constructor
   */
  LOGOUT: (state, payload) => {
    state.role = ''
    state.routes = []
    state.tagView = []
    sessionStorage.removeItem('access_token')
    sessionStorage.removeItem('user_role')
    resetRouter()
  },

  /**
   * Add tagView
   * @param state
   * @param payload
   * @constructor
   */
  ADD_TAG_VIEW: (state, payload) => {
    const size = state.tagView.length
    // When entering or refreshing the page for the first time & the current route is not the root route
    if (!size && payload.fullPath !== '/') {
      state.tagView.push(payload)
      return
    }
    // To avoid adding tagView repeatedly. Construct an array t[] identified by fullPath
    const t = []
    for (let i = 0; i < size; i++) {
      t.push(state.tagView[i].fullPath)
    }
    // If there is no current route in t[]
    if (t.indexOf(payload.fullPath) === -1) {
      state.tagView.push(payload)
    }
  },

  /**
   * set tagView
   * @param state
   * @param payload
   * @constructor
   */
  SET_TAG_VIEW: (state, payload) => {
    state.tagView = payload
  },

  /**
   * remove tagView
   * case 'undefined' : Remove all tagView
   * case 'object' : Remove one side tagView
   * default 'The subscript i of the element to be deleted ' : Remove the i-th tagView
   *          If the first tagView is removed, jump to the current first tagView
   *          If the last tagView is removed, jump to the current last tagView
   * @param state
   * @param payload
   * @constructor
   */
  REMOVE_TAG_VIEW: (state, payload) => {
    switch (typeof payload) {
      case 'undefined':
        // remove all tagView
        state.tagView = []
        window.sessionStorage.setItem('tagView', '[]')
        router.push('/')
        break
      case 'object':
        removeOneSide(state, payload)
        break
      default:
        removeATagView(state, payload)
        break
    }
  },

  /**
   * Set breadcrumbs
   * @param state
   * @param payload
   * @constructor
   */
  SET_BREADCRUMBS: (state, payload) => {
    state.breadcrumbs = payload
  },

  /**
   * Set cache list according to tagView
   * @param payload tagView[]
   */
  SET_KEEPALIVE_LIST: (state, payload) => {
    state.keepAliveList = []
    for (let i = 0; i < payload.length; i++) {
      if (payload[i].keepAlive) {
        state.keepAliveList.push(payload[i].name)
      }
    }
    // If you need to cache the homepage, as shown below,
    // push the corresponding routing component name at the end of the method.
    // state.keepAliveList.push('home')
    return state.keepAliveList
  }

}

export default mutations
