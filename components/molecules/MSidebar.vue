<template>
  <aside :class="['m-sidebar', { 'm-sidebar--open': isSidebarOpen }]">
    <m-filter />
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
  width: $width-sidebar;
  flex-shrink: 0;
  background-color: $color-light;
  min-height: calc(100vh - $height-navbar - $height-footer - $height-breadcrumb - (4 * $space-1));
  opacity: 0.95;
  position: sticky;
  top: calc($height-navbar + $space-1);
  align-self: flex-start;
  @include screen-tablet {
    position: fixed;
    top: 0;
    bottom: 0;
    transform: translateX(-100%);
    max-width: calc(100vw - 2rem);
    transition: transform 200ms ease-in-out;
    padding: $space-1;
    height: 100vh;
    overflow-y: scroll;
    box-sizing: border-box;
    &--open {
      transform: translateX(0);
      z-index: 2;
    }
  }
}
</style>
