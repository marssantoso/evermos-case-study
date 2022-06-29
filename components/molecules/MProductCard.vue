<template>
  <nuxt-link :to="url" class="m-product-card">
    <p style="overflow: scroll">{{ product }}</p>
  </nuxt-link>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { Product } from '~/utils/types'

export default Vue.extend({
  name: 'MProductCard',
  props: {
    product: {
      type: Object as PropType<Product>,
      required: true,
    },
  },
  computed: {
    url(): string {
      return `/products/${this.product.slug}`
    },
  },
})
</script>

<style lang="scss" scoped>
.m-product-card {
  border: 1px solid $color-neutral-3;
}
</style>
