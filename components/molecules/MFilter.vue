<template>
  <div class="m-filter">
    <header class="m-filter__header">
      <p class="m-filter__title">Filter by:</p>
    </header>
    <section v-if="categoryOptions.length" class="m-filter__section">
      <p class="m-filter__subtitle">Category</p>
      <div class="m-filter__form">
        <m-checkbox-group v-model="filter.category" :options="categoryOptions" />
      </div>
    </section>
    <section v-if="locationOptions.length" class="m-filter__section">
      <p class="m-filter__subtitle">Location</p>
      <div class="m-filter__form">
        <m-checkbox-group v-model="filter.location" :options="locationOptions" />
      </div>
    </section>
    <section class="m-filter__section">
      <p class="m-filter__subtitle">Price</p>
      <div class="m-filter__form">
        <a-input-range id="minPrice" v-model="filter.minPrice" label="Min. price" :min="facets.price.min || 0" :max="facets.price.max || 1000000" />
        <a-input-range id="maxPrice" v-model="filter.maxPrice" label="Max. price" :min="facets.price.min || 0" :max="facets.price.max || 1000000" />
        <div class="m-filter__range">
          {{ formatCurrency(filter.minPrice, 'Rp') }} -
          {{ formatCurrency(filter.maxPrice, 'Rp') }}
        </div>
      </div>
    </section>
    <footer class="m-filter__section">
      <button class="m-filter__button" :disabled="isDisableReset" @click="handleReset">Reset Filter</button>
    </footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
import { formatCurrency } from '~/utils/formatters'
import { Option, Filter } from '~/utils/types'

interface Data {
  filter: Filter
}

interface Query {
  category: string | string[]
  location: string | string[]
  minPrice: string
  maxPrice: string
}

export default Vue.extend({
  name: 'MFilter',
  data(): Data {
    const { category, location, minPrice, maxPrice } = this.$route.query as unknown as Query
    const { min, max } = this.$store.state.facets.price

    return {
      filter: {
        category: category ? (Array.isArray(category) ? category : [category]) : [],
        location: location ? (Array.isArray(location) ? location : [location]) : [],
        minPrice: minPrice ? parseInt(minPrice as string) : min ?? 0,
        maxPrice: maxPrice ? parseInt(maxPrice as string) : max ?? 1000000,
      },
    }
  },
  computed: {
    ...mapState(['facets']),
    categoryOptions(): Option[] {
      return this.facets.category.map((v: string) => ({ name: v, value: v }))
    },
    locationOptions(): Option[] {
      return this.facets.location.map((v: string) => ({ name: v, value: v }))
    },
    isDisableReset(): boolean {
      const { category, location, minPrice, maxPrice } = this.filter
      const { min, max } = this.facets.price
      return !category.length && !location.length && (!min || minPrice === min) && (!max || maxPrice === max)
    },
  },
  watch: {
    filter: {
      deep: true,
      handler(value) {
        const query = { ...this.$route.query, ...value }

        if (!query.location.length) delete query.location
        if (!query.category.length) delete query.category
        if (!query.minPrice || query.minPrice <= this.facets.price.min) delete query.minPrice
        if (!query.maxPrice || query.maxPrice >= this.facets.price.max) delete query.maxPrice

        this.$router.push({ query })
      },
    },
    '$route.query.keyword'() {
      this.handleReset()
    },
  },
  methods: {
    formatCurrency(...args: [number, string]) {
      return formatCurrency(...args)
    },
    handleReset() {
      const { min, max } = this.$store.state.facets.price
      this.filter.category = []
      this.filter.location = []
      this.filter.minPrice = min ?? 0
      this.filter.maxPrice = max ?? 1000000
    },
  },
})
</script>

<style lang="scss" scoped>
.m-filter {
  &__header {
    height: 2rem;
    display: flex;
    align-items: center;
  }
  &__title {
    font-size: 0.875rem;
    margin: unset;
  }
  &__section {
    margin-top: $space-1;
  }
  &__subtitle {
    font-size: 0.875rem;
    margin: unset;
    margin-bottom: 4px;
    font-weight: bold;
  }
  &__form {
    max-height: 200px;
    overflow: scroll;
    border: 1px solid $color-neutral-3;
    border-radius: $radius-2;
    padding: $space-1;
    box-shadow: $shadow-light;
  }
  &__range {
    font-size: 0.875rem;
    text-align: center;
  }
  &__button {
    width: 100%;
    padding: 0.875rem 1.5rem;
    font-size: 1rem;
    border: 1px solid $color-blue-2;
    border-radius: $radius-2;
    background-color: $color-blue-3;
    color: $color-blue-6;
    box-shadow: $shadow-glow;
    cursor: pointer;
    &:disabled {
      border-color: $color-neutral-2;
      background-color: $color-neutral-3;
      color: $color-neutral-4;
      box-shadow: unset;
    }
  }
}
</style>
