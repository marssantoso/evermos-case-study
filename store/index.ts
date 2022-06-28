interface RootState {
  isSidebarOpen: boolean
}

export const state = (): RootState => ({
  isSidebarOpen: false,
})

export const mutations = {
  TOGGLE_SIDEBAR(state: RootState, payload?: boolean) {
    if (payload === undefined) {
      state.isSidebarOpen = !state.isSidebarOpen
    } else {
      state.isSidebarOpen = payload
    }
  },
}
