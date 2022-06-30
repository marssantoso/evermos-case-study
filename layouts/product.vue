<template>
  <div class="layout">
    <m-navbar />
    <m-breadcrumb />
    <div class="layout__container">
      <aside class="layout__gallery">
        <m-gallery />
      </aside>
      <div class="layout__content">
        <nuxt />
      </div>
    </div>
    <m-footer />
    <a-backdrop :value="isSidebarOpen" @click.native="toggleSidebar(false)" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState, mapMutations } from 'vuex'

export default Vue.extend({
  name: 'LayoutSearch',
  computed: {
    ...mapState(['isSidebarOpen']),
  },
  methods: {
    ...mapMutations({ toggleSidebar: 'TOGGLE_SIDEBAR' }),
  },
})
</script>

<style lang="scss" scoped>
.layout {
  max-width: $width-container;
  padding-top: calc($height-navbar + $space-1);
  margin: 0 auto;
  &__container {
    display: flex;
    gap: $space-1;
    @include screen-mobile {
      flex-direction: column;
    }
  }
  &__gallery {
    width: $width-gallery;
  }
  &__content {
    width: 100%;
    height: 100%;
    min-height: calc(100vh - $height-navbar - $height-footer - $height-breadcrumb - (4 * $space-1));
    @include screen-desktop {
      padding-left: $space-1;
    }
  }
}
</style>
