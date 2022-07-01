<template>
  <div class="layout">
    <m-navbar />
    <nuxt />
    <m-footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'LayoutDefault',
})
</script>

<style lang="scss" scoped>
.layout {
  max-width: $width-container;
  padding-top: $height-navbar;
  margin: 0 auto;
}
</style>
