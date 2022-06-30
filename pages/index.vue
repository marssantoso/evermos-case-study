<template>
  <div class="page">
    <div class="page__sort"></div>
    <o-product-grid :products="products" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'

export default Vue.extend({
  name: 'PageIndex',
  async fetch({ store }) {
    await store.dispatch('GET_PRODUCTS', { limit: 8 })
  },
  computed: {
    ...mapState(['products']),
  },
  watchQuery: true,
})
</script>
