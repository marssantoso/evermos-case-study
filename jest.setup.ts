import Vue from 'vue'

const components = [
  // atoms
  '~/components/atoms/ANuxtLogo.vue',
  // molecules
  '~/components/molecules/MTutorialCard.vue',
]

components.forEach((path: string) => {
  const name = path.match(/(\w*)\.vue$/)?.[1] ?? ''
  Vue.component(`${name}`, require(path).default)
})
