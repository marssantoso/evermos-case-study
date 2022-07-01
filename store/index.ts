import { ActionTree, MutationTree, GetterTree } from 'vuex'
import { Product, Meta, RootState, Facets } from '~/utils/types'

export const state = (): RootState => ({
  isLoading: false,
  isSidebarOpen: false,
  products: [],
  product: null,
  meta: null,
  facets: null,
  keywords: [],
  currentKeywordIndex: 0,
})

export const getters: GetterTree<RootState, RootState> = {
  carousel(state: RootState): unknown[] {
    if (!state.products.length) return []

    const images = state.products.map(({ images }) => images).flat()
    if (state.products.length >= 20) return images

    // duplicate images so there is no empty spaces
    const length = Math.ceil(20 / state.products.length)
    return Array.from({ length }).fill(images).flat()
  },
  currentSuggestedKeyword(state: RootState): string {
    return state.keywords[state.currentKeywordIndex] ?? '...'
  },
}

export const mutations: MutationTree<RootState> = {
  TOGGLE_SIDEBAR(state: RootState, payload?: boolean) {
    if (payload === undefined) {
      state.isSidebarOpen = !state.isSidebarOpen
    } else {
      state.isSidebarOpen = payload
    }
  },
  SET_LOADING(state: RootState, payload: boolean) {
    state.isLoading = payload
  },
  SET_PRODUCTS(state: RootState, payload: Product[]) {
    state.products = payload
  },
  SET_PRODUCT(state: RootState, payload: Product) {
    state.product = payload
  },
  SET_META(state: RootState, payload: Meta) {
    state.meta = payload
  },
  SET_FACETS(state: RootState, payload: Facets) {
    state.facets = payload
  },
  SET_SUGGESTED_KEYWORDS(state: RootState, payload: string[]) {
    state.keywords = payload
  },
  SET_CURRENT_KEYWORD_INDEX(state: RootState) {
    if (!state.keywords.length) return

    if (state.currentKeywordIndex >= state.keywords.length - 1) {
      state.currentKeywordIndex = 0
    } else {
      state.currentKeywordIndex += 1
    }
  },
}

export const actions: ActionTree<RootState, RootState> = {
  async GET_PRODUCTS({ commit }, query) {
    commit('SET_LOADING', true)
    try {
      const qs = new URLSearchParams(query).toString()
      const { data } = await this.$axios.get(`/api/products${qs ? '?' : ''}${qs}`)
      commit('SET_PRODUCTS', data.data)
      commit('SET_META', data.meta)
    } catch (error) {
      // TODO: handle error here
    } finally {
      commit('SET_LOADING', false)
    }
  },
  async GET_PRODUCT({ commit }, slug) {
    commit('SET_LOADING', true)
    try {
      const { data } = await this.$axios.get(`/api/products/${slug}`)
      commit('SET_PRODUCT', data.data)
    } catch (error) {
      // TODO: handle error here
    } finally {
      commit('SET_LOADING', false)
    }
  },
  async GET_FACETS({ commit }, keyword = '') {
    commit('SET_LOADING', true)
    try {
      const { data } = await this.$axios.get(`/api/facets${keyword ? '?keyword=' : ''}${keyword}`)
      commit('SET_FACETS', data.data)
    } catch (error) {
      // TODO: handle error here
    } finally {
      commit('SET_LOADING', false)
    }
  },
  async GET_SUGGESTED_KEYWORDS({ state, commit }) {
    if (state.keywords.length) return

    try {
      const { data } = await this.$axios.get('/api/keywords')
      commit('SET_SUGGESTED_KEYWORDS', data.data)
    } catch (error) {
      // TODO: handle error here
    }
  },
  SET_CURRENT_KEYWORD_INDEX({ commit, dispatch }) {
    setTimeout(() => {
      commit('SET_CURRENT_KEYWORD_INDEX')
      dispatch('SET_CURRENT_KEYWORD_INDEX')
    }, 5000)
  },
}
