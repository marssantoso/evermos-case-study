<template>
  <div class="m-breadcrumb">
    <p>Breadcrumb</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'MBreadcrumb',
})
</script>

<style lang="scss" scoped>
.m-breadcrumb {
  height: $height-breadcrumb;
  width: 100%;
  background-color: $color-neutral-2;
}
</style>
