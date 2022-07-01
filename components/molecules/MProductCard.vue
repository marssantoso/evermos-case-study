<template>
  <nuxt-link :to="url" class="m-product-card" @mouseover.native="isHovered = true" @mouseleave.native="isHovered = false">
    <div class="m-product-card__thumbnail">
      <nuxt-img v-if="thumbnail" :src="thumbnail" :alt="product.name" class="m-product-card__image" loading="lazy" />
      <img v-else src="~/assets/images/icon-image.svg" alt="icon image" class="m-product-card__image--empty" />
    </div>
    <div class="m-product-card__content">
      <transition name="m-product-card__transition" :duration="200">
        <div v-if="!isHovered" key="m-product-card__front" class="m-product-card__front">
          <p class="m-product-card__name">{{ product.name }}</p>
          <p class="m-product-card__price">{{ price }}</p>
          <a-stats v-if="product.sold" :product="product" />
        </div>
        <div v-else key="m-product-card__back" class="m-product-card__back">
          <p class="m-product-card__description">{{ product.description }}</p>
          <p class="m-product-card__description">Category: {{ product.category }}</p>
          <p class="m-product-card__description">Location: {{ product.location }}</p>
        </div>
      </transition>
    </div>
  </nuxt-link>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { Product } from '~/utils/types'
import { formatCurrency } from '~/utils/formatters'

export default Vue.extend({
  name: 'MProductCard',
  props: {
    product: {
      type: Object as PropType<Product>,
      required: true,
    },
  },
  data() {
    return {
      isHovered: false,
    }
  },
  computed: {
    url(): string {
      return `/products/${this.product.slug}`
    },
    thumbnail(): string {
      if (!this.product.images) return ''
      return this.product.images[0]
    },
    price(): string {
      return formatCurrency(this.product.price, 'Rp')
    },
  },
})
</script>

<style lang="scss" scoped>
.m-product-card {
  border: 1px solid $color-neutral-3;
  border-radius: $radius-2;
  overflow: hidden;
  text-decoration: none;
  color: $color-dark;
  background-color: white;
  transition: box-shadow 0.15s ease-in-out;
  &:hover {
    box-shadow: $shadow-float;
  }
  &__thumbnail {
    background-color: $color-neutral-2;
    display: flex;
    justify-content: center;
    align-items: center;
    @include responsive-image;
  }
  &__image {
    &--empty {
      height: 3rem !important;
      width: 3rem !important;
      opacity: 0.5;
    }
  }
  &__content {
    padding: $space-1;
    position: relative;
    box-sizing: border-box;
    height: 130px;
  }
  &__front,
  &__back {
    position: absolute;
    height: 100%;
    width: calc(100% - (2 * $space-1));
  }
  &__name {
    margin: 0;
    text-transform: uppercase;
    letter-spacing: 0.25px;
    color: $color-neutral-5;
    height: 2rem;
    @include truncate(2);
  }
  &__description {
    margin: unset;
    margin-bottom: 0.5rem;
    letter-spacing: 0.2px;
    font-size: 0.875rem;
    color: $color-neutral-5;
    @include truncate(2);
  }
  &__price {
    font-weight: bold;
  }
  &__transition {
    &-enter-active {
      transition: transform 200ms, opacity 100ms ease-out;
    }
    &-leave-active {
      transition: transform 200ms, opacity 100ms ease-in;
    }
    &-enter,
    &-leave-to {
      opacity: 0;
      transform: rotateY(180deg);
    }
  }
}
</style>
