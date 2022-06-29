import { ActionTree, MutationTree, GetterTree } from 'vuex'
import { Product, Meta, RootState } from '~/utils/types'

export const state = (): RootState => ({
  isLoading: false,
  isSidebarOpen: false,
  products: [],
  product: null,
  meta: null,
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
}

export const actions: ActionTree<RootState, RootState> = {
  async GET_PRODUCTS({ commit }, { keyword = '' }) {
    commit('SET_LOADING', true)
    try {
      const qs = new URLSearchParams({ keyword, limit: '60' }).toString()
      const { data } = await this.$axios.get(
        `/api/products${qs ? '?' : ''}${qs}`
      )
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
}
