<template>
  <header class="m-navbar">
    <div class="m-navbar__container">
      <nuxt-link to="/" class="m-navbar__home">
        <img src="~/assets/images/icon-home.svg" class="m-navbar__logo" />
        <span>Home</span>
      </nuxt-link>
      <form class="m-navbar__search" @submit.prevent="handleSearch">
        <input v-model="keyword" type="search" placeholder="search" class="m-navbar__input" />
      </form>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'MNavbar',
  data() {
    return {
      keyword: this.$route.query.keyword ?? '',
    }
  },
  watch: {
    '$route.query'(value) {
      if (value?.keyword !== this.keyword) {
        this.keyword = value?.keyword ?? ''
      }
    },
  },
  methods: {
    handleSearch() {
      const query = this.keyword ? { keyword: this.keyword } : {}
      this.$router.push({ name: 'products', query })
    },
  },
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
  z-index: 1;
  box-shadow: $shadow-float;
  &__container {
    height: 100%;
    max-width: $width-container;
    margin: 0 auto;
    padding: 0 $space-1;
    display: flex;
    gap: $space-1;
    align-items: center;
  }
  &__home {
    color: $color-blue-6;
    text-decoration: none;
    display: flex;
    align-items: flex-end;
    letter-spacing: 1px;
    gap: 4px;
    @include screen-desktop {
      width: $width-sidebar;
    }
  }
  &__logo {
    width: 1.5rem;
    height: 1.5rem;
  }
  &__search {
    flex: 1;
    width: 100%;
  }
  &__input {
    border: unset;
    background-color: white;
    box-shadow: $shadow-light;
    padding: 12px;
    border-radius: $radius-1;
    box-sizing: border-box;
    width: 100%;
  }
}
</style>
