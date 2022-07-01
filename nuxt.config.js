export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Search for countless amazing products – Nuxt Storefront',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/scss/global.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  // v2 requires additional config for nested components: https://github.com/nuxt/components#v1-to-v2
  components: [
    { path: '~/components/atoms', pathPrefix: false },
    { path: '~/components/molecules', pathPrefix: false },
    { path: '~/components/organisms', pathPrefix: false },
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://github.com/nuxt-community/style-resources-module
    '@nuxtjs/style-resources',
    // https://image.nuxtjs.org/getting-started/installation
    '@nuxt/image',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
  ],

  // Runtime Configs: https://nuxtjs.org/docs/configuration-glossary/configuration-runtime-config/
  publicRuntimeConfig: {
    apiURL: process.env.API_URL || 'http://localhost:8000',
  },

  // Server Middleware: https://nuxtjs.org/docs/configuration-glossary/configuration-servermiddleware/
  serverMiddleware: [{ path: '/api', handler: '~/server/api.ts' }],

  // Style Resources
  styleResources: {
    scss: ['./assets/scss/_variables.scss', './assets/scss/_mixins.scss'],
  },

  // Nuxt Storybook: https://storybook.nuxtjs.org/
  storybook: {
    port: 4000,
    addons: ['@storybook/addon-controls', '@storybook/addon-actions'],
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.API_URL || 'http://localhost:3000',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
