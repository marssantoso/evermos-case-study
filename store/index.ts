import { ActionTree, MutationTree, GetterTree } from 'vuex'
import { Product, Meta, RootState, Facets } from '~/utils/types'

export const state = (): RootState => ({
  isLoading: false,
  isSidebarOpen: false,
  products: [],
  product: null,
  meta: null,
  facets: null,
})

export const getters: GetterTree<RootState, RootState> = {}

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
      console.error(error)
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
      console.error(error)
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
      console.error(error)
    } finally {
      commit('SET_LOADING', false)
    }
  },
}
