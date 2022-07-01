<template>
  <div class="page">
    <h1 class="page__title">{{ product.name }}</h1>
    <a-stats :product="product" is-full />
    <h2 class="page__price">{{ price }}</h2>
    <a-divider />
    <section class="page__section">
      <h3 class="page__subtitle">Detail</h3>
      <p class="page__description">{{ product.description }}</p>
    </section>
    <section class="page__section">
      <h4 class="page__subtitle--smaller">Category</h4>
      <p class="page__description">{{ product.category }}</p>
    </section>
    <section class="page__section">
      <h4 class="page__subtitle--smaller">Location</h4>
      <p class="page__description">{{ product.location }}</p>
    </section>
    <section class="page__section">
      <a-button is-block>Add to cart</a-button>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
import { formatCurrency } from '~/utils/formatters'

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
  async asyncData({ store }) {
    await store.dispatch('GET_SUGGESTED_KEYWORDS')
  },
  computed: {
    ...mapState(['product']),
    price(): string {
      return formatCurrency(this.product.price, 'Rp')
    },
  },
})
</script>

<style lang="scss" scoped>
.page {
  @include screen-mobile {
    padding: 0 $space-1;
  }
  &__title {
    font-size: 1.75rem;
    margin-top: unset;
    margin-bottom: $space-1;
  }
  &__price {
    font-size: 2rem;
    margin: $space-1 0;
  }
  &__subtitle {
    margin: unset;
    margin-bottom: 0.5rem;
    font-size: 1.25rem;
    &--smaller {
      margin: unset;
      margin-bottom: 0.25rem;
      font-size: 1rem;
    }
  }
  &__description {
    margin: unset;
    margin-bottom: $space-1;
    font-size: 0.875rem;
    letter-spacing: 0.5px;
  }
  &__section {
    margin-bottom: $space-1;
  }
}
</style>
