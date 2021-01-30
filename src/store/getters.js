const getters = {
  getRole: (state) => { return state.role },
  getRoutes: (state) => { return state.routes },
  getTagView: (state) => { return state.tagView },
  getBreadcrumbs: (state) => { return state.breadcrumbs },
  getKeepAliveList: (state) => { return state.keepAliveList },
  getState: (state) => {
    return {
      role: state.role,
      routes: JSON.stringify(state.routes),
      breadcrumbs: state.breadcrumbs,
      user: state.user,
      token: state.token
    }
  }
}

export default getters
