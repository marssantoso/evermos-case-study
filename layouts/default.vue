<template>
  <div class="layout">
    <m-navbar />
    <div class="layout__container">
      <m-sidebar />
      <div class="layout__content">
        <m-breadcrumb />
        <main class="layout__main">
          <nuxt />
        </main>
      </div>
    </div>
    <m-footer />
    <a-backdrop :value="isSidebarOpen" @click.native="toggleSidebar(false)" />
  </div>
</template>

<script>
import Vue from 'vue'
import { mapState, mapMutations } from 'vuex'

export default Vue.extend({
  name: 'LayoutDefault',
  computed: {
    ...mapState(['isSidebarOpen']),
  },
  methods: {
    ...mapMutations({ toggleSidebar: 'TOGGLE_SIDEBAR' }),
  },
})
</script>

<style lang="scss">
.layout {
  max-width: $width-container;
  padding-top: calc($height-navbar + $space-1);
  margin: 0 auto;
  &__container {
    display: flex;
    gap: $space-1;
  }
  &__content {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: $space-1;
  }
  &__main {
    height: 100%;
    min-height: calc(
      100vh - $height-navbar - $height-footer - $height-breadcrumb -
        (3 * $space-1)
    );
  }
}
</style>
