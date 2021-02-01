export function getUserinfo (state) {
  Object.keys(state.userinfo).forEach(item => {
    console.log(`${item}: `, state.userinfo[item])
  })
  return state.userinfo
}
