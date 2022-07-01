<template>
  <div class="a-stats">
    <img src="~/assets/images/icon-star.svg" alt="icon star" class="a-stats__icon" />
    <strong>{{ product.rating }}</strong>
    <span class="a-stats__separator">&bull;</span>
    <span>Sold</span>
    <strong>{{ product.sold }}</strong>
    <template v-if="isFull">
      <span class="a-stats__separator">&bull;</span>
      <strong>{{ product.stock }}</strong>
      <span>available</span>
    </template>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { Product } from '~/utils/types'

export default Vue.extend({
  name: 'AStats',
  props: {
    product: {
      type: Object as PropType<Product>,
      required: true,
    },
    isFull: {
      type: Boolean,
      default: false,
    },
  },
})
</script>

<style lang="scss" scoped>
.a-stats {
  display: flex;
  align-items: center;
  font-size: 0.75rem;
  gap: 4px;
  color: $color-neutral-5;
  &__icon {
    display: inline;
    width: 1rem;
    height: 1rem;
    svg path {
      color: $color-yellow-1;
    }
  }
  &__separator {
    color: $color-neutral-3;
    padding: 0 4px;
  }
}
</style>
