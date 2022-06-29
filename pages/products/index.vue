<template>
  <div class="page">
    <div class="page__sort"></div>
    <o-product-grid :products="products" />
    <div class="page__pagination"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'

export default Vue.extend({
  name: 'PageProducts',
  layout: 'search',
  async fetch({ store, query }) {
    await store.dispatch('GET_PRODUCTS', query)
  },
  computed: {
    ...mapState(['products']),
  },
  watchQuery: true,
})
</script>
