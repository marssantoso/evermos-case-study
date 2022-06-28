<template>
  <footer class="m-footer">
    <p>&copy; {{ year }}</p>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'MFooter',
  computed: {
    year() {
      return new Date().getFullYear()
    },
  },
})
</script>

<style lang="scss" scoped>
.m-footer {
  height: $height-footer;
  width: 100%;
  background-color: $color-neutral-2;
  text-align: center;
  line-height: $height-footer;
}
</style>
