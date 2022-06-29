<template>
  <div :class="`o-product-grid o-product-grid--${view}`">
    <m-product-card
      v-for="product in products"
      :key="product.slug"
      :product="product"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'OProductGrid',
  props: {
    view: {
      type: String,
      validator: (v) => ['grid', 'list'].includes(v),
      default: 'grid',
    },
    products: {
      type: Array,
      default: () => [],
    },
  },
})
</script>

<style lang="scss" scoped>
.o-product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax($width-product-card, 1fr));
  grid-gap: $space-1;
}
</style>
