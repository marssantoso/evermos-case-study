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
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'LayoutSearch',
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
    @include screen-tablet {
      padding: 0 $space-1;
    }
    @include screen-mobile {
      flex-direction: column;
      padding: unset;
    }
  }
  &__gallery {
    width: $width-gallery;
    max-width: 100%;
    flex-shrink: 0;
    @include screen-tablet {
      max-width: $width-sidebar;
    }
    @include screen-mobile {
      width: 100vw;
      max-width: unset;
    }
  }
  &__content {
    width: 100%;
    height: 100%;
    min-height: calc(100vh - $height-navbar - $height-footer - $height-breadcrumb - (2 * $space-1));
  }
}
</style>
