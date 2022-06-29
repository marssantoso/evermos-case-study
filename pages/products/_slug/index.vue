<template>
  <div class="page">
    <pre>{{ product }}</pre>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'

export default Vue.extend({
  name: 'PageProductsSlug',
  layout: 'product',
  async validate({ store, params }) {
    try {
      await store.dispatch('GET_PRODUCT', params.slug)
      return !!store.state.product
    } catch (error) {
      return false
    }
  },
  computed: {
    ...mapState(['product']),
  },
})
</script>

<style lang="scss" scoped></style>
