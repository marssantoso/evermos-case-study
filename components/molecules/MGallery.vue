<template>
  <div class="m-gallery">
    <p>Gallery</p>
    <div v-for="image in images" :key="image" class="m-gallery__image">
      {{ image }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'

export default Vue.extend({
  name: 'MGallery',
  computed: {
    ...mapState(['product']),
    images(): string[] {
      return this.product?.images ?? []
    },
  },
})
</script>

<style lang="scss" scoped></style>
