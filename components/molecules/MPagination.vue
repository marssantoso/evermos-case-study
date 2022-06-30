<template>
  <div class="m-pagination">
    <!-- <pre>{{ meta }}</pre> -->
    <a-pagination-link :href="prevLink" :is-disabled="!prevLink">
      <img src="~/assets/images/icon-chevron-double-left.svg" alt="prev" class="m-pagination__icon" />
    </a-pagination-link>
    <a-pagination-link v-for="page in pages" :key="page.text" :href="page.href">{{ page.text }}</a-pagination-link>
    <a-pagination-link :href="nextLink" :is-disabled="!nextLink">
      <img src="~/assets/images/icon-chevron-double-right.svg" alt="prev" class="m-pagination__icon" />
    </a-pagination-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'

export default Vue.extend({
  name: 'MPagination',
  computed: {
    ...mapState(['meta']),
    pages() {
      if (!this.meta) return []
      const { currentPage, totalPage } = this.meta
      const start = currentPage < 5 || totalPage < 10 ? 0 : totalPage - currentPage <= 5 ? totalPage - 10 : currentPage - 5
      const end = start + 10
      return Array.from({ length: totalPage })
        .map((_, index) => index + 1)
        .slice(start, end)
        .map((page) => {
          if (this.meta.currentPage === page) return { text: page, href: undefined }
          if (page === 1) {
            const query: { page?: string } = { ...this.$route.query }
            delete query.page
            return { text: page, href: { name: this.$route.name, query } }
          }

          const href = {
            name: this.$route.name,
            query: { ...this.$route.query, page },
          }
          return { text: page, href }
        })
    },
    prevLink() {
      if (this.meta?.currentPage <= 1) return undefined
      const prevPage = this.meta?.currentPage - 1
      const query: { page?: number } = { ...this.$route.query, page: prevPage }
      if (prevPage === 1) delete query.page
      return { name: this.$route.name, query }
    },
    nextLink() {
      if (this.meta?.currentPage >= this.meta?.totalPage) return undefined
      const currentPage = this.meta?.currentPage <= 1 ? 1 : this.meta?.currentPage
      return {
        name: this.$route.name,
        query: { ...this.$route.query, page: currentPage + 1 },
      }
    },
  },
})
</script>

<style lang="scss" scoped>
.m-pagination {
  display: flex;
  justify-content: center;
  margin-top: $space-1;
  gap: 4px;
}
</style>
