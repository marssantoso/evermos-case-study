<template>
  <header class="m-navbar">
    <div class="m-navbar__container">
      <p>Header</p>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'MNavbar',
})
</script>

<style lang="scss" scoped>
.m-navbar {
  width: 100%;
  height: $height-navbar;
  background-color: $color-neutral-2;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  &__container {
    max-width: $width-container;
    margin: 0 auto;
  }
}
</style>
