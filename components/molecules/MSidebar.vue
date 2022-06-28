<template>
  <aside :class="['m-sidebar', { 'm-sidebar--open': isSidebarOpen }]">
    <p>Sidebar</p>
  </aside>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'

export default Vue.extend({
  name: 'MSidebar',
  computed: {
    ...mapState(['isSidebarOpen']),
  },
})
</script>

<style lang="scss" scoped>
.m-sidebar {
  width: 240px;
  flex-shrink: 0;
  background-color: $color-neutral-2;
  min-height: calc(100vh - $height-navbar - $height-footer - (2 * $space-1));
  opacity: 0.95;
  @include screen-small {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    transform: translateX(-100%);
    width: calc(100vw - 4rem);
    transition: transform 200ms ease-in-out;
    &--open {
      transform: translateX(0);
      z-index: 2;
    }
  }
}
</style>
