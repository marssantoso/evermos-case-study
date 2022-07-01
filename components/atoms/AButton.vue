<template>
  <button :class="classes" :disabled="isDisabled" @click="$emit('click')">
    <slot />
  </button>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'AButton',
  props: {
    isDisabled: {
      type: Boolean,
      default: false,
    },
    isBlock: {
      type: Boolean,
      default: false,
    },
    isRounded: {
      type: Boolean,
      default: false,
    },
    variant: {
      type: String,
      validator: (v) => ['primary', 'white'].includes(v),
      default: 'primary',
    },
  },
  computed: {
    classes() {
      return ['a-button', `a-button--${this.variant}`, { 'a-button--block': this.isBlock, 'a-button--rounded': this.isRounded }]
    },
  },
})
</script>

<style lang="scss" scoped>
.a-button {
  padding: 0.875rem 1.5rem;
  font-size: 1rem;
  border: 1px solid $color-blue-2;
  border-radius: $radius-2;
  background-color: $color-blue-3;
  color: $color-blue-6;
  box-shadow: $shadow-glow;
  cursor: pointer;
  transition: all 150ms ease-in-out;
  &:hover {
    background-color: $color-blue-4;
  }
  &:active {
    background-color: $color-blue-5;
    color: $color-blue-2;
  }
  &:disabled {
    border-color: $color-neutral-2;
    background-color: $color-neutral-3;
    color: $color-neutral-4;
    box-shadow: unset;
  }
  &--block {
    width: 100%;
  }
  &--rounded {
    border-radius: $radius-full;
    padding: 0.5rem $space-2;
  }
  &--white {
    background-color: white;
    border-color: $color-blue-2;
    color: $color-blue-6;
    &:hover {
      background-color: $color-neutral-1;
    }
    &:active {
      background-color: $color-neutral-2;
      color: $color-blue-5;
    }
  }
}
</style>
