<template>
  <div class="m-gallery">
    <div class="m-gallery__cover">
      <transition v-for="(image, index) in images" :key="image" name="m-gallery__transition">
        <nuxt-img v-if="index === activeIndex" :src="image" />
      </transition>
      <img v-if="!images.length" src="~/assets/images/icon-image.svg" alt="icon image" class="m-gallery__cover--empty" />
    </div>
    <div v-if="images.length > 1" class="m-gallery__thumbnails">
      <nuxt-img
        v-for="(image, index) in images"
        :key="image"
        :src="image"
        :class="['m-gallery__tile', { 'm-gallery__tile--active': index === activeIndex }]"
        @click="activeIndex = index"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'

export default Vue.extend({
  name: 'MGallery',
  data() {
    return {
      activeIndex: 0,
    }
  },
  computed: {
    ...mapState(['product']),
    images(): string[] {
      return this.product?.images ?? []
    },
    activeImage(): string {
      if (!this.images.length) return ''
      return this.images[this.activeIndex]
    },
  },
})
</script>

<style lang="scss" scoped>
.m-gallery {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: $space-1;
  &__cover {
    background-color: $color-neutral-2;
    border-radius: $radius-2;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    @include responsive-image;
    @include screen-mobile {
      border-radius: unset;
    }
    &--empty {
      width: 3rem !important;
      height: 3rem !important;
      opacity: 0.5;
    }
  }
  &__thumbnails {
    display: flex;
    gap: $space-1;
    @include screen-mobile {
      justify-content: center;
    }
  }
  &__tile {
    background-color: $color-neutral-2;
    width: 4rem;
    height: 4rem;
    object-fit: cover;
    cursor: pointer;
    border: 2px solid transparent;
    border-radius: $radius-1;
    &--active {
      border-color: $color-yellow-5;
    }
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
</style>
