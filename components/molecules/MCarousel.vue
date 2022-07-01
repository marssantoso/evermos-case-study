<template>
  <div>
    <div v-for="n in 2" :key="n" :class="['m-carousel', { 'm-carousel--alternate': !(n % 2) }]">
      <div :class="['m-carousel__group', { 'm-carousel__group--alternate': !(n % 2) }]">
        <nuxt-img v-for="(image, m) in carousel" :key="`${image}-${n}-${m}`" :src="image" class="m-carousel__image" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'

export default Vue.extend({
  name: 'MCarousel',
  computed: {
    ...mapGetters(['carousel']),
  },
})
</script>

<style lang="scss" scoped>
.m-carousel {
  position: absolute;
  width: 200%;
  display: flex;
  animation: slide 30s linear infinite forwards;
  bottom: $space-2;
  left: 0;
  @include screen-mobile {
    animation: slide 10s linear infinite forwards;
  }
  &--alternate {
    right: 0;
    bottom: calc($space-3 + 128px);
    animation: slide 30s linear infinite reverse;
    @include screen-mobile {
      bottom: calc($space-3 + 64px);
      animation: slide 10s linear infinite reverse;
    }
  }
  &__group {
    display: flex;
    padding-left: 0;
    margin: 0;
    gap: $space-1;
    &--alternate {
      flex-direction: row-reverse;
    }
  }
  &__image {
    width: 128px;
    height: 128px;
    opacity: 0.85;
    @include screen-mobile {
      width: 64px;
      height: 64px;
    }
  }
}

@keyframes slide {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>
