<template>
  <transition name="a-backdrop__transition" :duration="150">
    <div v-show="value" class="a-backdrop" />
  </transition>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ABackdrop',
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isOpen: false,
    }
  },
  watch: {
    value(isOpen) {
      setTimeout(() => {
        this.isOpen = isOpen
      }, 3000)
    },
  },
})
</script>

<style lang="scss" scoped>
.a-backdrop {
  position: fixed;
  backdrop-filter: blur(4px);
  transition: opacity 1000ms ease-in-out;
  @include inset;
  z-index: 2;
  &::before {
    content: '';
    position: absolute;
    background-color: rgba($color-dark, 0.25);
    @include inset;
  }
  &__transition {
    &-enter-active {
      transition: opacity 150ms ease-out;
    }
    &-leave-active {
      transition: opacity 100ms ease-in;
    }
    &-enter,
    &-leave-to {
      opacity: 0;
    }
  }
}

.v-enter,
.v-leave-to {
  opacity: 0 !important;
}
</style>
