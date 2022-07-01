<template>
  <header class="m-navbar">
    <div class="m-navbar__container">
      <nuxt-link to="/" class="m-navbar__home">
        <img src="~/assets/images/icon-home.svg" class="m-navbar__logo" />
        <span>Home</span>
      </nuxt-link>
      <form class="m-navbar__search" @submit.prevent="handleSearch">
        <a-input v-model="keyword" :placeholder="`Search for ${currentSuggestedKeyword}`" is-block />
      </form>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'

export default Vue.extend({
  name: 'MNavbar',
  data() {
    return {
      keyword: this.$route.query.keyword ?? '',
    }
  },
  computed: {
    ...mapGetters(['currentSuggestedKeyword']),
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
      const query = { keyword: this.keyword ? this.keyword : this.currentSuggestedKeyword }
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
  z-index: 2;
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
    letter-spacing: 0.5px;
    font-size: 0.875rem;
    gap: 4px;
    @include screen-desktop {
      width: $width-sidebar;
    }
  }
  &__logo {
    width: 1.25rem;
    height: 1.25rem;
  }
  &__search {
    flex: 1;
    width: 100%;
  }
}
</style>
