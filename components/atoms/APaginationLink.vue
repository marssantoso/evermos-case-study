<template>
  <component :is="href ? 'nuxt-link' : 'div'" :to="href" :class="['a-pagination-link', { 'a-pagination-link--disabled': !href }]">
    <span class="a-pagination-link__text">
      <slot />
    </span>
  </component>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

export default Vue.extend({
  name: 'APaginationLink',
  props: {
    href: {
      type: Object as PropType<{ name: string; query: any }>,
      default: () => undefined,
    },
  },
})
</script>

<style lang="scss" scoped>
.a-pagination-link {
  text-decoration: none;
  background-color: white;
  color: $color-blue-5;
  border: 1px solid $color-neutral-3;
  border-radius: $radius-2;
  padding: 4px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  &__text {
    width: 1.25rem;
    height: 1.25rem;
    line-height: 1.25rem;
    text-align: center;
  }
  &--disabled {
    cursor: not-allowed;
    opacity: 0.25;
  }
}
</style>
