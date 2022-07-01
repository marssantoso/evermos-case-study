<template>
  <div class="page">
    <div class="page__hero">
      <form class="page__form" @submit.prevent="handleSearch">
        <h1 class="page__title">Search for countless amazing products</h1>
        <a-input v-model="keyword" :placeholder="`Search for ${currentSuggestedKeyword}`" is-block />
      </form>
      <m-carousel />
    </div>
    <section class="page__section">
      <h1 class="page__section-title">High rated products</h1>
      <o-product-grid :products="products" />
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState, mapGetters, mapActions } from 'vuex'

export default Vue.extend({
  name: 'PageIndex',
  async asyncData({ store }) {
    await store.dispatch('GET_PRODUCTS', { limit: 8, sort: 'rating' })
    await store.dispatch('GET_SUGGESTED_KEYWORDS')
  },
  data() {
    return {
      keyword: '',
    }
  },
  computed: {
    ...mapState(['products']),
    ...mapGetters(['carousel', 'currentSuggestedKeyword']),
  },
  watchQuery: true,
  mounted() {
    this.setCurrentKeywordIndex()
  },
  methods: {
    ...mapActions({ setCurrentKeywordIndex: 'SET_CURRENT_KEYWORD_INDEX' }),
    handleSearch() {
      const query = { keyword: this.keyword ? this.keyword : this.currentSuggestedKeyword }
      this.$router.push({ name: 'products', query })
    },
  },
})
</script>

<style lang="scss" scoped>
.page {
  &__hero {
    height: 75vh;
    background: linear-gradient($color-blue-3, $color-green-3);
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    border-bottom-left-radius: $radius-2;
    border-bottom-right-radius: $radius-2;
    overflow: hidden;
  }
  &__title {
    font-size: 1rem;
    color: $color-blue-6;
  }
  &__form {
    z-index: 1;
    position: absolute;
    left: calc($width-sidebar + $space-1);
    right: calc($width-sidebar + $space-1);
    bottom: calc((2 * 128px) + (5 * $space-1));
    @include screen-mobile {
      left: $space-1;
      right: $space-1;
      bottom: calc((2 * 64px) + (5 * $space-1));
    }
  }
  &__section {
    margin: $space-3 0 $space-1;
    &-title {
      text-align: center;
    }
  }
}
</style>
