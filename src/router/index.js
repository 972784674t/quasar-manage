// import Vue from 'vue'
// import VueRouter from 'vue-router'
// import constantRoutes from 'src/router/constantRoutes'
//
// Vue.use(VueRouter)
//
// /*
//  * If not building with SSR mode, you can
//  * directly export the Router instantiation;
//  *
//  * The function below can be async too; either use
//  * async/await or return a Promise which resolves
//  * with the Router instance.
//  */
//
// /**
//  *  Reset route when user logs out
//  */
// export function resetRouter () {
//   const newRouter = createRouter()
//   router.matcher = newRouter.matcher
// }
//
// const createRouter = () => new VueRouter({
//   scrollBehavior: () => ({ x: 0, y: 0 }),
//   constantRoutes,
//
//   // Leave these as they are and change in quasar.conf.js instead!
//   // quasar.conf.js -> build -> vueRouterMode
//   // quasar.conf.js -> build -> publicPath
//   mode: process.env.VUE_ROUTER_MODE,
//   base: process.env.VUE_ROUTER_BASE
// })
//
// // eslint-disable-next-line no-void
// let router = void 0
// export default async function (/* { store, ssrContext } */) {
//   const Router = createRouter()
//   router = Router
//   return Router
// }
//
// console.log(13, router)
//
// export { router }

import Vue from 'vue'
import VueRouter from 'vue-router'
import constantRoutes from './constantRoutes'

Vue.use(VueRouter)

// Solve the error when the routing guard is redirected
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

// Reset route when user logs out
export function resetRouter () {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher
}

const createRouter = () => new VueRouter({
  mode: process.env.VUE_ROUTER_MODE,
  base: process.env.BASE_URL,
  routes: constantRoutes
})

const router = createRouter()

export default router
