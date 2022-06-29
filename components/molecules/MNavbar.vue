<template>
  <header class="m-navbar">
    <div class="m-navbar__container">
      <nuxt-link to="/">Home</nuxt-link>
      <form class="m-navbar__search" @submit.prevent="handleSearch">
        <input v-model="keyword" type="text" placeholder="search" />
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
      keyword: '',
    }
  },
  methods: {
    handleSearch() {
      const { query } = this.$route
      this.$router.push({
        name: 'products',
        query: { ...query, keyword: this.keyword ? this.keyword : undefined },
      })
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
  &__container {
    max-width: $width-container;
    margin: 0 auto;
    padding: $space-1 0;
    display: flex;
    gap: $space-1;
    align-items: center;
  }
}
</style>
