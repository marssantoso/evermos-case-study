<template>
  <div class="page">
    <div class="page__panel">
      <div class="page__sort">
        <a-select id="sort" v-model="sort" label="Sort by" :options="sortOptions" />
      </div>
    </div>
    <div v-if="keyword" class="page__summary">Showing {{ results.showing }} of {{ results.total }} results for "{{ keyword }}"</div>
    <o-product-grid :products="products" />
    <div class="page__pagination">
      <m-pagination />
    </div>
    <div class="page__fab">
      <button class="page__button" @click="toggleSidebar(true)">Filter</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState, mapMutations } from 'vuex'
import { Option } from '~/utils/types'

interface Data {
  sort: string | null
  sortOptions: Option[]
}

export default Vue.extend({
  name: 'PageProducts',
  layout: 'search',
  async asyncData({ store, query }) {
    await store.dispatch('GET_PRODUCTS', query)
    await store.dispatch('GET_FACETS', query.keyword)
  },
  data(): Data {
    return {
      sort: (this.$route.query.sort as string) ?? null,
      sortOptions: [
        { name: 'Relevance', value: null },
        { name: 'Highest rating', value: 'rating' },
        { name: 'Highest price', value: 'price' },
        { name: 'Lowest price', value: '-price' },
      ],
    }
  },
  computed: {
    ...mapState(['products']),
    keyword() {
      return this.$route.query?.keyword ?? ''
    },
    results() {
      return {
        showing: this.$store.state.products?.length ?? 0,
        total: this.$store.state.meta?.count ?? 0,
      }
    },
  },
  watch: {
    sort(sort) {
      const query: Record<string, any> = { ...this.$route.query, sort }
      Object.keys(query).forEach((key) => {
        if (!query[key]) delete query[key]
      })
      this.$router.push({ query })
    },
    '$route.query'(value) {
      if (value?.sort !== (this as any).sort) {
        ;(this as any).sort = value?.sort ?? null
      }
    },
  },
  watchQuery: true,
  methods: {
    ...mapMutations({
      toggleSidebar: 'TOGGLE_SIDEBAR',
    }),
  },
})
</script>

<style lang="scss" scoped>
.page {
  &__fab {
    position: fixed;
    left: 0;
    right: 0;
    bottom: calc($height-footer + calc(2 * $space-1));
    margin: 0 auto;
    width: 100px;
    z-index: 1;
  }
  &__panel {
    margin-bottom: $space-1;
    @include screen-tablet {
      padding: 0 $space-1;
    }
  }
  &__summary {
    font-size: 0.875rem;
    color: $color-neutral-5;
    margin-bottom: $space-1;
    @include screen-tablet {
      padding: 0 $space-1;
    }
  }
  &__button {
    padding: 0.5rem 1.5rem;
    border: none;
    border-radius: $radius-full;
    background-color: white;
    box-shadow: $shadow-float;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    cursor: pointer;
    @include screen-desktop {
      display: none;
    }
  }
}
</style>
