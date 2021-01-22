import store from '../store'

/**
 * <分治法> Construct routes that comply with permissions, and filter routes that do not comply with permissions
 * @param router Unfiltered route : Because the outermost layer has a {index} route for layout,
 *                                  the parameter is index[0].children
 * @param t Temporary variable
 * @returns {*} Filtered route
 */
export default function constructionRouters (router, t) {
  t = router.filter(item => { return item.meta.roles.indexOf(store.getters.getRole) !== -1 })
  for (const i in t) {
    if (t[i].children) {
      t[i].children = constructionRouters(t[i].children)
    }
  }
  return t
}
