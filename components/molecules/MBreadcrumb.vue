<template>
  <div class="m-breadcrumb">
    <template v-for="(item, index) in items">
      <div :key="item.href" class="m-breadcrumb__item">
        <nuxt-link
          v-if="!item.isDisabled"
          :to="item.href"
          class="m-breadcrumb__link"
          >{{ item.text }}</nuxt-link
        >
        <span
          v-else
          :to="item.href"
          class="m-breadcrumb__link m-breadcrumb__link--disabled"
          >{{ item.text }}</span
        >
      </div>
      <span
        v-if="index !== items.length - 1"
        :key="item.href"
        class="m-breadcrumb__separator"
        >&gt;</span
      >
    </template>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'MBreadcrumb',
  computed: {
    items() {
      const paths = this.$route.path?.substring(1).split('/')
      const names = this.$route.matched[0].path.substring(1).split('/')
      const items = names.map((name, index) => {
        const text = name.includes(':')
          ? paths[index].split('-').join(' ')
          : name
        const href = `/${paths.slice(0, index + 1).join('/')}`
        return { text, href }
      })

      if (this.$route.query.keyword) {
        items.push({
          text: this.$route.query.keyword as string,
          href: this.$route.fullPath,
        })
      }

      return items.map((item, index) => ({
        ...item,
        isDisabled: index === items.length - 1,
      }))
    },
  },
})
</script>

<style lang="scss" scoped>
.m-breadcrumb {
  width: 100%;
  height: $height-breadcrumb;
  padding: $space-1;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  gap: $space-1;
  background-color: $color-neutral-2;
  &__link {
    text-transform: capitalize;
  }
}
</style>
